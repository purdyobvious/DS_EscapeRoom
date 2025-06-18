var buttons = document.querySelectorAll(".television__channel a");
console.log(buttons);
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    console.log("Button clicked:", this.href);
    document.querySelector(".television__screen iframe").src = this.href;
    event.preventDefault();
  });
}
