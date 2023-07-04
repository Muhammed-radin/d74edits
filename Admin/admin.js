var err = 0
if (localStorage.getItem('adminErr')) {
  err = localStorage.getItem('adminErr')
} else {
  err = 0
}

//localStorage.clear()

document.getElementById('submit').onclick = function() {
  if (localStorage.getItem('adminErr') <= 5) {
    if (document.getElementById('username').value != false) {
      if (document.getElementById('password').value == '9h₩€eN5y!A3;J2Cku72gXuCHR)U&vdaAm$BXJsegLB3Gt5Z^+s5*teg&!2U₩9IX4') {
        document.querySelector('.form-center').style.display = document.querySelector('.block-div').style.display = 'none'
        localStorage.setItem('admin', JSON.stringify({ date: Date.now() }))
      } else {
        alert('please type valid password', 'password incorrect,  please type valid password')
        err += 1
        localStorage.setItem('adminErr', err)
        redirctTo('./')
      }
    } else {
      alert('username not found')
      redirctTo('./')
    }
  } else {
    alert('Sorry!', 'Maximum login attempts reached on this day')
    setTimeout(function() {
      redirctTo('./')
    }, 2000)
  }
}