let message = window.document.querySelector('#message');
let listUL = window.document.querySelector('#listUL');
let Loaded = true;

for (let i = 0; i < 2; i++) {
  fetch('/api/data')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      LoadingUL(response);
    })
    .catch(error => console.log("Erreur : " + error));
}

window.addEventListener("scroll", function () {
  if (this.window.innerHeight > message.getBoundingClientRect().top && Loaded == true) {
    message.textContent = "Loading ...";
    console.log("Loading ...");
    Loaded = false;

    fetch('/api/data')
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response);
        LoadingUL(response);
        message.textContent = "Loaded";
        Loaded = true;
        console.log("Loaded");
      })
      .catch(error => console.log("Erreur : " + error));
  }
});

function LoadingUL(response) {
  response.data.forEach(element => {
    let li = document.createElement('li');
    li.innerHTML = element.text;
    listUL.appendChild(li);
  });
}
