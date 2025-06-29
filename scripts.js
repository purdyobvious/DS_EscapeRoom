document.addEventListener("DOMContentLoaded", function () {
  const scene = document.querySelector(".scene");
  let debugMode = false;

  const instructions = document.querySelector(".instructions");

  document.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() === "i") {
      debugMode = !debugMode;
      instructions.style.display = debugMode ? "block" : "none";
    }
  });

  // Add CSS for active control feedback
  const style = document.createElement("style");
  style.textContent = `
        #controls a.active {
            background: rgba(197, 22, 22, 1) !important;
            color: white !important;
            transform: scale(1.1);
        }
        
        @media (max-width: 768px) {
            .instructions {
                font-size: 12px;
                padding: 10px;
            }
            
            #controls {
                bottom: 10px;
            }
            
            #controls a {
                font-size: 20px;
                padding: 8px;
            }
        }
    `;
  document.head.appendChild(style);

  console.log("3D Room Scene initialized successfully!");
  console.log("Controls: WASD or Arrow Keys, Spacebar/Escape to stop");
  console.log("Touch: Swipe to navigate on mobile devices");
  console.log('Press "i" to toggle instructions visibility');
});

const cubeContainer = document.querySelector(".cube-container");

// Add click event listener
cubeContainer.addEventListener("click", function () {
  this.classList.toggle("clicked");
});

// Remove the clicked class after animation completes
cubeContainer.addEventListener("animationend", function () {
  this.classList.remove("clicked");
});

document.querySelector(".letter").addEventListener("click", () => {
  document.body.classList.toggle("change");
});

const roseFrame = document.querySelector(".rose-frame");

roseFrame.addEventListener("click", function () {
  this.classList.toggle("clicked");
});

roseFrame.addEventListener("animationend", function () {
  this.classList.remove("clicked");
});

const toyBox = document.querySelector(".toy-box-left");

toyBox.addEventListener("click", function () {
  this.classList.toggle("clicked");
});

let movement = null;
let movementTimer = null;
const scene = document.querySelector(".scene");

function startMovement(type) {
  clearTimeout(movementTimer);
  movement = type;
  scene.className = "scene " + type;
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

window.addEventListener("load", () => {
  window.focus();
});
window.addEventListener("click", () => {
  window.focus();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "w" || e.key === "ArrowUp") startMovement("moveForward");
  if (e.key === "a" || e.key === "ArrowLeft") startMovement("turnLeft");
  if (e.key === "s" || e.key === "ArrowDown") startMovement("moveBack");
  if (e.key === "d" || e.key === "ArrowRight") startMovement("turnRight");
  if (e.key === " " || e.key === "Escape") stopMovement();

  if (e.key === "PageUp") {
    currentPx = Math.max(minPx, currentPx - 20);
    currentPercent = pxToPercent(currentPx);
    updateView();
  }
  if (e.key === "PageDown") {
    currentPx = Math.min(maxPx, currentPx + 20);
    currentPercent = pxToPercent(currentPx);
    updateView();
  }
});

const body = document.body;

// Set your desired min/max for each property
const minPx = 250;
const maxPx = 800;
const defaultPx = 400;
let currentPx = defaultPx;
let currentPercent = 14;

function pxToPercent(px) {
  if (px <= defaultPx) {
    return ((px - minPx) / (defaultPx - minPx)) * 14;
  } else {
    return ((maxPx - px) / (maxPx - defaultPx)) * 14;
  }
}

function updateView() {
  body.style.perspectiveOrigin = `43% calc(${currentPercent}% - 3em)`;
  body.style.transform = `rotateX(0deg) translate(10px, ${currentPx}px)`;
}

document.getElementById("lookUpBtn").addEventListener("click", () => {
  currentPx = Math.max(minPx, currentPx - 20);
  currentPercent = pxToPercent(currentPx);
  updateView();
});

document.getElementById("lookDownBtn").addEventListener("click", () => {
  currentPx = Math.min(maxPx, currentPx + 20);
  currentPercent = pxToPercent(currentPx);
  updateView();
});

updateView();

var buttons = document.querySelectorAll(".television__channel a");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    document.querySelector(".television__screen iframe").src = this.href;
    event.preventDefault();
  });
}
