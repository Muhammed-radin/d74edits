const db = {
  qC4dK: '64a3b47b86d8c5956ded8f77',
  push(collection, data = {}, onfinish) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        onfinish(this)
      }
    });

    xhr.open("POST", "https://d74edits-fce6.restdb.io/rest/" + collection);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", this.qC4dK);
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);

    return xhr
  },
  get(collection, finish) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        onfinish(this)
      }
    });

    xhr.open("GET", "https://d74edits-fce6.restdb.io/rest/" + collection);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", this.qC4dK);
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);

    return xhr
  },
  getYTchannelVideos(onfinish) {
    const data = null;

    
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener('readystatechange', function() {
      if (this.readyState === this.DONE) {
        onfinish(xhr)
        
        if (this.status == 0) {
          alert('failed to load!')
        }
      }
    });

    xhr.open('GET', 'https://youtube-v31.p.rapidapi.com/search?channelId=UCvdaERWKWOjQBAREfPyK1ww&part=snippet%2Cid&order=date&maxResults=250');
    xhr.setRequestHeader('X-RapidAPI-Key', '786ab693aamsh13b490be165befdp1ebb1bjsn20906d36a500');
    xhr.setRequestHeader('X-RapidAPI-Host', 'youtube-v31.p.rapidapi.com');

    xhr.send(data);
  }
}