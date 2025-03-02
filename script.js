// Planet data
const planets = {
    mercury: {
        name: "Mercury",
        diameter: "4,879 km",
        distance: "57.9 million km",
        description: "Mercury is the smallest planet in the Solar System and the closest to the Sun."
    },
    venus: {
        name: "Venus",
        diameter: "12,104 km",
        distance: "108.2 million km",
        description: "Venus is the second planet from the Sun and is known for its thick, toxic atmosphere."
    },
    earth: {
        name: "Earth",
        diameter: "12,742 km",
        distance: "149.6 million km",
        description: "Earth is the third planet from the Sun and the only known planet to support life."
    },
    mars: {
        name: "Mars",
        diameter: "6,779 km",
        distance: "227.9 million km",
        description: "Mars is the fourth planet from the Sun and is known as the Red Planet."
    },
    jupiter: {
        name: "Jupiter",
        diameter: "139,820 km",
        distance: "778.5 million km",
        description: "Jupiter is the largest planet in the Solar System and is known for its Great Red Spot."
    },
    saturn: {
        name: "Saturn",
        diameter: "116,460 km",
        distance: "1.4 billion km",
        description: "Saturn is the second-largest planet and is famous for its ring system."
    },
    uranus: {
        name: "Uranus",
        diameter: "50,724 km",
        distance: "2.9 billion km",
        description: "Uranus is the seventh planet from the Sun and has a unique sideways rotation."
    },
    neptune: {
        name: "Neptune",
        diameter: "49,244 km",
        distance: "4.5 billion km",
        description: "Neptune is the eighth planet from the Sun and is known for its strong winds."
    }
};

// DOM elements
const modal = document.getElementById('modal');
const planetName = document.getElementById('planet-name');
const planetInfo = document.getElementById('planet-info');
const closeBtn = document.querySelector('.close');
const orbits = document.querySelectorAll('.orbit');
const planetElements = document.querySelectorAll('.planet');
const fasterBtn = document.getElementById('faster');
const slowerBtn = document.getElementById('slower');
const pauseBtn = document.getElementById('pause');
let isPaused = false;

// Close modal when close button is clicked
closeBtn.onclick = function() {
    modal.style.display = 'none';
};

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Show planet info on click
planetElements.forEach(planet => {
    planet.addEventListener('click', function() {
        const planetId = this.getAttribute('data-planet');
        const planetData = planets[planetId];
        planetName.textContent = planetData.name;
        planetInfo.innerHTML = `Diameter: ${planetData.diameter}<br>Distance from Sun: ${planetData.distance}<br>${planetData.description}`;
        modal.style.display = 'block';
    });
});

// Speed up orbiting
fasterBtn.addEventListener('click', function() {
    orbits.forEach(orbit => {
        const currentDuration = parseFloat(window.getComputedStyle(orbit).animationDuration);
        orbit.style.animationDuration = (currentDuration * 0.8) + 's';
    });
});

// Slow down orbiting
slowerBtn.addEventListener('click', function() {
    orbits.forEach(orbit => {
        const currentDuration = parseFloat(window.getComputedStyle(orbit).animationDuration);
        orbit.style.animationDuration = (currentDuration * 1.2) + 's';
    });
});

// Pause/resume animation
pauseBtn.addEventListener('click', function() {
    isPaused = !isPaused;
    orbits.forEach(orbit => {
        orbit.style.animationPlayState = isPaused ? 'paused' : 'running';
    });
    pauseBtn.textContent = isPaused ? 'Resume' : 'Pause';
});

// Add background stars
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    document.querySelector('.solar-system').appendChild(star);
}
