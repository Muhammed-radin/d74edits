var user = JSON.parse(localStorage.getItem('user'))

class UserDataModel {
  constructor(name, email, id, data) {
    this.name = name
    this.email = email
    this.id = id
    this.data = data
  }
}

function logIt() {
  if (localStorage.getItem('user')) {
    if (user.name.includes('guest') && user.email.includes('guest')) {
      if (user.id == undefined) {
        setText('Updating...')
        loadit()
        db.get('account?q=' + decodeURI(JSON.stringify({ name: user.name, email: user.email })), function(xhr) {
          var res = JSON.parse(xhr.response)
          localStorage.setItem('user', JSON.stringify(new UserDataModel(user.name, user.email, res._id, JSON.stringify(res))))
          unload()
          logIt()
        })
      }
    } else {
      document.getElementById('submit').onclick = function() {
        setText('Singing...')
        loadit()
        db.get('account?q=' + decodeURI(JSON.stringify({ email: document.getElementById('email').value, password: document.getElementById('password').value })), function(xhr) {
          console.log(res);
          //localStorage.setItem('user', JSON.stringify(new UserDataModel(user.name, user.email, res._id, JSON.stringify(res))))
          unload()
        })
      }
    }
  }
}

function setText(txt) {
  document.querySelector('.loadtitle').innerHTML = txt
}

document.querySelector('.block-div').style.zIndex = '9999';

function loadit() {
  document.querySelector('.block-div').style.display = 'block';

  document.querySelectorAll('.center *').forEach(function(elem) {
    elem.style.display = 'block'
  })
}

function unload() {
  document.querySelector('.block-div').style.display = 'none';

  document.querySelectorAll('.center *').forEach(function(elem) {
    elem.style.display = 'none'
  })
}