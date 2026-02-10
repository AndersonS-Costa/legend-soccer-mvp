// Ball.js

class Ball {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocityX = 0;
        this.velocityY = 0;
    }

    update() {
        // Update the ball's position based on its velocity
        this.x += this.velocityX;
        this.y += this.velocityY;

        // Simple gravity effect
        this.velocityY += 0.1; // gravity

        // Keep the ball within the boundaries of the canvas
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.velocityX *= -1; // Bounce off left/right walls
        }
        if (this.y + this.radius > canvas.height) {
            this.velocityY *= -0.9; // Bounce off bottom wall
            this.y = canvas.height - this.radius; // adjusting position
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }
}

// Example usage:
// const ball = new Ball(50, 50, 10);
// ball.update();
// ball.draw(context);
