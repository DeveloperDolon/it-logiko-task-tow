const little_box = document.getElementById("little-box"),
  box_container = document.getElementById("container");

const containerSize = 100;
const boxSize = 20;
let xReverse = false;
let yReverse = false;
let x = 50;
let y = 0;

function movingBox() {
  if (x >= 0 && x <= containerSize - boxSize) {
    if (x >= 0 && !xReverse) {
      x++;
      if (x === containerSize - boxSize) {
        xReverse = true;
      }
    }

    if (x > 0 && xReverse) {
      x--;
      if (x === 1) {
        xReverse = false;
      }
    }
  }

  if (y >= 0 && y <= containerSize - boxSize) {
    if (y >= 0 && !yReverse) {
      y++;
      if (y === containerSize - boxSize) {
        yReverse = true;
      }
    }

    if (y > 0 && yReverse) {
      y--;
      if (y === 1) {
        yReverse = false;
      }
    }
  }

  little_box.style.left = x + "px";
  little_box.style.top = y + "px";

  requestAnimationFrame(movingBox);
}

movingBox();
