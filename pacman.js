class Pacman {
  constructor(sprite) {
    this.x = 0;
    this.y = 0;
    this.speed = 2;
    this.direction = "right";
    this.sprite = sprite;
    this.spriteSize = 20;
    this.frame = 0;
    this.frameOffsetY = 1;
  }

  update() {
    switch (this.direction) {
      case "up":
        this.y -= this.speed;
        break;
      case "down":
        this.y += this.speed;
        break;
      case "left":
        this.x -= this.speed;
        break;
      case "right":
        this.x += this.speed;
        break;
      case "idle":
        break;
      default:
        break;
    }
  }

  input(event) {
    switch (event.key) {
      case "ArrowUp":
        this.direction = "up";
        this.frameOffsetY = 2;
        break;
      case "ArrowDown":
        this.direction = "down";
        this.frameOffsetY = 3;
        break;
      case "ArrowLeft":
        this.direction = "left";
        this.frameOffsetY = 0;
        break;
      case "ArrowRight":
        this.direction = "right";
        this.frameOffsetY = 1;
        break;
      default:
        break;
    }
  }

  getCurrentFrame() {
    if (this.frame == 2) {
      return {
        x: this.frame * this.spriteSize,
        y: 0,
      };
    }

    return {
      x: this.frame * this.spriteSize,
      y: this.frameOffsetY * this.spriteSize,
    };
  }

  render(ctx, gameFrame, pause) {
    const currentFrame = this.getCurrentFrame();

    ctx.drawImage(
      this.sprite,
      currentFrame.x,
      currentFrame.y,
      this.spriteSize,
      this.spriteSize,
      this.x,
      this.y,
      50,
      50
    );

    if (!pause) {
      if (gameFrame % 4 == 0) {
        if (this.frame < 2) this.frame++;
        else this.frame = 0;
      }
    }
  }
}
