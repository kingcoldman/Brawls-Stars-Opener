// BRAWLERS DATA WITH DROP CHANCES
const BRAWLERS = [
  { id: 'shelly', name: 'Shelly', rarity: 'rare', icon: '🤠', dropChance: 40 },
  { id: 'el_primo', name: 'El Primo', rarity: 'rare', icon: '🥊', dropChance: 30 },
  { id: 'piper', name: 'Piper', rarity: 'epic', icon: '☂️', dropChance: 15 },
  { id: 'frank', name: 'Frank', rarity: 'epic', icon: '🔨', dropChance: 10 },
  { id: 'spike', name: 'Spike', rarity: 'legendary', icon: '🌵', dropChance: 3 },
  { id: 'crow', name: 'Crow', rarity: 'legendary', icon: '🦅', dropChance: 2 }
];

// INITIAL PLAYER DATA
let playerState = {
  coins: 0,
  gems: 20,
  trophies: 0,
  unlockedBrawlers: ['shelly'] // Starts with Shelly unlocked
};

// LOAD SAVED DATA
function loadGame() {
  const saved = localStorage.getItem('brawlOpenerSave');
  if (saved) {
    playerState = JSON.parse(saved);
  }
  updateUI();
  renderGrid();
}

// SAVE GAME DATA
function saveGame() {
  localStorage.setItem('brawlOpenerSave', JSON.stringify(playerState));
}

// UPDATE TOP BAR & COLLECTION STATS
function updateUI() {
  document.getElementById('coins').textContent = playerState.coins;
  document.getElementById('gems').textContent = playerState.gems;
  document.getElementById('trophies').textContent = playerState.trophies;
  document.getElementById('unlocked-count').textContent = playerState.unlockedBrawlers.length;
}

// RENDER BRAWLER GRID
function renderGrid() {
  const grid = document.getElementById('brawler-grid');
  grid.innerHTML = '';

  BRAWLERS.forEach(brawler => {
    const isUnlocked = playerState.unlockedBrawlers.includes(brawler.id);
    const card = document.createElement('div');
    card.className = `brawler-card ${brawler.rarity} ${isUnlocked ? 'unlocked' : ''}`;
    card.innerHTML = `
      <div class="icon">${brawler.icon}</div>
      <div class="name">${isUnlocked ? brawler.name : '???'}</div>
    `;
    grid.appendChild(card);
  });
}

// RNG DROPS SYSTEM
function triggerBoxOpen() {
  const boxElement = document.getElementById('box');
  boxElement.classList.add('shake');

  setTimeout(() => {
    boxElement.classList.remove('shake');

    // Generate random roll (0 - 100)
    const roll = Math.random() * 100;
    
    // 60% chance to drop coins/gems, 40% chance to attempt brawler drop
    if (roll > 40) {
      const coinDrop = Math.floor(Math.random() * 50) + 10;
      playerState.coins += coinDrop;
      showModal('Coins Found!', '🪙', `+${coinDrop} Coins`);
    } else {
      // Pick Brawler based on drop rates
      const brawler = getWeightedBrawlerDrop();
      if (!playerState.unlockedBrawlers.includes(brawler.id)) {
        playerState.unlockedBrawlers.push(brawler.id);
        playerState.trophies += 10;
        showModal('NEW BRAWLER!', brawler.icon, `${brawler.name} (${brawler.rarity.toUpperCase()})`);
      } else {
        // Duplicate brawler gives extra coins
        playerState.coins += 25;
        showModal('Duplicate Brawler!', '🪙', 'Converted to +25 Coins');
      }
    }

    updateUI();
    renderGrid();
    saveGame();
  }, 600);
}

function getWeightedBrawlerDrop() {
  let random = Math.random() * 100;
  for (let brawler of BRAWLERS) {
    if (random < brawler.dropChance) {
      return brawler;
    }
    random -= brawler.dropChance;
  }
  return BRAWLERS[0];
}

// MODAL CONTROLS
function showModal(title, icon, text) {
  document.getElementById('drop-title').textContent = title;
  document.getElementById('drop-image').textContent = icon;
  document.getElementById('drop-name').textContent = text;
  document.getElementById('drop-modal').classList.remove('hidden');
}

// EVENT LISTENERS
document.getElementById('open-btn').addEventListener('click', triggerBoxOpen);
document.getElementById('box').addEventListener('click', triggerBoxOpen);
document.getElementById('claim-btn').addEventListener('click', () => {
  document.getElementById('drop-modal').classList.add('hidden');
});

// START GAME ON LOAD
loadGame();
