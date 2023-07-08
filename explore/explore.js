db.getYTchannelVideos(function(xhr = new XMLHttpRequest()) {
  var res = JSON.parse(xhr.response)

  if (document.querySelector('.loader-bg')) {
    document.querySelector('.loader-bg').style.display = 'none'
  }

  res.items.forEach(function(data, index) {
    var id = 'ID_10' + index
    var snippet = data.snippet
    var code = `<div class="card" id="${id}">
      <div class="card-date">${snippet.publishedAt.slice(0, 10)}</div>
      <div class="card-img">
        <img src="${snippet.thumbnails.medium.url}" alt="yt">
      </div>
      <div class="card-title">${snippet.title}</div>
      <div class="card-opt-icon" onclick="openOptions('${id+"2"}')">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
      <div class="card-options" id="${id+"2"}">
        <div class="card-head">
          Options
        </div>
        <div class="card-body">
          <p class="card-opt">
            View
          </p>
          <p class="card-opt">
            Save
          </p>
          <p class="card-opt" onclick="closeOptions('${id+'2'}')">
            Close
          </p>
        </div>
    </div>
`
    document.querySelector('.body').innerHTML += code
  })
})

function openOptions(id) {
  var elem = document.getElementById(id)
  elem.style.display = 'block'
}

function closeOptions(id) {
  var elem = document.getElementById(id)
  elem.style.display = 'none'
}

if (localStorage.getItem('user')) {

} else {
  var name = 'guest' + Math.floor(Math.random() * 9999)

  var user = {
    name: name,
    email: name + '@gmail.com'
  }

  db.push('account', JSON.stringify({
    name: user.name,
    email: user.email
  }))

  localStorage.setItem('user', JSON.stringify(user))
}