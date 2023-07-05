
db.getYTchannelVideos(function(xhr = new XMLHttpRequest()) {
  var res = JSON.parse(xhr.response)

  if (document.querySelector('.loader-bg')) {
    document.querySelector('.loader-bg').style.display = 'none'
  }

  res.items.forEach(function(data, index) {
    var snippet = data.snippet
    var code = `<div class="card">
      <div class="card-date">${snippet.publishedAt.slice(0, 10)}</div>
      <div class="card-img">
        <img src="${snippet.thumbnails.medium.url}" alt="yt">
      </div>
      <div class="card-title">${snippet.title}</div>
      <div class="card-opt-icon">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
      <!div class="card-options">
        <! /div>
    </div>
`
    document.querySelector('.body').innerHTML += code
  })
})