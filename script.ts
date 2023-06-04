const canvas = document.createElement('canvas');

const size = {
  width: 600,
  height: 600,
};

canvas.width = size.width;
canvas.height = size.height;
document.body.append(canvas);

const ctx = canvas.getContext('2d')!;
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, size.width, size.height);

class Ball {
  x;
  y;
  r;
  constructor(x: number, y: number, r: number) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = '#ff0000';
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.fill();
  }

  move(ctx: CanvasRenderingContext2D, dx: number, dy: number) {
    ctx.beginPath();
    ctx.fillStyle = '#ff0000';
    ctx.arc(dx, dy, this.r, 0, Math.PI * 2, false);
    ctx.fill();
  }
}

const clear = () => {
  ctx.clearRect(0, 0, size.width, size.height);
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, size.width, size.height);
};

const getRandomNumber = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const RADIUS = 50;

const ball_pos = {
  x: getRandomNumber(size.width - 50, 50),
  y: getRandomNumber(size.height - 50, 50),
};

const velocity = {
  x: 2,
  y: 5,
};

const myball = new Ball(ball_pos.x, ball_pos.y, RADIUS);
myball.draw(ctx);

const animate = () => {
  requestAnimationFrame(animate);
  clear();

  ball_pos.x += velocity.x;
  ball_pos.y += velocity.y;

  if (ball_pos.x - myball.r <= 0 || ball_pos.x + myball.r >= size.width) {
    velocity.x = -velocity.x;
  }

  if (ball_pos.y - myball.r <= 0 || ball_pos.y + myball.r >= size.width) {
    velocity.y = -velocity.y;
  }

  myball.move(ctx, ball_pos.x, ball_pos.y);
};

animate();
