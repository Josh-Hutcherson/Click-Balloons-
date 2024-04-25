const backgroundAudio = document.getElementById("backgroundAudio");
const specialBackgroundChance = 0.7; // 70% chance

// Check if the special background appears (based on your game logic)
if (Math.random() < specialBackgroundChance) {
    // Show the special background
    document.body.style.backgroundImage = `url("path/to/your-image.jpg")`;
    // Play the audio
    backgroundAudio.play();
} else {
    // Show the default background
    document.body.style.backgroundImage = "none";
    // Pause the audio
    backgroundAudio.pause();
}
