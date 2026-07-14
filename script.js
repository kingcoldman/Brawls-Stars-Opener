const gameState = {
    resources: {
        coins: 1200,
        powerpoints: 400,
        bling: 150,
        gems: 80
    },
    unlockedBrawlers: {
        "Shelly": { level: 1, gadget: false, starpower: false, gear: false, hypercharge: false }
    },
    activeBrawler: "Shelly"
};

function updateUI() {
    // Format and display currencies
    document.getElementById('coins').innerText = gameState.resources.coins.toLocaleString();
    document.getElementById('powerpoints').innerText = gameState.resources.powerpoints.toLocaleString();
    document.getElementById('bling').innerText = gameState.resources.bling.toLocaleString();
    document.getElementById('gems').innerText = gameState.resources.gems.toLocaleString();

    // Display Active Brawler on lobby interface
    const brawler = gameState.unlockedBrawlers[gameState.activeBrawler];
    document.getElementById('active-brawler-name').innerText = gameState.activeBrawler.toUpperCase();
    document.getElementById('active-brawler-level').innerText = brawler.level;
    document.getElementById('active-brawler-img').src = brawlersDatabase[gameState.activeBrawler].img;
}

function upgradeActiveBrawler() {
    const active = gameState.activeBrawler;
    const stats = gameState.unlockedBrawlers[active];
    if (stats.level >= 11) {
        alert(`${active} is already at MAX level!`);
        return;
    }

    const coinsNeeded = stats.level * 150;
    const ppNeeded = stats.level * 75;

    if (gameState.resources.coins >= coinsNeeded && gameState.resources.powerpoints >= ppNeeded) {
        gameState.resources.coins -= coinsNeeded;
        gameState.resources.powerpoints -= ppNeeded;
        stats.level += 1;

        // Auto unlock accessory thresholds like actual BS levels (7: Gadget, 9: SP, 10: Gear, 11: HC)
        if (stats.level >= 7) stats.gadget = true;
        if (stats.level >= 9) stats.starpower = true;
        if (stats.level >= 10) stats.gear = true;
        if (stats.level >= 11) stats.hypercharge = true;

        updateUI();
        alert(`Upgraded ${active} to Power Level ${stats.level}!`);
    } else {
        alert(`Insufficient resources. Needs ${coinsNeeded} Coins & ${ppNeeded} PP.`);
    }
}

function openTab(tabName) {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    modal.classList.remove('hidden');

    if (tabName === 'brawlers') {
        let html = `<h2>BRAWLERS</h2><div class="brawlers-grid">`;
        for (let key in brawlersDatabase) {
            const unlocked = gameState.unlockedBrawlers[key] !== undefined;
            const bStats = unlocked ? gameState.unlockedBrawlers[key] : { level: 1 };
            
            html += `
                <div class="brawler-card ${brawlersDatabase[key].rarity} ${!unlocked ? 'locked' : ''}" 
                     style="background-image: url('${brawlersDatabase[key].img}')" 
                     onclick="selectBrawler('${key}')">
                    <div class="accessory-holder">
                        ${bStats.gadget ? '<div class="accessory-badge gadget">G</div>' : ''}
                        ${bStats.starpower ? '<div class="accessory-badge starpower">S</div>' : ''}
                        ${bStats.gear ? '<div class="accessory-badge gear">⚙️</div>' : ''}
                        ${bStats.hypercharge ? '<div class="accessory-badge hypercharge">H</div>' : ''}
                    </div>
                    <div class="brawler-card-bottom">
                        <div class="brawler-card-name">${key}</div>
                        <div class="brawler-card-level">POWER ${bStats.level}</div>
                    </div>
                </div>`;
        }
        html += `</div>`;
        body.innerHTML = html;
    } 
    else if (tabName === 'shop') {
        body.innerHTML = `
            <h2>STARR DROP & BOX SHOP</h2>
            <div class="shop-grid">
                <div class="shop-item">
                    <h3>STARR DROP</h3>
                    <p>Unlock gold, gadgets, power points, or random brawlers!</p>
                    <button class="menu-btn" onclick="gacha('starr')">OPEN FOR FREE</button>
                </div>
                <div class="shop-item">
                    <h3>MEGA BOX</h3>
                    <p>Cost: 80 Gems</p>
                    <button class="menu-btn" onclick="gacha('megabox')">OPEN BOX</button>
                </div>
            </div>`;
    } 
    else {
        body.innerHTML = `<h2>${tabName.toUpperCase()}</h2><p>Feature simulated content coming soon!</p>`;
    }
}

function selectBrawler(key) {
    if (gameState.unlockedBrawlers[key]) {
        gameState.activeBrawler = key;
        updateUI();
        closeModal();
    } else {
        alert("This brawler is locked! Open boxes or drops to find them.");
    }
}

function gacha(type) {
    if (type === 'megabox') {
        if (gameState.resources.gems < 80) {
            alert("Not enough Gems!");
            return;
        }
        gameState.resources.gems -= 80;
    }

    const roll = Math.random();
    let resultHeader = "";
    let resultDesc = "";

    if (roll < 0.4) {
        const coinsReward = Math.floor(Math.random() * 300) + 150;
        gameState.resources.coins += coinsReward;
        resultHeader = "COINS UNLOCKED!";
        resultDesc = `You found +${coinsReward} Coins.`;
    } else if (roll < 0.75) {
        const ppReward = Math.floor(Math.random() * 150) + 50;
        gameState.resources.powerpoints += ppReward;
        resultHeader = "POWER POINTS UNLOCKED!";
        resultDesc = `You found +${ppReward} Power Points.`;
    } else {
        // Retrieve brawlers that haven't been unlocked yet
        const lockedList = Object.keys(brawlersDatabase).filter(b => !gameState.unlockedBrawlers[b]);
        if (lockedList.length > 0) {
            const found = lockedList[Math.floor(Math.random() * lockedList.length)];
            gameState.unlockedBrawlers[found] = { level: 1, gadget: false, starpower: false, gear: false, hypercharge: false };
            resultHeader = "NEW BRAWLER UNLOCKED!";
            resultDesc = `Congratulations! You unlocked ${found.toUpperCase()}!`;
        } else {
            const blingReward = 200;
            gameState.resources.bling += blingReward;
            resultHeader = "BLING BONUS!";
            resultDesc = `All brawlers owned! Received +${blingReward} Bling instead.`;
        }
    }

    updateUI();
    document.getElementById('modal-body').innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <h1 style="color:#ffcc00; font-size: 2rem; margin-bottom:15px;">${resultHeader}</h1>
            <p style="font-size: 1.2rem; margin-bottom: 25px;">${resultDesc}</p>
            <button class="menu-btn" onclick="closeModal()">COLLECT</button>
        </div>`;
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

window.onload = updateUI;
