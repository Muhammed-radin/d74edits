var canvas = Mango();
var mng = canvas;
var mango = canvas;
var cnv = canvas.setCanvas(document.getElementById('c'));
var ctx = cnv.ctx;
var elem = document
var elem = cnv.elem;
var entity = canvas.entity;
var entityGroup = canvas.entityGroup;
var layer = canvas.Layer;
var app = canvas.app

elem.style.border = '1px solid'

canvas.setWidth(330, 350)

var nowTool = 'move'
var touchstart = 0
var touchend = 0
var selection = []

document.querySelectorAll('ion-icon').forEach(function(icon){
  icon.onclick = function(){
    document.querySelectorAll('ion-icon').forEach(function(ico){
     ico.className = ico.className.replace('active', '__')
    })
    
    icon.className = icon.className.replace('__','active')
    nowTool = icon.dataset.r
  }
})

function move(e){
  switch (nowTool) {
    case 'move':
      selection.forEach(function (entity){
        entity.x = e.clientX
      })
      break;
    case 'rect': 
      
      break;
  }
}


elem.addEventListener('touchstart', function(e){
  touchstart = e
  elem.addEventListener('touchmove', move)
})

elem.addEventListener('touchstart', function(e){
  touchend = e
  elem.removeEventListener('touchmove', move)
})

canvas.specialRender()