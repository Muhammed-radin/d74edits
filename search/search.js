function searchVideos(search) {
  document.querySelector('.loader-bg').style.display = 'block'
  db.get('videos?h=' + decodeURI(JSON.stringify({})), function(xhr = new XMLHttpRequest()) {
    var res = JSON.parse(xhr.response)


    if (document.querySelector('.loader-bg')) {
      document.querySelector('.loader-bg').style.display = 'none'
    }

    document.getElementById('searcher').onchange = function() {
      res.forEach(function(data, index) {
        if (data.title.toLocaleLowerCase().includes(document.getElementById('searcher').value.toLocaleLowerCase()) || data.description.toLocaleLowerCase().includes(document.getElementById('searcher').value.toLocaleLowerCase())) {
          var id = 'ID_10' + index
          var snippet = data
          var code = `<div class="card" id="${id}" >
      <div class="card-date">${snippet.date.slice(0, 10)}</div>
      <div class="card-img" onclick="redirctTo('../visit/?id=${data.ytid}')">
        <img src="${snippet.thumb}" alt="yt">
      </div>
      <div class="card-title" onclick="redirctTo('../visit/?id=${data.ytid}')">${snippet.title}</div>
      <button class="card-opt-icon" onclick="openOptions('${id+"2"}')">Actions</button>
      <!--div class="card-opt-icon">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div-->
      <div class="card-options" id="${id+"2"}">
        <div class="card-head">
          Options
        </div>
        <div class="card-body">
          <p class="card-opt" onclick="redirctTo('../visit/?id=${data.ytid}')">
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
        }
      })
    }
  })
}

function openOptions(id) {
  var elem = document.getElementById(id)
  elem.style.display = 'block'
}

function closeOptions(id) {
  var elem = document.getElementById(id)
  elem.style.display = 'none'
}

searchVideos('')