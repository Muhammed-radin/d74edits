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
    const data = null;
    const xhr = new XMLHttpRequest();

    xhr.withCredentials = false;

    xhr.addEventListener('readystatechange', function() {
      if (this.readyState === this.DONE) {
        var res = JSON.parse(this.response)
        var snippet = res.items[0].snippet

        document.getElementById('thumb').src = snippet.thumbnails.medium.url
        document.getElementById('tags').innerHTML = ''
        document.getElementById('title').innerHTML = snippet.title
        document.getElementById('date').innerHTML = snippet.publishedAt.slice(0, 10)
        var view = res.items[0].statistics.viewCount
        view = (view >= 1000 ? (view / 1000) >= 1000 ? Math.floor((view / 1000000)) + 'M Views' : Math.floor((view / 1000)) + 'K Views' : view + ' Views')
        document.getElementById('views').innerHTML = view
        document.getElementById('wt').onclick = function() {
          window.location.href = 'https://youtube.com/watch?v=' + res.items[0].id
        }

        var des = snippet.description
        var pureDes = snippet.description
        des = des.replaceAll('\n', '<br />')

        des.match(/#[a-z0-9_]+/g).forEach(function(str) {
          des = des.replace(str, '<a href="">' + str + '</a>')
        })
        des.match(/#[A-z0-9_]+/g).forEach(function(str) {
          des = des.replace(str, '<a href="">' + str + '</a>')
        })

        des = des.replaceAll('<br/><br/><br/>', '<br/>')
        des = des.replaceAll('<br/><br/>', '<br/>')
        des = des.replaceAll('<br /><br /><br />', '<br/>')
        des = des.replaceAll('<br /><br />', '<br/>')

        document.getElementById('pr').innerHTML = des
        snippet.tags.forEach(function(tagName) {
          document.getElementById('tags').innerHTML += '<div class="tag">' + tagName + '</div>'
        })


        if (this.status != 200 || this.status == 0) {
          alert('err: loading failed [' + this.status + ']')
        }
      }
    });

    xhr.open('GET', 'https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=' + objectParams.id);
    xhr.setRequestHeader('X-RapidAPI-Key', '786ab693aamsh13b490be165befdp1ebb1bjsn20906d36a500');
    xhr.setRequestHeader('X-RapidAPI-Host', 'youtube-v31.p.rapidapi.com');
    xhr.send(data);
  }
}