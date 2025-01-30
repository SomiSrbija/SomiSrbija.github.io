const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
const numParticles = 50;

class Particle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
        };
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.velocity.x = -this.velocity.x;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.velocity.y = -this.velocity.y;
        }

        this.draw();
    }
}

function init() {
    particles = [];
    for (let i = 0; i < numParticles; i++) {
        const radius = Math.random() * 3 + 1;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const color = 'rgba(173, 216, 230, 0.8)';
        particles.push(new Particle(x, y, radius, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
    });
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animate();
