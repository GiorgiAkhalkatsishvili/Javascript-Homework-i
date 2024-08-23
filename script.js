

let buttons = document.querySelectorAll(".btn");


for (i = 0; i < buttons.length; i++){
  let eachButton = buttons[i];
  eachButton.addEventListener("click", function () {
    eachButton.style.backgroundColor = "red";
    eachButton.style.color = "#0d0d7f";
    eachButton.innerHTML = "Button clicked!"
  })
}



