var nowUrl = ''
function addScript(path) {
  var script = document.createElement('script')
  script.src = nowUrl + path
  document.body.appendChild(script)
}

var heading = "D74 Edits"
addScript('../veiw/alert.js');
//addScript('../view/d74.js');

function redirctTo(url){
  window.location.href = url
}
/*
if (document.querySelector('nav .title')) {
  var title = document.querySelector('nav .title')
  var i = 0
  setInterval(function() {
    i += 1
    i = i % (heading.length)
    //for (var i = 0; i < heading.length; i++) {
    var heading1 = heading.slice(0, i)
    var heading2 = heading.slice(i + 1, heading.length)
    heading = heading1 + '<v style="font-weight: bold">' + heading[i] + '</v>' + heading2
    title.innerHTML = heading
  }, 5000)
  //}
}
*/
if (document.querySelector('.menu')) {
  var menu = document.querySelector('.menu')
  menu.style.left = (window.innerWidth / 2) - (menu.offsetWidth / 2) + 'px'

  var adminPermission = {
    started: false,
    duration: 0
  }

  document.querySelector('body').addEventListener("touchstart", function() {
    adminPermission.started = true;
    adminPermission.duration = 0
  })

  document.querySelector('body').ontouchend = function() {
    adminPermission.started = false;
    adminPermission.duration = 0
  }
  
  setInterval(function() {
    if (adminPermission.started) {
      adminPermission.duration += 1

      if (adminPermission.duration >= 2500) {
        document.querySelector('.title') ? document.querySelector('.title').innerHTML = heading + ' [<small>' + adminPermission.duration + '</small>]' : ''
      } else {
        document.querySelector('.title') ? document.querySelector('.title').innerHTML = heading : ''
      }


      if (adminPermission.duration >= 4100) {
        window.location.href = '../Admin'
      }
    }
  }, 0.5)

}

if (localStorage.getItem('admin')) {
  var code = '<div class="link" onclick="redirctTo(\''+nowUrl+'../Admin\')">Admin</div>'
  document.querySelector('.left-bar').innerHTML += code
}

alert('Development mode', 'Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.')

if (document.querySelector('nav')) {
  document.querySelector('.left-bar').ondblclick = document.getElementById('leftBarCloser').onclick = function() {
    document.querySelector('.left-bar').animate([{
      transform: "translate(0%)"
  }, {
      transform: "translate(-120%)"
  }], { duration: 500, iterations: 1 })

    setTimeout(function() {
      document.querySelector('.left-bar').style.display = 'none'
    }, 410)
  }
  
  document.querySelector('nav').animate([{
    borderRadius: '0px',
    margin: '0px'
  }, {
    borderRadius: '4px',
    margin: '8px'
  }, {
    borderRadius: '8px',
    margin: '8px'
  }], {
    duration: 500,iterations: 1,
  }).onfinish = function (){
    document.querySelector('nav').style.borderRadius = '8px'
    document.querySelector('nav').style.margin = '8px'
  }

  document.getElementById('menuOpener').onclick = function() {
    document.querySelector('.left-bar').style.display = 'block'
    document.querySelectorAll('.link').forEach(function(elem, index){
      elem.style.transform = 'translate(20px) scale(1.3)'
      elem.animate([{
        transform: "translate(20px) scale(1.3)"
      }, {
        transform: "translate(0px) scale(1)"
      }], {
        duration: 400,
        delay: index * 100,
        iterations: 1
      }).onfinish = function (){
        elem.style.transform = 'translate(0px) scale(1)'
      }
    })
  }
}