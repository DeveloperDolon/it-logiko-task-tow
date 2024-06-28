const little_box = document.getElementById("little-box"),
  box_container = document.getElementById("container");

const containerSize = 100;
const boxSize = 20;

let x = 0;
let y = 0;
let dx = 1;
let dy = 1;

function moveBox() {
  x += dx;
  y += dy;

  if (x <= 0 || x >= containerSize - boxSize) {
    dx *= -1;
  }
  if (y <= 0 || y >= containerSize - boxSize) {
    dy *= -1;
  }

  little_box.style.left = x + "px";
  little_box.style.top = y + "px";

  requestAnimationFrame(moveBox); // to ensure smooth animation for this project
}

moveBox();
