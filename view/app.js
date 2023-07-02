function addScript(path) {
  var script = document.createElement('script')
  script.src = path + '.js'
  document.body.appendChild(script)
}

addScript('../veiw/alert')

if (document.querySelector('nav .title')) {
  var title = document.querySelector('nav .title')
  var i = 0
  setInterval(function() {
    var text = "D74 Edits"
    i += 1
    i = i % (text.length)
    //for (var i = 0; i < text.length; i++) {
    var text1 = text.slice(0, i)
    var text2 = text.slice(i + 1, text.length)
    text = text1 + '<v style="font-weight: bold">' + text[i] + '</v>' + text2
    title.innerHTML = text
  }, 5000)
  //}
}

if (document.querySelector('.menu')) {
  var menu = document.querySelector('.menu')
  menu.style.left = (window.innerWidth / 2) - (menu.offsetWidth / 2) + 'px'
}

alert('Development mode', 'Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.')

if (document.querySelector('nav')) {
  document.getElementById('leftBarCloser').onclick = function() {
    document.querySelector('.left-bar').animate([{
      transform: "translate(0%)"
  }, {
      transform: "translate(-120%)"
  }], { duration: 500, iterations: 1 })

    setTimeout(function() {
      document.querySelector('.left-bar').style.display = 'none'
    }, 410)
  }

  document.getElementById('menuOpener').onclick = function() {
    document.querySelector('.left-bar').style.display = 'block'
  }
}