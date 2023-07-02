if (document.querySelector('nav .title[animation="true"]')) {
  var title = document.querySelector('nav .title')
  var i = 0
  setInterval(function() {
    var text = "D74 Edits"
    i += 1
    i = i % (text.length)
    //for (var i = 0; i < text.length; i++) {
    var text1 = text.slice(0, i)
    var text2 = text.slice(i + 1, text.length)
    text = text1 + '<v style="font-weight: bold">' + text[i] + '</v>' + text2
    title.innerHTML = text
  }, 5000)
  //}
}