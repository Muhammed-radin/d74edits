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

    xhr.open("POST", "https://d74edits-fce6.restdb.io/rest/"+collection);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", this.qC4dK);
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
    
    return xhr
  },
  get(collection, finish){
    var data = null;
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        onfinish(this)
      }
    });

    xhr.open("POST", "https://d74edits-fce6.restdb.io/rest/"+collection);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", this.qC4dK);
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
    
    return xhr
  }
}