let btns = window.document.querySelectorAll('button');

btns.forEach(element => {
  element.addEventListener("click", function (event) {
    console.log("Btn click !");
    event.target.style.color = "black"
    
    if (event.target.previousElementSibling.tagName == "button")
      event.target.previousElementSibling.style.color = "red";

    if (event.target.nextElementSibling.tagName == "button")
      event.target.nextElementSibling.style.color = "red";

    console.log(event.target.getBoundingClientRect());
  });
});