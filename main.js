const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

let gameFrame = 0;
let pause = false;
const spriteSheet = new Image();
spriteSheet.src = "assets/pacman-sprite-sheet.png";

const pacman = new Pacman(spriteSheet);

function update(currentTime) {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  pacman.render(ctx, gameFrame, pause);

  if (!pause) {
    pacman.update();
    gameFrame++;
  } else {
    ctx.fillStyle = "white";
    ctx.font = "48px monospace";
    ctx.fillText("Pause", 0, 100);
  }

  window.requestAnimationFrame(update);
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" || e.key === "Backspace") {
    pause = !pause;
  }
  pacman.input(e);
});

window.requestAnimationFrame(update);
