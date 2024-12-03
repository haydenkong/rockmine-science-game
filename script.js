const rocks = [
    {
        name: "Granite",
        value: 5,
        info: "An igneous rock formed from the slow cooling and solidification of magma deep beneath the Earth's surface. It's composed of quartz, feldspar, and mica.",
        image: "https://png.pngtree.com/png-vector/20230905/ourmid/pngtree-stone-granite-studio-shot-gray-png-image_9952722.png",
        minDepth: 0,
        maxDepth: 30
    },
    {
        name: "Limestone",
        value: 3,
        info: "A sedimentary rock formed primarily from the accumulation of calcium carbonate (calcite) remains of marine organisms like shells and coral. It often contains fossils and can be layered.",
        image: "https://static.vecteezy.com/system/resources/previews/035/938/046/non_2x/ai-generated-limestone-rock-isolated-on-transparent-background-free-png.png",
        minDepth: 0,
        maxDepth: 20
    },
     {
        name: "Shale",
        value: 2,
        info: "A fine-grained sedimentary rock formed from the compaction of mud, clay, and silt. It often splits into thin layers.",
        image: "https://png.pngtree.com/png-vector/20240804/ourmid/pngtree-a-thick-and-heavy-shale-rock-png-image_13367456.png",
        minDepth: 0,
        maxDepth: 20
    },
    {
        name: "Marble",
        value: 7,
        info: "A metamorphic rock formed when limestone is subjected to high heat and pressure, causing the calcite to recrystallize. This results in a beautiful, often veined, rock.",
        image: "https://thumbs.dreamstime.com/b/raw-marble-rock-cutout-white-background-172494727.jpg",
        minDepth: 2,
        maxDepth: 25
    },
    {
        name: "Sandstone",
        value: 4,
        info: "A sedimentary rock composed of sand-sized grains of minerals like quartz and feldspar cemented together. The color depends on the minerals present.",
        image: "https://t4.ftcdn.net/jpg/01/38/30/39/360_F_138303918_rL4rt7iabcAmDJeLFlq5uTgMbNcJayhH.jpg",
        minDepth: 0,
        maxDepth: 20
    },
     {
        name: "Conglomerate",
        value: 4,
        info: "A sedimentary rock consisting of rounded gravel and pebble-sized fragments cemented together. It often forms in high-energy environments like rivers.",
        image: "https://rocksminerals.flexiblelearning.auckland.ac.nz/rocks/images/conglomerate1.jpg",
        minDepth: 1,
        maxDepth: 20
    },
    {
        name: "Slate",
        value: 6,
        info: "A fine-grained, foliated metamorphic rock formed from the low-grade metamorphism of shale. It splits easily into thin, flat sheets.",
        image: "https://static.vecteezy.com/system/resources/thumbnails/045/913/294/small_2x/rough-black-slate-rock-cut-out-stock-png.png",
        minDepth: 1,
        maxDepth: 25
    },
      {
        name: "Diorite",
        value: 6,
        info: "An intrusive igneous rock that is intermediate in composition between gabbro and granite. It's mainly composed of plagioclase feldspar, hornblende, and biotite.",
        image: "https://www.shutterstock.com/image-photo/big-diorite-rock-stone-garden-600nw-2360086829.jpg",
        minDepth: 2,
        maxDepth: 20
    },
       {
        name: "Gabbro",
        value: 7,
        info: "A coarse-grained, dark-colored intrusive igneous rock. It's chemically equivalent to basalt and is primarily composed of plagioclase feldspar and pyroxene.",
           image: "https://www.sandatlas.org/wp-content/uploads/1353-09.06.15_1-gabbro-augite-phenocrysts-11-cm1.jpg",
        minDepth: 3,
        maxDepth: 15
    },
      {
        name: "Schist",
        value: 8,
        info: "A medium-grade metamorphic rock characterized by its foliation, meaning it has layers formed by platy minerals like mica. It's formed from the metamorphism of shale or mudstone.",
        image: "https://i0.wp.com/geologyscience.com/wp-content/uploads/2018/04/schist-mica-10-cm-2.jpg?fit=750%2C644&ssl=1",
        minDepth: 3,
        maxDepth: 30

    },
    {
        name: "Basalt",
        value: 8,
        info: "A dark, fine-grained extrusive igneous rock formed from the rapid cooling of lava at the Earth's surface. It's a common volcanic rock.",
        image: "https://www.shutterstock.com/image-photo/basalt-rock-stone-isolated-on-260nw-1856150449.jpg",
        minDepth: 1,
        maxDepth: 30
    },
    {
        name: "Quartzite",
        value: 9,
        info: "A hard, non-foliated metamorphic rock formed when sandstone is subjected to high heat and pressure. The quartz grains recrystallize, making it very durable.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PX3RYlCM51FXC9WJm9-Vu-Au5D61IQGGRQ&s",
        minDepth: 3,
        maxDepth: 100
    },
    {
        name: "Gneiss",
        value: 10,
        info: "A high-grade metamorphic rock formed under intense heat and pressure, often deep within the Earth's crust. It's characterized by its distinct banding.",
        image: "https://www.sandatlas.org/wp-content/uploads/00003-gneiss.jpg",
        minDepth: 4,
       maxDepth: 100
    },
     {
        name: "Obsidian",
        value: 12,
        info: "A volcanic glass formed from the rapid cooling of lava. It has a glassy texture and is very sharp.",
        image: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsb2ZmaWNlN19wcm9mZXNzaW9uYWxfb2JqZWN0X3Bob3RvZ3JhcGh5X29mX2FuX2lzb2xhdGVkX19hMDQ4MjJhMi0zN2FjLTRlNjgtODA5Yy1jZGYzZWM2MjI3ZTAucG5n.png",
        minDepth: 4,
       maxDepth: 100
    },
     {
        name: "Pumice",
        value: 6,
      info: "A light-colored, extremely porous volcanic rock formed during explosive eruptions. It's so light it can often float on water.",
         image: "https://png.pngtree.com/png-vector/20240801/ourmid/pngtree-pumice-stone-texture-ideal-for-foot-care-and-cleaning-png-image_13323448.png",
        minDepth: 2,
        maxDepth: 100
    },
     {
        name: "Andesite",
         value: 7,
        info: "An extrusive igneous rock that is intermediate in composition between rhyolite and basalt. It's commonly associated with volcanic activity along continental margins.",
         image: "https://www.arelstone.com/en/images/Urunler/andezit/andezit.png",
        minDepth: 3,
        maxDepth: 100
    }
];

let coins = 0;
let depth = 1;
let pickaxePower = 1;
let mineCount = 0;
let minedRocks = [];
let discoveredRocks = new Set();

let playerName = '';
let gameTimer;
let timeRemaining = 20; // 4 minutes in seconds
let isGameActive = false;

const mineArea = document.getElementById('mine-area');
const rockElement = document.getElementById('rock');
const coinsElement = document.getElementById('coins');
const depthElement = document.getElementById('depth');
const sidebar = document.getElementById('sidebar');
const toggleShop = document.getElementById('toggle-shop');
const toggleRockbook = document.getElementById('toggle-rockbook');
const shopContent = document.getElementById('shop');
const rockbookContent = document.getElementById('rockbook');
const upgradePickButton = document.getElementById('upgrade-pick');
const upgradeDepthButton = document.getElementById('upgrade-depth');
const rockCollection = document.getElementById('rock-collection');
const quizOverlay = document.getElementById('quiz-overlay');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');

const nameModal = document.getElementById('name-modal');
const startGameButton = document.getElementById('start-game');
const playerNameInput = document.getElementById('player-name');
const timerElement = document.getElementById('timer');
const leaderboardModal = document.getElementById('leaderboard-modal');
const leaderboardList = document.getElementById('leaderboard-list');
const playAgainButton = document.getElementById('play-again');

function saveGame() {
    const gameState = {
        coins,
        depth,
        pickaxePower,
        discoveredRocks: Array.from(discoveredRocks),
        mineCount
    };
    localStorage.setItem('rockMinerState', JSON.stringify(gameState));
}

function loadGame() {
    const savedState = localStorage.getItem('rockMinerState');
    if (savedState) {
        const state = JSON.parse(savedState);
        coins = state.coins;
        depth = state.depth;
        pickaxePower = state.pickaxePower;
        mineCount = state.mineCount;
        discoveredRocks = new Set(state.discoveredRocks);
        
        // Update UI
        coinsElement.textContent = coins;
        depthElement.textContent = depth;
        
        // Reload rock book
        state.discoveredRocks.forEach(rockName => {
            const rock = rocks.find(r => r.name === rockName);
            if (rock) {
                const rockItem = document.createElement('div');
                rockItem.className = 'rock-item';
                rockItem.innerHTML = `
                    <img src="${rock.image}" alt="${rock.name}">
                    <h3>${rock.name}</h3>
                    <p>${rock.info}</p>
                `;
                rockCollection.appendChild(rockItem);
            }
        });
    }
}

function mineRock() {
    if (!isGameActive) return;
    const availableRocks = rocks.filter(rock => 
        depth >= rock.minDepth && depth <= rock.maxDepth
    );
    
    if (availableRocks.length === 0) return;
    
    const finalRock = availableRocks[Math.floor(Math.random() * availableRocks.length)];
    const coinValue = finalRock.value * depth * pickaxePower;
    
    // Animate through different rocks
    let animationFrame = 0;
    const totalFrames = 10;
    const animationInterval = setInterval(() => {
        if (animationFrame >= totalFrames) {
            clearInterval(animationInterval);
            // Show final rock
            showRock(finalRock);
            // Add rewards
            coins += coinValue;
            mineCount++;
            minedRocks.push(finalRock);
            coinsElement.textContent = coins;
            updateRockBook(finalRock);
            showRockInfo(finalRock);
            saveGame(); // Save after updates
            
            if (mineCount % 8 === 0) {
                showQuiz();
            }
            return;
        }
        
        // Show random rock during animation
        const tempRock = rocks[Math.floor(Math.random() * rocks.length)];
        showRock(tempRock);
        animationFrame++;
    }, 100);
}

function showRockInfo(rock) {
    const overlay = document.createElement('div');
    overlay.className = 'rock-info-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'rock-info-modal';
    modal.innerHTML = `
        <button class="close-button">&times;</button>
        <h3>${rock.name}</h3>
        <img src="${rock.image}" alt="${rock.name}" style="width:100%; border-radius:5px; margin:10px 0;">
        <p>${rock.info}</p>
        <p>Found at depth: ${depth}m</p>
        <p>Value: ${rock.value} coins</p>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Trigger animations
    requestAnimationFrame(() => {
        overlay.classList.add('active');
        modal.classList.add('active');
    });
    
    // Close handling
    const closeButton = modal.querySelector('.close-button');
    closeButton.onclick = () => {
        overlay.classList.remove('active');
        modal.classList.remove('active');
        setTimeout(() => overlay.remove(), 300);
    };
}

function updateRockBook(rock) {
    if (discoveredRocks.has(rock.name)) return;
    
    discoveredRocks.add(rock.name);
    const rockItem = document.createElement('div');
    rockItem.className = 'rock-item';
    rockItem.innerHTML = `
        <img src="${rock.image}" alt="${rock.name}">
        <h3>${rock.name}</h3>
        <p>${rock.info}</p>
    `;
    rockCollection.appendChild(rockItem);
}

function upgradePick() {
    if (coins >= 50) {
        coins -= 50;
        pickaxePower++;
        coinsElement.textContent = coins;
        alert(`Pickaxe upgraded! New power: ${pickaxePower}`);
        saveGame();
    } else {
        alert("Not enough coins!");
    }
}

function upgradeDepth() {
    if (coins >= 100) {
        coins -= 100;
        depth++;
        coinsElement.textContent = coins;
        depthElement.textContent = depth;
        alert(`Depth increased! New depth: ${depth}m`);
        saveGame();
    } else {
        alert("Not enough coins!");
    }
}

function showRock(rock) {
    rockElement.style.backgroundImage = `url(${rock.image})`;
    rockElement.innerHTML = `<div class="rock-name">${rock.name}</div>`;
    
    // Add subtle scale animation instead of rotation
    rockElement.style.transform = 'scale(0.9)';
    setTimeout(() => {
        rockElement.style.transform = 'scale(1)';
    }, 50);
}

function updateRockStyle() {
    const rockStyle = `
        #rock {
            width: 150px;
            height: 150px;
            background-size: cover;
            background-position: center;
            border-radius: 10px;
            transition: transform 0.1s ease-out;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        #rock:hover {
            transform: scale(1.05);
        }
        
        #rock:active {
            transform: scale(0.95);
        }
        
        .rock-name {
            background: rgba(0,0,0,0.7);
            color: white;
            padding: 5px;
            border-radius: 5px;
            margin-top: auto;
            text-align: center;
        }
    `;
    
    const styleSheet = document.createElement("style");
    styleSheet.innerText = rockStyle;
    document.head.appendChild(styleSheet);
}

function showQuiz() {
    const randomRock = minedRocks[Math.floor(Math.random() * minedRocks.length)];
    const correctAnswer = randomRock.name;
    const options = [correctAnswer];

    while (options.length < 4) {
        const randomOption = rocks[Math.floor(Math.random() * rocks.length)].name;
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }

    options.sort(() => Math.random() - 0.5);

    quizQuestion.textContent = `Which rock has the following definition: ${randomRock.info}`;
    quizOptions.innerHTML = options.map(option => `<button onclick="checkAnswer('${option}', '${correctAnswer}')">${option}</button>`).join('');

    quizOverlay.style.display = 'flex';
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert("Correct! You earned 20 bonus coins!");
        coins += 20;
    } else {
        alert(`Incorrect. The correct answer was ${correct}. You lost 20 coins.`);
        coins -= 20;
    }
    coinsElement.textContent = coins;
    quizOverlay.style.display = 'none';
}

function toggleSidebar(content) {
    sidebar.classList.toggle('open');
    shopContent.classList.remove('active');
    rockbookContent.classList.remove('active');
    content.classList.add('active');
}

function updateRockStyle() {
    const rockStyle = `
        #rock {
            width: 150px;
            height: 150px;
            background-size: cover;
            background-position: center;
            border-radius: 10px;
            transition: transform 0.3s;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        #rock:hover {
            transform: scale(1.05);
        }
        
        #rock:active {
            transform: scale(0.95);
        }
        
        .rock-name {
            background: rgba(0,0,0,0.7);
            color: white;
            padding: 5px;
            border-radius: 5px;
            margin-top: auto;
        }
    `;
    
    const styleSheet = document.createElement("style");
    styleSheet.innerText = rockStyle;
    document.head.appendChild(styleSheet);
}

document.addEventListener('DOMContentLoaded', () => {
    updateRockStyle();
    nameModal.style.display = 'flex';
});

startGameButton.addEventListener('click', () => {
    playerName = playerNameInput.value.trim();
    if (playerName) {
        nameModal.style.display = 'none';
        startGame();
    }
});

function startGame() {
    // Reset game state
    coins = 0;
    depth = 1;
    pickaxePower = 1;
    mineCount = 0;
    minedRocks = [];
    discoveredRocks = new Set();
    timeRemaining = 240;
    isGameActive = true;
    
    // Update UI
    updateTimer();
    coinsElement.textContent = coins;
    depthElement.textContent = depth;
    
    // Start timer
    gameTimer = setInterval(() => {
        timeRemaining--;
        updateTimer();
        
        if (timeRemaining <= 0) {
            endGame();
        }
    }, 1000);
}

function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

async function endGame() {
    clearInterval(gameTimer);
    isGameActive = false;
    
    // Submit score
    await fetch('https://api.pixelverse.tech/supabasedb/sciencegame/score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: playerName,
            score: coins
        })
    });
    
    // Get leaderboard
    const response = await fetch('https://api.pixelverse.tech/supabasedb/sciencegame/leaderboard');
    const leaderboard = await response.json();
    
    // Display leaderboard
    leaderboardList.innerHTML = leaderboard.map((entry, index) => `
        <div class="leaderboard-item ${entry.name === playerName ? 'highlight' : ''}">
            <span>#${index + 1} ${entry.name}</span>
            <span>${entry.score}</span>
        </div>
    `).join('');
    
    document.getElementById('final-score').textContent = `Your Score: ${coins}`;
    leaderboardModal.style.display = 'flex';
}

playAgainButton.addEventListener('click', () => {
    leaderboardModal.style.display = 'none';
    nameModal.style.display = 'flex';
});

document.addEventListener('DOMContentLoaded', () => {
    updateRockStyle();
    loadGame();
    rockElement.innerHTML = '<div class="rock-name">Start Mining!</div>';
});

mineArea.addEventListener('click', mineRock);
upgradePickButton.addEventListener('click', upgradePick);
upgradeDepthButton.addEventListener('click', upgradeDepth);
toggleShop.addEventListener('click', () => toggleSidebar(shopContent));
toggleRockbook.addEventListener('click', () => toggleSidebar(rockbookContent));
