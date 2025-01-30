const container = document.getElementById('orb-container');

// Generate orbs
function createOrb() {
    const orb = document.createElement('div');
    orb.classList.add('orb');

    // Random size between 10px and 50px
    const size = Math.random() * 40 + 10;
    orb.style.width = `${size}px`;
    orb.style.height = `${size}px`;

    // Random position within the viewport
    orb.style.left = `${Math.random() * 100}vw`;
    orb.style.top = `${Math.random() * 100}vh`;

    // Random color
    orb.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;

    // Append to container
    container.appendChild(orb);

    // Remove orb after animation ends to prevent memory leaks
    setTimeout(() => orb.remove(), 10000);
}

// Create multiple orbs at intervals
setInterval(createOrb, 200);

// Optional: Add floating animation using CSS keyframes
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
    @keyframes float {
        0% { transform: translateY(0px) translateX(0px); }
        50% { transform: translateY(${Math.random() * 200 - 100}px) translateX(${Math.random() * 200 - 100}px); }
        100% { transform: translateY(0px) translateX(0px); }
    }

    @keyframes color-shift {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(styleSheet);
