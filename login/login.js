/*var user = JSON.parse(localStorage.getItem('user'))

class UserDataModel {
  constructor (name, email, id, data){
    this.name = name
    this.email = email
    this.id = id
    this.data = data
  }
}

if (localStorage.getItem('user')) {
  if (user.name.includes('guest') && user.email.includes('guest')) {
    if (user.id == undefined) {
      loadit()
      db.get('account?q=' + decodeURI(JSON.stringify({ name: user.name, email: user.email})), function(xhr){
        var res = JSON.parse(xhr.response)
        localStorage.setItem('user', JSON.stringify(new UserDataModel(user.name, user.email, res._id, JSON.stringify(res))))
        unload()
      })
    }
  } else {

  }
}*/

loadit()

function loadit() {
  document.querySelector('.block-div').style.display = 'block';
  document.querySelector('.center').style.display = 'block';
  document.querySelector('.main-preload').style.display = 'block'; 
  /*localStorage.setItem('account',{});*/
}

function unload() {
  document.querySelector('.block-div').style.display = 'none';
  document.querySelector('.center').style.display = 'none';
  document.querySelector('.main-preload').style.display = 'none'; 
  /*localStorage.setItem('account',{});*/
}