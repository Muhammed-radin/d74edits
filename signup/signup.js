function logIt(lg = false) {
  var user = JSON.parse(localStorage.getItem('user'))

  if (localStorage.getItem('user')) {
    if (user.name.includes('guest') && user.email.includes('guest')) {
      if (user.id == undefined) {
        setText('Updating...')
        loadit()
        db.get('account?q=' + decodeURI(JSON.stringify({ name: user.name, email: user.email })), function(xhr) {
          var res = JSON.parse(xhr.response)
          if (res.length == 0) {
            localStorage.removeItem('user')
          } else {
            localStorage.setItem('user', JSON.stringify(new UserDataModel(user.name, user.email, res[0]._id, JSON.stringify(res))))
          }
          unload()
          logIt(true)
        })
      }
    } else {

    }
  }

  function $(id) {
    return document.getElementById(id)
  }

  document.getElementById('submit').addEventListener('click', function() {
    if ($('username').value == false ||
      $('password').value == false ||
      $('confPass').value == false ||
      $('email') == false) {
      alert('please fill inputs')
    } else if ($('email').value.includes('@') == false 
    || $('email').value.includes('.') == false 
    || $('email').value.slice($('email').value.lastIndexOf('.'), $('email').value.length).length >= 2){
      alert('please type vail email')
    } else if ($('password').value.length >= 8) {
      alert('password required minimum 8 letters')
    } else if ($('password').value == $('confPass').value){
      alert('password and configure password is not equal')
    } else {
    setText('Creating...')
    loadit()
    if (localStorage.getItem('user')) {
      db.put('accounts/' + JSON.parse(localStorage.getItem('user')).id, JSON.stringify({
        name: document.getElementByI('username').value,
        password: document.getElementByI('password').value,
        email: document.getElementByI('email').value,
      }), function(xhr) {
        var res = JSON.parse(xhr.response);
        if (res.length == 0) {
          alert('Signing Failed', 'Account not found, some reasons given below, type valid email and password <ul><li>Account Banned</li><li>or Account Deleted</li><li>or Invalid Email & Password</li><li>or Internet connection error</li></ul>')
        } else {
          localStorage.setItem('user', JSON.stringify(new UserDataModel(res[0].name, res[0].email, res[0]._id, JSON.stringify(res))))
          redirctTo('../explore')
        }

        unload()
      })
    }}
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