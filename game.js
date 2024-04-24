const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 400;
canvas.height = 400;

// Pac-Man position and velocity
let pacManX = canvas.width / 2;
let pacManY = canvas.height / 2;
const pacManSpeed = 3;

// Ghosts
const ghosts = [
    { x: 100, y: 100, speed: 2 },
    { x: 300, y: 100, speed: 2 },
    // Add more ghosts as needed
];

// Pellets
const pellets = []; // Array to store pellet positions

// Score
let score = 0;

// Draw Pac-Man
function drawPacMan() {
    ctx.beginPath();
    ctx.arc(pacManX, pacManY, 20, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(pacManX, pacManY);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();
}

// Draw pellets
function drawPellets() {
    pellets.forEach((pellet) => {
        ctx.beginPath();
        ctx.arc(pellet.x, pellet.y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    });
}

// Draw ghosts
function drawGhosts() {
    ghosts.forEach((ghost) => {
        ctx.beginPath();
        ctx.arc(ghost.x, ghost.y, 15, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    });
}

// Handle arrow key controls
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            pacManY -= pacManSpeed;
            break;
        case 'ArrowDown':
            pacManY += pacManSpeed;
            break;
        case 'ArrowLeft':
            pacManX -= pacManSpeed;
            break;
        case 'ArrowRight':
            pacManX += pacManSpeed;
            break;
    }
});

// Update game state
function update() {
    // Handle Pac-Man movement
    // ...

    // Check collision with pellets
    pellets.forEach((pellet, index) => {
        const dx = pacManX - pellet.x;
        const dy = pacManY - pellet.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 20) {
            pellets.splice(index, 1); // Remove pellet
            score += 10; // Increase score
        }
    });

    // Check collision with ghosts
    ghosts.forEach((ghost) => {
        const dx = pacManX - ghost.x;
        const dy = pacManY - ghost.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 20) {
            // Handle collision with ghost (e.g., decrease lives)
            // ...
        }
    });

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw pellets
    drawPellets();

    // Draw ghosts
    drawGhosts();

    // Draw Pac-Man
    drawPacMan();

    // Display score
    ctx.fillStyle = 'white';
    ctx.font = '16px Arial';
    ctx.fillText(`Score: ${score}`, 10, 20);

    // Other game logic (win/lose conditions, ghost behavior, etc.)
    // ...
}

// Game loop
function gameLoop() {
    requestAnimationFrame(gameLoop);
    update();
}

// Start the game loop
gameLoop();
