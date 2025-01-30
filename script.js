document.addEventListener('DOMContentLoaded', () => {
    const sparkleContainer = document.querySelector('.candle-container');

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = `${Math.random() * 50 - 25 + 50}%`;
        sparkle.style.animationDuration = `${Math.random() * 2 + 1}s`;
        sparkleContainer.appendChild(sparkle);

        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }

    setInterval(createSparkle, 300);
});
