var user = JSON.parse(localStorage.getItem('user'))

class UserDataModel {
  constructor(name, email, id, data) {
    this.name = name
    this.email = email
    this.id = id
    this.data = data
  }
}

unload()
logIt()

function logIt(lg = false) {
  var user = JSON.parse(localStorage.getItem('user'))

  if (localStorage.getItem('user')) {
    if (user.name.includes('guest') && user.email.includes('guest')) {
      if (user.id == undefined) {
        setText('Updating...')
        loadit()
        db.get('account?q=' + decodeURI(JSON.stringify({ name: user.name, email: user.email })), function(xhr) {
          var res = JSON.parse(xhr.response)
          localStorage.setItem('user', JSON.stringify(new UserDataModel(user.name, user.email, res[0]._id, JSON.stringify(res))))
          unload()
          logIt(true)
        })
      }
    } else {

    }
  }


  document.getElementById('submit').addEventListener('click', function() {
    setText('Singing...')
    loadit()
    db.get('account?q=' + decodeURI(JSON.stringify({ email: document.getElementById('email').value, password: document.getElementById('password').value })), function(xhr) {
      var res = JSON.parse(xhr.response);
      if (res.length == 0) {
        alert('Signing Failed', 'Account not found, some reasons given below, type valid email and password <ul><li>Account Banned</li><li>or Account Deleted</li><li>or Invalid Email & Password</li><li>or Internet connection error</li></ul>')
      }

      //localStorage.setItem('user', JSON.stringify(new UserDataModel(user.name, user.email, res._id, JSON.stringify(res))))
      unload()
    })
  })

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