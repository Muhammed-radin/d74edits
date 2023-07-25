var pw = document.getElementById('pw')
var admin_passid = '64bf4b3ea1ce3020000abcb4'

document.getElementById('sbt').onclick = function(){
  if (pw.value.length < 20) {
    alert('password required minimum 20+ words and numbers')
  } else {
    db.get('custom')
  }
}