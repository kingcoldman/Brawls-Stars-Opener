// Global Game State
const gameState = {
    resources: {
        coins: 1000,
        powerpoints: 500,
        bling: 250,
        gems: 50
    },
    unlockedBrawlers: {
        "Shelly": { level: 1, powerPoints: 0 }
    },
    activeBrawler: "Shelly"
};

// Database of some of the Brawlers (You can expand this to include all 107!)
const brawlersDatabase = {
    "Shelly": { rarity: "Starting", img: "assets/shelly.png" },
    "Colt": { rarity: "Rare", img: "assets/colt.png" },
    "El Primo": { rarity: "Rare", img: "assets/el_primo.png" },
    "Poco": { rarity: "Rare", img: "assets/poco.png" },
    "Mortis": { rarity: "Mythic", img: "assets/mortis.png" },
    "Leon": { rarity: "Legendary", img: "assets/leon.png" }
};

// Update Top UI Display
function updateUI() {
    document.getElementById('coins').innerText = gameState.resources.coins;
    document.getElementById('powerpoints').innerText = gameState.resources.powerpoints;
    document.getElementById('bling').innerText = gameState.resources.bling;
    document.getElementById('gems').innerText = gameState.resources.gems;

    const brawler = gameState.unlockedBrawlers[gameState.activeBrawler];
    document.getElementById('active-brawler-name').innerText = gameState.activeBrawler;
    document.getElementById('active-brawler-level').innerText = brawler.level;
    document.getElementById('active-brawler-img').src = brawlersDatabase[gameState.activeBrawler].img;
}

// Upgrade active brawler
function upgradeActiveBrawler() {
    const brawler = gameState.unlockedBrawlers[gameState.activeBrawler];
    const coinCost = brawler.level * 100;
    const ppCost = brawler.level * 50;

    if (gameState.resources.coins >= coinCost && gameState.resources.powerpoints >= ppCost) {
        gameState.resources.coins -= coinCost;
        gameState.resources.powerpoints -= ppCost;
        brawler.level += 1;
        updateUI();
        alert(`${gameState.activeBrawler} upgraded to Level ${brawler.level}!`);
    } else {
        alert("Not enough resources to upgrade!");
    }
}

// Side Menu Navigation Handler
function openTab(tabName) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    modal.classList.remove('hidden');

    if (tabName === 'shop') {
        modalBody.innerHTML = `
            <h2>Starr Drop & Box Shop</h2>
            <div style="display:flex; gap: 20px; margin-top:20px;">
                <button onclick="openStarrDrop()" class="menu-btn">Open Starr Drop (Free)</button>
                <button onclick="openMegaBox()" class="menu-btn">Open Mega Box (80 Gems)</button>
            </div>
        `;
    } else if (tabName === 'brawlers') {
        let brawlersHTML = '<h2>My Brawlers</h2><div style="display:flex; flex-wrap:wrap; gap:10px;">';
        for (let name in gameState.unlockedBrawlers) {
            brawlersHTML += `
                <div style="background:#2c3e50; border:2px solid #fff; padding:10px; border-radius:8px; text-align:center;">
                    <img src="${brawlersDatabase[name].img}" width="80"><br>
                    <strong>${name}</strong><br>
                    Level ${gameState.unlockedBrawlers[name].level}
                </div>`;
        }
        brawlersHTML += '</div>';
        modalBody.innerHTML = brawlersHTML;
    } else {
        modalBody.innerHTML = `<h2>${tabName.toUpperCase()}</h2><p>Feature coming soon in full version!</p>`;
    }
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

// Starr Drop Gacha Mechanic
function openStarrDrop() {
    const roll = Math.random();
    let rewardType = "";
    let amount = 0;
    let brawlerWon = null;

    if (roll < 0.50) {
        rewardType = "coins";
        amount = Math.floor(Math.random() * 100) + 50;
        gameState.resources.coins += amount;
    } else if (roll < 0.85) {
        rewardType = "powerpoints";
        amount = Math.floor(Math.random() * 50) + 20;
        gameState.resources.powerpoints += amount;
    } else {
        // Find a brawler that isn't unlocked yet
        const lockedBrawlers = Object.keys(brawlersDatabase).filter(b => !gameState.unlockedBrawlers[b]);
        if (lockedBrawlers.length > 0) {
            brawlerWon = lockedBrawlers[Math.floor(Math.random() * lockedBrawlers.length)];
            gameState.unlockedBrawlers[brawlerWon] = { level: 1, powerPoints: 0 };
        } else {
            // Backup reward if all brawlers unlocked
            rewardType = "bling";
            amount = 100;
            gameState.resources.bling += amount;
        }
    }

    // Display the drop reward inside the modal
    const modalBody = document.getElementById('modal-body');
    if (brawlerWon) {
        modalBody.innerHTML = `
            <div style="text-align:center;">
                <h1 style="color:#e74c3c;">⭐ STARR DROP UNLOCK! ⭐</h1>
                <img src="${brawlersDatabase[brawlerWon].img}" width="150">
                <h2>Unlocked Brawler: ${brawlerWon}!</h2>
                <button onclick="closeModal()" class="menu-btn">Awesome!</button>
            </div>`;
    } else {
        modalBody.innerHTML = `
            <div style="text-align:center;">
                <h1>Starr Drop Reward</h1>
                <h2>+${amount} ${rewardType.toUpperCase()}</h2>
                <button onclick="closeModal()" class="menu-btn">Claim</button>
            </div>`;
    }
    updateUI();
}

// Initialize UI on Load
window.onload = updateUI;
