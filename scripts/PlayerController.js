// PlayerController.js

class PlayerController {
    constructor() {
        this.position = { x: 0, y: 0 }; // starting position
        this.speed = 5; // speed of the player
    }

    moveUp() {
        this.position.y -= this.speed;
        console.log(`Moved up to position: ${this.position}`);
    }

    moveDown() {
        this.position.y += this.speed;
        console.log(`Moved down to position: ${this.position}`);
    }

    moveLeft() {
        this.position.x -= this.speed;
        console.log(`Moved left to position: ${this.position}`);
    }

    moveRight() {
        this.position.x += this.speed;
        console.log(`Moved right to position: ${this.position}`);
    }

    action() {
        console.log(`Performing action at position: ${this.position}`);
    }
}

// Example usage
const player = new PlayerController();
// player.moveUp();
// player.moveDown();
// player.moveLeft();
// player.moveRight();
// player.action();
