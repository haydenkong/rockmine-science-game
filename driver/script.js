const canvas = document.getElementById('mars-canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

const roverSize = 20;
let roverX = canvas.width / 2;
let roverY = canvas.height / 2;
let roverAngle = 0;
let roverSpeed = 0;
const maxSpeed = 2;
const turnSpeed = 0.05;

const rocks = [];
const collectedRocks = [];
let quizActive = false;

const rockTypes = [
    { name: 'Basalt', description: 'A dark, fine-grained volcanic rock rich in iron and magnesium.' },
    { name: 'Hematite', description: 'An iron oxide mineral, often found in spherical shapes on Mars.' },
    { name: 'Jarosite', description: 'A hydrous sulfate of potassium and iron, indicating past water activity.' },
    { name: 'Olivine', description: 'A green mineral composed of magnesium and iron silicate.' },
    { name: 'Magnetite', description: 'A highly magnetic iron oxide mineral.' }
];

function createRock() {
    const rock = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        type: rockTypes[Math.floor(Math.random() * rockTypes.length)]
    };
    rocks.push(rock);
}

function drawMars() {
    ctx.fillStyle = '#4a0e0e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
const roverImage = new Image();
roverImage.src = 'rover01.png';

const roverWidth = 60; // Increase the rover width
const roverHeight = 60; // Increase the rover height

function drawRover() {
    ctx.save();
    ctx.translate(roverX, roverY);
    ctx.rotate(roverAngle);
    ctx.drawImage(roverImage, -roverWidth / 2, -roverHeight / 2, roverWidth, roverHeight);
    ctx.restore();
}

function drawRocks() {
    rocks.forEach(rock => {
        ctx.fillStyle = '#8B4513';
        ctx.beginPath();
        ctx.arc(rock.x, rock.y, 5, 0, Math.PI * 2);
        ctx.fill();
    });
}

function update() {
    drawMars();
    drawRover();
    drawRocks();
    checkRockCollection();
    moveRover();
}

function moveRover() {
    roverX += roverSpeed * Math.cos(roverAngle);
    roverY += roverSpeed * Math.sin(roverAngle);
    roverX = Math.max(0, Math.min(canvas.width, roverX));
    roverY = Math.max(0, Math.min(canvas.height, roverY));
}

function checkRockCollection() {
    rocks.forEach((rock, index) => {
        const distance = Math.sqrt((rock.x - roverX) ** 2 + (rock.y - roverY) ** 2);
        if (distance < roverSize / 2) {
            collectRock(rock, index);
        }
    });
}

function collectRock(rock, index) {
    rocks.splice(index, 1);
    collectedRocks.push(rock);
    updateRockBook(rock);
    showRockInfo(rock);
    if (collectedRocks.length % 3 === 0) {
        startQuiz();
    }
}

function updateRockBook(rock) {
    const rockCollection = document.getElementById('rock-collection');
    const rockEntry = document.createElement('div');
    rockEntry.className = 'rock-entry';
    rockEntry.textContent = rock.type.name;
    rockCollection.appendChild(rockEntry);
}

function showRockInfo(rock) {
    const popup = document.getElementById('rock-info-popup');
    const rockName = document.getElementById('rock-name');
    const rockDescription = document.getElementById('rock-description');
    
    rockName.textContent = rock.type.name;
    rockDescription.textContent = rock.type.description;
    popup.classList.remove('hidden');
}

function closePopup() {
    document.getElementById('rock-info-popup').classList.add('hidden');
}

function startQuiz() {
    quizActive = true;
    roverSpeed = 0; // Stop the rover when the quiz starts
    const quizContainer = document.getElementById('quiz-container');
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptions = document.getElementById('quiz-options');
    
    quizContainer.classList.remove('hidden');
    
    const lastThreeRocks = collectedRocks.slice(-3);
    const questionRock = lastThreeRocks[Math.floor(Math.random() * 3)];
    
    quizQuestion.textContent = `What is the description of ${questionRock.type.name}?`;
    
    const options = [questionRock.type.description];
    while (options.length < 4) {
        const randomRock = rockTypes[Math.floor(Math.random() * rockTypes.length)];
        if (!options.includes(randomRock.description)) {
            options.push(randomRock.description);
        }
    }
    
    quizOptions.innerHTML = '';
    options.sort(() => Math.random() - 0.5).forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(button));
        quizOptions.appendChild(button);
    });
}

function selectAnswer(button) {
    const buttons = document.querySelectorAll('#quiz-options button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
}

function submitQuiz() {
    const selectedButton = document.querySelector('#quiz-options button.selected');
    if (selectedButton) {
        const lastThreeRocks = collectedRocks.slice(-3);
        const questionRock = lastThreeRocks[Math.floor(Math.random() * 3)];
        
        if (selectedButton.textContent === questionRock.type.description) {
            alert('Correct! Great job!');
        } else {
            alert(`Incorrect. The correct answer was: ${questionRock.type.description}`);
        }
        
        document.getElementById('quiz-container').classList.add('hidden');
        quizActive = false;
        resetKeysPressed(); // Reset keys pressed after quiz
    } else {
        alert('Please select an answer before submitting.');
    }
}

function resetKeysPressed() {
    for (let key in keysPressed) {
        keysPressed[key] = false;
    }
}

document.getElementById('close-popup').addEventListener('click', closePopup);
document.getElementById('submit-quiz').addEventListener('click', submitQuiz);

const keysPressed = {};

document.addEventListener('keydown', (e) => {
    if (!quizActive) {
        keysPressed[e.key] = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (!quizActive) {
        keysPressed[e.key] = false;
    }
});

function setRoverDirection() {
    if (quizActive) {
        roverSpeed = 0;
        return;
    }
    roverSpeed = 0;
    if (keysPressed['ArrowUp']) {
        roverSpeed = maxSpeed;
    }
    if (keysPressed['ArrowLeft']) {
        roverAngle -= turnSpeed;
    }
    if (keysPressed['ArrowRight']) {
        roverAngle += turnSpeed;
    }
}

setInterval(createRock, 3000);
setInterval(() => {
    setRoverDirection();
    update();
}, 1000 / 60);