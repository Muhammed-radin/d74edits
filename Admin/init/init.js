var params = location.search.replace('?', '');
var paramsString = '{"' + params.replaceAll("&", '","').replaceAll('=', '":"') + '"}';
var sid = ''

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

    sub = document.getElementById('sub')
    sug.innerHTML = 'Getting...'
    
    
  }
}