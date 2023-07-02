document.getElementById('leftBarCloser').onclick = function() {
  document.querySelector('.left-bar').animate([{
    transform: "translate(0%)"
  }, {
    transform: "translate(-120%)"
  }],
  {duration: 500, iterations: 1})
  
  setTimeout(function(){
    document.querySelector('.left-bar').style.display = 'none'
  }, 410)
}

document.getElementById('menuOpener').onclick = function (){
  document.querySelector('.left-bar').style.display = 'block'
}