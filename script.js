// script.js
const container = document.querySelector('.particles-container');

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  // Randomize size, position, and color
  const size = Math.random() * 5 + 2; // Between 2px and 7px
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 80%)`;

  // Randomize starting position
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;

  // Randomize animation duration and delay
  const duration = Math.random() * 10 + 5; // Between 5s and 15s
  particle.style.animationDuration = `${duration}s`;
  particle.style.animationDelay = `${Math.random() * 5}s`;

  container.appendChild(particle);

  // Remove particle after animation ends to free memory
  setTimeout(() => particle.remove(), duration * 1000);
}

// Create multiple particles
setInterval(createParticle, 100); // Adjust frequency here

// Define keyframes for floating motion
document.head.innerHTML += `
  <style>
    @keyframes float {
      0% { transform: translateY(0) translateX(0); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 100}vh) translateX(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 100}vw); opacity: 0; }
    }
  </style>
`;
