var canvas = document.createElement('canvas');
var size = {
    width: 600,
    height: 600,
};
canvas.width = size.width;
canvas.height = size.height;
document.body.append(canvas);
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, size.width, size.height);
var Ball = /** @class */ (function () {
    function Ball(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    Ball.prototype.draw = function (ctx) {
        ctx.beginPath();
        ctx.fillStyle = '#ff0000';
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fill();
    };
    Ball.prototype.move = function (ctx, dx, dy) {
        this.x = dx;
        this.y = dy;
        ctx.beginPath();
        ctx.fillStyle = '#ff0000';
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fill();
    };
    return Ball;
}());
var clear = function () {
    ctx.clearRect(0, 0, size.width, size.height);
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, size.width, size.height);
};
var getRandomNumber = function (max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
};
var RADIUS = 50;
var ball_pos = {
    x: getRandomNumber(size.width - 50, 50),
    y: getRandomNumber(size.height - 50, 50),
};
console.log(ball_pos.x);
console.log(ball_pos.y);
var velocity = {
    x: 2,
    y: 5,
};
var FPS = 5;
var myball = new Ball(ball_pos.x, ball_pos.y, RADIUS);
myball.draw(ctx);
var turn_left = false;
var animate = function () {
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
