let movement = null;
let movementTimer = null;
const scene = document.querySelector(".scene");

function startMovement(type) {
  clearTimeout(movementTimer);
  movement = type;
  scene.className = "scene " + type; // e.g., 'scene moveForward'
  movementTimer = setTimeout(stopMovement, 5000);
}

function stopMovement() {
  movement = null;
  scene.className = "scene stop";
}

document.querySelectorAll("[data-move]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const moveType = btn.getAttribute("data-move");
    if (moveType === "stop") {
      stopMovement();
    } else {
      startMovement(moveType);
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "w" || e.key === "ArrowUp") startMovement("moveForward");
  if (e.key === "a" || e.key === "ArrowLeft") startMovement("turnLeft");
  if (e.key === "s" || e.key === "ArrowDown") startMovement("moveBack");
  if (e.key === "d" || e.key === "ArrowRight") startMovement("turnRight");
  if (e.key === " " || e.key === "Escape") stopMovement();
});
