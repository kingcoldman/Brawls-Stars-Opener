// COMPLETE BRAWLER LIST & DROP WEIGHTS
const BRAWLERS = [
  // Starting Brawler
  { id: 'shelly', name: 'Shelly', rarity: 'rare', icon: '🤠' },

  // Rare Brawlers
  { id: 'barley', name: 'Barley', rarity: 'rare', icon: '🍾' },
  { id: 'brock', name: 'Brock', rarity: 'rare', icon: '🚀' },
  { id: 'bull', name: 'Bull', rarity: 'rare', icon: '🐂' },
  { id: 'colt', name: 'Colt', rarity: 'rare', icon: '🔫' },
  { id: 'el_primo', name: 'El Primo', rarity: 'rare', icon: '🥊' },
  { id: 'nita', name: 'Nita', rarity: 'rare', icon: '🐻' },
  { id: 'poco', name: 'Poco', rarity: 'rare', icon: '🎸' },
  { id: 'rosa', name: 'Rosa', rarity: 'rare', icon: '🌹' },

  // Super Rare Brawlers
  { id: '8_bit', name: '8-Bit', rarity: 'super_rare', icon: '🕹️' },
  { id: 'carl', name: 'Carl', rarity: 'super_rare', icon: '⛏️' },
  { id: 'darryl', name: 'Darryl', rarity: 'super_rare', icon: '🛢️' },
  { id: 'dynamike', name: 'Dynamike', rarity: 'super_rare', icon: '🧨' },
  { id: 'gus', name: 'Gus', rarity: 'super_rare', icon: '🎈' },
  { id: 'jacky', name: 'Jacky', rarity: 'super_rare', icon: '🚜' },
  { id: 'jessie', name: 'Jessie', rarity: 'super_rare', icon: '🐕' },
  { id: 'penny', name: 'Penny', rarity: 'super_rare', icon: '🏴‍☠️' },
  { id: 'rico', name: 'Rico', rarity: 'super_rare', icon: '🤖' },
  { id: 'tick', name: 'Tick', rarity: 'super_rare', icon: '💣' },

  // Epic Brawlers
  { id: 'angelo', name: 'Angelo', rarity: 'epic', icon: '🦟' },
  { id: 'ash', name: 'Ash', rarity: 'epic', icon: '🗑️' },
  { id: 'bea', name: 'Bea', rarity: 'epic', icon: '🐝' },
  { id: 'belle', name: 'Belle', rarity: 'epic', icon: '⚡' },
  { id: 'berry', name: 'Berry', rarity: 'epic', icon: '🦄' },
  { id: 'bibi', name: 'Bibi', rarity: 'epic', icon: '⚾' },
  { id: 'bo', name: 'Bo', rarity: 'epic', icon: '🏹' },
  { id: 'bolt', name: 'Bolt', rarity: 'epic', icon: '⚡' },
  { id: 'bonnie', name: 'Bonnie', rarity: 'epic', icon: '💥' },
  { id: 'colette', name: 'Colette', rarity: 'epic', icon: '📓' },
  { id: 'edgar', name: 'Edgar', rarity: 'epic', icon: '🧣' },
  { id: 'emz', name: 'Emz', rarity: 'epic', icon: '📱' },
  { id: 'fang', name: 'Fang', rarity: 'epic', icon: '👟' },
  { id: 'frank', name: 'Frank', rarity: 'epic', icon: '🔨' },
  { id: 'gale', name: 'Gale', rarity: 'epic', icon: '❄️' },
  { id: 'glowy', name: 'Glowy', rarity: 'epic', icon: '💡' },
  { id: 'griff', name: 'Griff', rarity: 'epic', icon: '💸' },
  { id: 'grom', name: 'Grom', rarity: 'epic', icon: '🏰' },
  { id: 'hank', name: 'Hank', rarity: 'epic', icon: '🦐' },
  { id: 'larry_lawrie', name: 'Larry & Lawrie', rarity: 'epic', icon: '👮' },
  { id: 'lola', name: 'Lola', rarity: 'epic', icon: '🎭' },
  { id: 'lou', name: 'Lou', rarity: 'epic', icon: '🍧' },
  { id: 'maisie', name: 'Maisie', rarity: 'epic', icon: '🦾' },
  { id: 'mandy', name: 'Mandy', rarity: 'epic', icon: '🍬' },
  { id: 'meeple', name: 'Meeple', rarity: 'epic', icon: '🎲' },
  { id: 'mina', name: 'Mina', rarity: 'epic', icon: '🎶' },
  { id: 'nani', name: 'Nani', rarity: 'epic', icon: '👁️' },
  { id: 'pearl', name: 'Pearl', rarity: 'epic', icon: '🍪' },
  { id: 'piper', name: 'Piper', rarity: 'epic', icon: '☂️' },
  { id: 'pam', name: 'Pam', rarity: 'epic', icon: '🔧' },
  { id: 'sam', name: 'Sam', rarity: 'epic', icon: '🥊' },
  { id: 'stu', name: 'Stu', rarity: 'epic', icon: '🏎️' },

  // Mythic Brawlers
  { id: 'buster', name: 'Buster', rarity: 'mythic', icon: '📹' },
  { id: 'buzz', name: 'Buzz', rarity: 'mythic', icon: '🐊' },
  { id: 'byron', name: 'Byron', rarity: 'mythic', icon: '🧪' },
  { id: 'charlie', name: 'Charlie', rarity: 'mythic', icon: '🕷️' },
  { id: 'chuck', name: 'Chuck', rarity: 'mythic', icon: '🚂' },
  { id: 'clancy', name: 'Clancy', rarity: 'mythic', icon: '🦞' },
  { id: 'damian', name: 'Damian', rarity: 'mythic', icon: '🔮' },
  { id: 'doug', name: 'Doug', rarity: 'mythic', icon: '🌭' },
  { id: 'eve', name: 'Eve', rarity: 'mythic', icon: '🛸' },
  { id: 'gene', name: 'Gene', rarity: 'mythic', icon: '🧞' },
  { id: 'gray', name: 'Gray', rarity: 'mythic', icon: '🎩' },
  { id: 'guju', name: 'Juju', rarity: 'mythic', icon: '🧿' },
  { id: 'jae_yong', name: 'Jae-yong', rarity: 'mythic', icon: '🎧' },
  { id: 'janet', name: 'Janet', rarity: 'mythic', icon: '🚀' },
  { id: 'kaze', name: 'Kaze', rarity: 'mythic', icon: '⚔️' },
  { id: 'kenji', name: 'Kenji', rarity: 'mythic', icon: '🍣' },
  { id: 'lily', name: 'Lily', rarity: 'mythic', icon: '🌺' },
  { id: 'max', name: 'Max', rarity: 'mythic', icon: '⚡' },
  { id: 'melodie', name: 'Melodie', rarity: 'mythic', icon: '🎤' },
  { id: 'mico', name: 'Mico', rarity: 'mythic', icon: '🐵' },
  { id: 'moe', name: 'Moe', rarity: 'mythic', icon: '🐀' },
  { id: 'mortis', name: 'Mortis', rarity: 'mythic', icon: '🦇' },
  { id: 'mr_p', name: 'Mr. P', rarity: 'mythic', icon: '🐧' },
  { id: 'najia', name: 'Najia', rarity: 'mythic', icon: '🐍' },
  { id: 'otis', name: 'Otis', rarity: 'mythic', icon: '🎨' },
  { id: 'r_t', name: 'R-T', rarity: 'mythic', icon: '📡' },
  { id: 'ruffs', name: 'Ruffs', rarity: 'mythic', icon: '🐶' },
  { id: 'shade', name: 'Shade', rarity: 'mythic', icon: '👻' },
  { id: 'sprout', name: 'Sprout', rarity: 'mythic', icon: '🌱' },
  { id: 'squeak', name: 'Squeak', rarity: 'mythic', icon: '💧' },
  { id: 'starr_nova', name: 'Starr Nova', rarity: 'mythic', icon: '🌟' },
  { id: 'surge', name: 'Surge', rarity: 'mythic', icon: '🥤' },
  { id: 'tara', name: 'Tara', rarity: 'mythic', icon: '🃏' },
  { id: 'wendy', name: 'Wendy', rarity: 'mythic', icon: '🌪️' },
  { id: 'willow', name: 'Willow', rarity: 'mythic', icon: '🐸' },

  // Legendary Brawlers
  { id: 'alli', name: 'Alli', rarity: 'legendary', icon: '🦎' },
  { id: 'amber', name: 'Amber', rarity: 'legendary', icon: '🔥' },
  { id: 'chester', name: 'Chester', rarity: 'legendary', icon: '🃏' },
  { id: 'cordelius', name: 'Cordelius', rarity: 'legendary', icon: '🍄' },
  { id: 'crow', name: 'Crow', rarity: 'legendary', icon: '🦅' },
  { id: 'draco', name: 'Draco', rarity: 'legendary', icon: '🐉' },
  { id: 'kit', name: 'Kit', rarity: 'legendary', icon: '🐱' },
  { id: 'leon', name: 'Leon', rarity: 'legendary', icon: '🦎' },
  { id: 'meg', name: 'Meg', rarity: 'legendary', icon: '🤖' },
  { id: 'pierce', name: 'Pierce', rarity: 'legendary', icon: '🏹' },
  { id: 'sandy', name: 'Sandy', rarity: 'legendary', icon: '⏳' },
  { id: 'spike', name: 'Spike', rarity: 'legendary', icon: '🌵' },

  // Ultra Legendary Brawlers
  { id: 'nori', name: 'Nori', rarity: 'ultra_legendary', icon: '🌌' },
  { id: 'sirius', name: 'Sirius', rarity: 'ultra_legendary', icon: '💫' }
];

// RARITY DROP RATES (WEIGHTS)
const RARITY_WEIGHTS = {
  rare: 50,
  super_rare: 25,
  epic: 15,
  mythic: 7,
  legendary: 2.5,
  ultra_legendary: 0.5
};

// INITIAL PLAYER DATA
let playerState = {
  coins: 0,
  gems: 20,
  trophies: 0,
  unlockedBrawlers: ['shelly']
};

function loadGame() {
  const saved = localStorage.getItem('brawlOpenerSave');
  if (saved) {
    playerState = JSON.parse(saved);
  }
  updateUI();
  renderGrid();
}

function saveGame() {
  localStorage.setItem('brawlOpenerSave', JSON.stringify(playerState));
}

function updateUI() {
  document.getElementById('coins').textContent = playerState.coins;
  document.getElementById('gems').textContent = playerState.gems;
  document.getElementById('trophies').textContent = playerState.trophies;
  document.getElementById('unlocked-count').textContent = playerState.unlockedBrawlers.length;
}

// RENDER GRID WITH ALL BRAWLERS
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

// BOX OPENING LOGIC
function triggerBoxOpen() {
  const boxElement = document.getElementById('box');
  boxElement.classList.add('shake');

  setTimeout(() => {
    boxElement.classList.remove('shake');

    const roll = Math.random() * 100;
    
    // 60% chance for coins, 40% chance to drop a brawler
    if (roll > 40) {
      const coinDrop = Math.floor(Math.random() * 80) + 20;
      playerState.coins += coinDrop;
      showModal('Coins Found!', '🪙', `+${coinDrop} Coins`);
    } else {
      const brawler = getRandomBrawlerByRarity();
      if (!playerState.unlockedBrawlers.includes(brawler.id)) {
        playerState.unlockedBrawlers.push(brawler.id);
        playerState.trophies += 10;
        showModal('NEW BRAWLER!', brawler.icon, `${brawler.name} (${brawler.rarity.replace('_', ' ').toUpperCase()})`);
      } else {
        playerState.coins += 50;
        showModal('Duplicate Brawler!', '🪙', 'Converted to +50 Coins');
      }
    }

    updateUI();
    renderGrid();
    saveGame();
  }, 500);
}

// SELECT A BRAWLER BASED ON WEIGHTED RARITY CHANCES
function getRandomBrawlerByRarity() {
  const totalWeight = Object.values(RARITY_WEIGHTS).reduce((a, b) => a + b, 0);
  let random = Math.random() * totalWeight;

  let selectedRarity = 'rare';
  for (const [rarity, weight] of Object.entries(RARITY_WEIGHTS)) {
    if (random < weight) {
      selectedRarity = rarity;
      break;
    }
    random -= weight;
  }

  // Filter brawlers in that rarity class
  const availableBrawlers = BRAWLERS.filter(b => b.rarity === selectedRarity);
  return availableBrawlers[Math.floor(Math.random() * availableBrawlers.length)] || BRAWLERS[0];
}

function showModal(title, icon, text) {
  document.getElementById('drop-title').textContent = title;
  document.getElementById('drop-image').textContent = icon;
  document.getElementById('drop-name').textContent = text;
  document.getElementById('drop-modal').classList.remove('hidden');
}

document.getElementById('open-btn').addEventListener('click', triggerBoxOpen);
document.getElementById('box').addEventListener('click', triggerBoxOpen);
document.getElementById('claim-btn').addEventListener('click', () => {
  document.getElementById('drop-modal').classList.add('hidden');
});

loadGame();
