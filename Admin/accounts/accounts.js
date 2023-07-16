db.get('account', function(xhr) {
  if (xhr.status == 0) {
    alert('Server Error')
  }
  
  document.querySelector('.body').innerHTML += `<p class="acc gr">
      <ion-icon name="people-outline"></ion-icon>
      <sp class="sp">${JSON.parse(xhr.response).length} Accounts</sp>
      <span class="sp">[ ${xhr.status} ]</span>
    </p>`

  JSON.parse(xhr.response).forEach(function(acc) {
    document.querySelector('.body').innerHTML += `<p class="acc">
      <ion-icon name="person-outline"></ion-icon>
      <sp class="sp">${acc.name}</sp>
      <span class="sp">unsubscriber</span>
    </p>`
  })
})