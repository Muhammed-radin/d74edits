var params = location.search.replace('?', '');
var paramsString = '{"' + params.replaceAll("&", '","').replaceAll('=', '":"') + '"}';
if (params == '') {
  alert("File Not Found", "sorry, this id not found", function() {
    window.location.href = '../'
  })
  window.location.href = '../'
} else {
  var objectParams = JSON.parse(paramsString);
  objectParams = objectParams

  if (objectParams.id == undefined) {

  } else {
    var ytId = objectParams.id
    var q = 'videos?q=' + decodeURI(JSON.stringify({ ytid: ytId }))

    db.get(q, function(xhr) {
      var res = JSON.parse(xhr.response)[0]

      document.getElementById('title').value = res.title
      document.getElementById('password').value = res.pw
      document.getElementById('date').value = res.date
      document.getElementById('ytid').value = res.ytid
      document.getElementById('sid').value = res._id
      document.getElementById('vurl').value = res.url
      document.getElementById('imgUrl').value = res.thumb
      
      loadImg()
    })
  }
}

function loadImg() {
  document.getElementById('img').src = document.getElementById('imgUrl').value
  document.getElementById('img').onerror = function() {
    document.getElementById('img').src = '../../visit/image.png'
  }
}

document.getElementById('imgUrl').addEventListener('change', loadImg);
document.getElementById('imgUrl').addEventListener('keyup', loadImg);