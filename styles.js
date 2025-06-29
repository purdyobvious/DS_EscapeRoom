var buttons = document.querySelectorAll(".television__channel a");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    document.querySelector(".television__screen iframe").src = this.href;
    event.preventDefault();
  });
}
