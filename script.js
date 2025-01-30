// script.js
const container = document.getElementById('particle-container');
const numParticles = 50; // Number of particles

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Randomize size
    const size = Math.random() * 8 + 4; // Between 4px and 12px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Randomize position
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;

    // Randomize animation duration and delay
    particle.style.animationDuration = `${Math.random() * 5 + 3}s`; // Between 3s and 8s
    particle.style.animationDelay = `${Math.random() * 5}s`; // Up to 5s delay

    container.appendChild(particle);

    // Remove particle after animation ends to prevent memory leaks
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

// Generate initial particles
for (let i = 0; i < numParticles; i++) {
    createParticle();
}

// Continuously regenerate particles
setInterval(createParticle, 200);
