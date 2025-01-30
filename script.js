document.addEventListener("DOMContentLoaded", () => {
    const sparklesContainer = document.querySelector('.sparkles');

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        // Randomize position
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;

        // Add sparkle to the container
        sparklesContainer.appendChild(sparkle);

        // Remove sparkle after animation ends
        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }

    // Create sparkles every 200ms
    setInterval(createSparkle, 200);
});
