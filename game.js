const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 400;
canvas.height = 400;

// Pac-Man position
let pacManX = canvas.width / 2;
let pacManY = canvas.height / 2;

// Draw Pac-Man
function drawPacMan() {
    ctx.beginPath();
    ctx.arc(pacManX, pacManY, 20, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(pacManX, pacManY);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();
}

// Update game state
function update() {
  // Add event listeners for arrow keys
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            // Move Pac-Man up
            pacManY -= 10;
            break;
        case 'ArrowDown':
            // Move Pac-Man down
            pacManY += 10;
            break;
        case 'ArrowLeft':
            // Move Pac-Man left
            pacManX -= 10;
            break;
        case 'ArrowRight':
            // Move Pac-Man right
            pacManX += 10;
            break;
    }
});

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Pac-Man
    drawPacMan();

    // Other game logic (pellets, ghosts, etc.)
    // ...
}

// Game loop
function gameLoop() {
    requestAnimationFrame(gameLoop);
    update();
}

// Start the game loop
gameLoop();
