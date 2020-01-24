let btns = window.document.querySelectorAll('button');

btns.forEach(element => {
  element.addEventListener("click", function (event) {
    console.log("Btn click !");
    event.target.style.color = "black"
    event.target.style.visibility = "hidden"
    console.log("Current Btn " + event.target.style.visibility);

    if (event.target.previousElementSibling.tagName == "BUTTON"){
      event.target.previousElementSibling.style.color = "red";
      event.target.previousElementSibling.style.visibility = "visible";
      console.log("Previous Btn " + event.target.previousElementSibling.style.visibility);
    }

    if (event.target.nextElementSibling.tagName == "BUTTON"){
      event.target.nextElementSibling.style.color = "Green";
      event.target.nextElementSibling.style.visibility = "visible";
      console.log("Next Btn " + event.target.nextElementSibling.style.visibility);
    } 
    console.log(event.target.getBoundingClientRect());
  });
});

let lastElement = window.document.querySelector('#lastElement');
window.addEventListener("scroll", function (event) {
  console.log("Top : " + lastElement.getBoundingClientRect().top + "  Bot : " + lastElement.getBoundingClientRect().bottom);

  if(window.innerHeight > lastElement.getBoundingClientRect().top && lastElement.getBoundingClientRect().bottom > 0){
    console.log("Visible");
  }else{
    console.log("hidden");
  }

});