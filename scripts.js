// ==========================
// Initialization & Debug Mode
// ==========================
document.addEventListener("DOMContentLoaded", function () {
  const scene = document.querySelector(".scene");
  let debugMode = false;

  const instructions = document.querySelector(".instructions");

  // Toggle instructions with "i" key
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

  // Debug logs
  console.log("3D Room Scene initialized successfully!");
  console.log("Controls: WASD or Arrow Keys, Spacebar/Escape to stop");
  console.log("Touch: Swipe to navigate on mobile devices");
  console.log('Press "i" to toggle instructions visibility');
});

// ==========================
// Cube Animation (Toy Block)
// ==========================
const cubeContainer = document.querySelector(".cube-container");

// Spin cube on click
cubeContainer.addEventListener("click", function () {
  this.classList.toggle("clicked");
});

// Remove spin class after animation
cubeContainer.addEventListener("animationend", function () {
  this.classList.remove("clicked");
});

// ==========================
// Letter Animation (Riddle)
// ==========================
document.querySelectorAll(".letter, .letter2").forEach((el) => {
  el.addEventListener("click", () => {
    document.body.classList.toggle("change");
  });
});

// ==========================
// Rose Frame Animation
// ==========================
const roseFrame = document.querySelector(".rose-frame");

// Rotate rose frame on click
roseFrame.addEventListener("click", function () {
  this.classList.toggle("clicked");
});

// Remove rotate class after animation
roseFrame.addEventListener("animationend", function () {
  this.classList.remove("clicked");
});

// ==========================
// Toy Box Animation
// ==========================
const toyBox = document.querySelector(".toy-box-left");

// Shrink toy box on click
toyBox.addEventListener("click", function () {
  this.classList.toggle("clicked");
});

// ==========================
// Scene Movement Controls
// ==========================
let movement = null;
// let movementTimer = null;
const scene = document.querySelector(".scene");

// Start movement animation
function startMovement(type) {
  // clearTimeout(movementTimer);
  movement = type;
  scene.className = "scene " + type;
  // movementTimer = setTimeout(stopMovement, 5000);
}

// Stop movement animation
function stopMovement() {
  movement = null;
  scene.className = "scene stop";
}

// Button controls for movement
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

// ==========================
// Focus Handling
// ==========================
window.addEventListener("load", () => {
  window.focus();
});
window.addEventListener("click", () => {
  window.focus();
});

// ==========================
// Keyboard Controls
// ==========================
document.addEventListener("keydown", (e) => {
  if (e.key === "w" || e.key === "ArrowUp") startMovement("moveForward");
  if (e.key === "a" || e.key === "ArrowLeft") startMovement("turnLeft");
  if (e.key === "s" || e.key === "ArrowDown") startMovement("moveBack");
  if (e.key === "d" || e.key === "ArrowRight") startMovement("turnRight");
  if (e.key === " " || e.key === "Escape") stopMovement();

  // Perspective controls
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

// ==========================
// Perspective/View Controls
// ==========================
const body = document.body;

// Set your desired min/max for each property
const minPx = 200;
const maxPx = 1400;
const defaultPx = 400;
let currentPx = defaultPx;
let currentPercent = 7;

// Convert px to percent for perspective origin
function pxToPercent(px) {
  if (px <= defaultPx) {
    return ((px - minPx) / (defaultPx - minPx)) * 14;
  } else {
    return ((maxPx - px) / (maxPx - defaultPx)) * 14;
  }
}

// Update the view/perspective
function updateView() {
  body.style.perspectiveOrigin = `43% calc(${currentPercent}% - 3em)`;
  body.style.transform = `rotateX(0deg) translate(10px, ${currentPx}px)`;
}

// Look up/down buttons
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

// ==========================
// Television Channel Controls
// ==========================
var buttons = document.querySelectorAll(".television__channel a");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    document.querySelector(".television__screen iframe").src = this.href;
    event.preventDefault();
  });
}
