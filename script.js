document.addEventListener('DOMContentLoaded', () => {
    const machines = document.querySelectorAll('.machine');
    const sections = document.querySelectorAll('.section');

    // Navigation between arcade machines and sections
    machines.forEach(machine => {
        machine.addEventListener('click', () => {
            const sectionId = machine.getAttribute('data-section');
            sections.forEach(section => {
                section.style.display = section.id === sectionId ? 'block' : 'none';
            });
        });
    });

    document.querySelectorAll('.back').forEach(button => {
        button.addEventListener('click', () => {
            sections.forEach(section => {
                section.style.display = 'none';
            });
        });
    });

    // Magic 8-Ball
    const answers = [
        "It is certain.", "It is decidedly so.", "Without a doubt.", "Yes – definitely.",
        "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.",
        "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.",
        "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.",
        "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.",
        "Very doubtful."
    ];

    document.getElementById('shake').addEventListener('click', () => {
        const answerDiv = document.getElementById('answer');
        const randomIndex = Math.floor(Math.random() * answers.length);
        answerDiv.textContent = answers[randomIndex];
        const eightball = document.getElementById('eightball');
        eightball.classList.add('shake');
        setTimeout(() => eightball.classList.remove('shake'), 500);
    });

    // Random Joke Generator
    document.getElementById('getjoke').addEventListener('click', () => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => {
                document.getElementById('joke').innerHTML = `<p>${data.setup}</p><p>${data.punchline}</p>`;
            })
            .catch(error => {
                console.error('Error fetching joke:', error);
                document.getElementById('joke').textContent = 'Failed to load joke. Try again!';
            });
    });

    // Tic-Tac-Toe
    let board = Array(9).fill(null);
    let currentPlayer = 'X';

    function checkWin(player) {
        const wins = [
            [0,1,2], [3,4,5], [6,7,8], // Rows
            [0,3,6], [1,4,7], [2,5,8], // Columns
            [0,4,8], [2,4,6]           // Diagonals
        ];
        return wins.some(win => win.every(index => board[index] === player));
    }

    function checkDraw() {
        return board.every(cell => cell !== null);
    }

    function computerMove() {
        const emptyCells = board.map((cell, i) => cell === null ? i : null).filter(i => i !== null);
        const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        board[randomIndex] = 'O';
        document.querySelector(`.cell[data-index="${randomIndex}"]`).textContent = 'O';
    }

    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', () => {
            const index = cell.getAttribute('data-index');
            if (board[index] === null && currentPlayer === 'X') {
                board[index] = 'X';
                cell.textContent = 'X';
                if (checkWin('X')) {
                    document.getElementById('message').textContent = 'You win!';
                } else if (checkDraw()) {
                    document.getElementById('message').textContent = 'Draw!';
                } else {
                    currentPlayer = 'O';
                    computerMove();
                    if (checkWin('O')) {
                        document.getElementById('message').textContent = 'Computer wins!';
                    } else if (checkDraw()) {
                        document.getElementById('message').textContent = 'Draw!';
                    } else {
                        currentPlayer = 'X';
                    }
                }
            }
        });
    });

    document.getElementById('reset').addEventListener('click', () => {
        board = Array(9).fill(null);
        document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
        document.getElementById('message').textContent = '';
        currentPlayer = 'X';
    });

    // Drawing Pad
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let painting = false;
    let color = '#000000';
    let brushSize = 5;

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function endPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.strokeStyle = color;
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);

    document.getElementById('color').addEventListener('change', e => color = e.target.value);
    document.getElementById('brushSize').addEventListener('change', e => brushSize = e.target.value);
    document.getElementById('clear').addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));

    // Interactive Animation
    const particleCanvas = document.getElementById('particleCanvas');
    const pCtx = particleCanvas.getContext('2d');
    const particles = [];

    function Particle(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    function createParticles() {
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle(Math.random() * 400, Math.random() * 400));
        }
    }

    function drawParticles() {
        pCtx.clearRect(0, 0, 400, 400);
        particles.forEach(p => {
            pCtx.beginPath();
            pCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            pCtx.fillStyle = 'white';
            pCtx.fill();
        });
    }

    function updateParticles() {
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.x < 0 || p.x > 400) p.speedX *= -1;
            if (p.y < 0 || p.y > 400) p.speedY *= -1;
        });
    }

    function animate() {
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }

    createParticles();
    animate();

    particleCanvas.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX - particleCanvas.offsetLeft;
        const mouseY = e.clientY - particleCanvas.offsetTop;
        particles.forEach(p => {
            const dx = p.x - mouseX;
            const dy = p.y - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                p.x += dx * 0.1;
                p.y += dy * 0.1;
            }
        });
    });
});
