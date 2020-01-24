let btns = window.document.querySelectorAll('button');

btns.forEach(element => {
  element.addEventListener("click", function(event){
    console.log("Btn click !");
    event.target.style.color = "black"
    event.target.previousElementSibling.style.color = "red";
    event.target.nextElementSibling.style.color = "red";
  });
});