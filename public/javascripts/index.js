let message = window.document.querySelector('#message')
let listUL = window.document.querySelector('#listUL')
let Loaded = true

if (!window.localStorage.getItem('counter')) {
  window.localStorage.setItem('counter', 0)
}
let counter = window.document.querySelector('#counter')
counter.textContent = window.localStorage.getItem('counter')

window.addEventListener('storage', function () {
  // Lire les modifications du local storage qui ont lieu dans d'autres onglets
  console.log('storage event !')
  counter.textContent = window.localStorage.getItem('counter')
})

for (let i = 0; i < 2; i++) {
  fetch('/api/data')
    .then(function (response) {
      return response.json()
    })
    .then(function (response) {
      LoadingUL(response)
      incrementLocalStorageCounter()
    })
    .catch(error => console.log('Erreur : ' + error))
}

window.addEventListener('scroll', function () {
  if (this.window.innerHeight > message.getBoundingClientRect().top && Loaded == true) {
    message.textContent = 'Loading ...'
    console.log('Loading ...')
    Loaded = false

    fetch('/api/data')
      .then(function (response) {
        return response.json()
      })
      .then(function (response) {
        console.log(response)
        LoadingUL(response)
        message.textContent = 'Loaded'
        Loaded = true
        incrementLocalStorageCounter()
        console.log('Loaded')
      })
      .catch(error => console.log('Erreur : ' + error))
  }
})

function LoadingUL (response) {
  response.data.forEach(element => {
    let li = document.createElement('li')
    li.innerHTML = element.text
    listUL.appendChild(li)
  })
}

function incrementLocalStorageCounter () {
  const initialCounter = window.localStorage.getItem('counter')
  window.localStorage.setItem('counter', parseInt(initialCounter) + 1)
  counter.textContent = window.localStorage.getItem('counter')
}
