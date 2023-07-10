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
app.css(`
 input[type="color"]{
   width: 40px;
   height: 40px;
   border: 0;
   outline: 0;
 }
`)

canvas.setWidth(330, 350)

var nowTool = 'move'
var touchstart = 0
var touchend = 0
var selection = []
var tempEntity = new entity({})
var pushableEntity = false
var store = []

document.querySelectorAll('input[type="color"]').forEach(function(elem) {
  elem.ontouchstart = function() {
    elem.value = '#123456'
  }
})

function $(id) {
  return document.getElementById(id)
}


document.querySelectorAll('ion-icon').forEach(function(icon) {
  icon.onclick = function() {
    document.querySelectorAll('ion-icon').forEach(function(ico) {
      ico.className = ico.className.replace('active', '__')
    })

    icon.className = icon.className.replace('__', 'active')
    nowTool = icon.dataset.r == 'non' ? nowTool : icon.dataset.r
  }
})

document.querySelectorAll('.inp').forEach(function(elem) {
  elem.onkeyup = function() {
    selection[0][elem.id] = elem.value
  }
})

setInterval(function() {
  if (selection[0]) {
    var entity = selection[0].data == undefined ? selection[0] : selection[0].data
    $('x').value = entity.x
    $('y').value = entity.y
    $('width').value = entity.width
    $('height').value = entity.height
    $('text').value = entity.text
    $('fontSize').value = entity.fontSize
  }
})

function move(e) {
  var e = e.changedTouches[0]
  switch (nowTool) {
    case 'move':
      pushableEntity = false
      selection.forEach(function(entity) {
        entity = entity.data == undefined ? entity : entity.data
        $('x').value = entity.x = e.clientX - (entity.width / 2)
        $('y').value = entity.y = e.clientY - (entity.height / 2)
        $('width').value = entity.width
        $('height').value = entity.height
        $('text').value = entity.text
        $('fontSize').value = entity.fontSize
      })
      break;
    case 'rect':
      tempEntity.data.type = 'rect'
      pushableEntity = true
      tempEntity.data.x = touchstart.clientX
      tempEntity.data.y = touchstart.clientY
      tempEntity.data.width = (e.clientX - touchstart.clientX)
      tempEntity.data.height = (e.clientY - touchstart.clientY)
      tempEntity.data.fill = document.getElementById('fill').value == '#123456' ? 'transparent' : document.getElementById('fill').value
      tempEntity.data.stroke = document.getElementById('str').value == '#123456' ? 'transparent' : document.getElementById('str').value
      break;
    case 'text':
      pushableEntity = true;
      tempEntity.data.type = 'text'
      tempEntity.data.x = touchstart.clientX
      tempEntity.data.y = touchstart.clientY
      ctx.save()
      ctx.fontSize = tempEntity.fontSize
      var txt = ctx.measureText(tempEntity.text)
      ctx.restore()
      console.log(txt.width);
      tempEntity.data.width = txt.width
      tempEntity.data.fill = document.getElementById('fill').value == '#123456' ? 'transparent' : document.getElementById('fill').value
      tempEntity.data.stroke = document.getElementById('str').value == '#123456' ? 'transparent' : document.getElementById('str').value
      break;
  }
}


elem.addEventListener('touchstart', function(e) {
  touchstart = e.touches[0]
  tempEntity = new entity({})
  pushableEntity ? selection[0] = tempEntity.data : ''
  elem.addEventListener('touchmove', move)
})

elem.addEventListener('touchend', function(e) {
  touchend = e.changedTouches[0]
  if (pushableEntity) {
    store.push(tempEntity.data)
    store.forEach(function(entity) {
      entity.on('click', function() {
        selection[0] = entity
        document.getElementById('fill').value = entity.fill
        document.getElementById('str').value = entity.stroke
        document.getElementById('x').value = entity.x
        $("y").value = entity.y
      })
    })
  } else {
    tempEntity.data.destroy()
  }
  elem.removeEventListener('touchmove', move)
})

canvas.specialRender()