// database.js

// 1. Core hand-crafted real brawlers
const coreBrawlers = [
    { id: "shelly", name: "Shelly", rarity: "Starting", img: "https://media.brawltime.ninja/brawlers/shelly/avatar.png", gadgets: ["Fast Forward", "Clay Pigeons"], starPowers: ["Shell Shock", "Band-Aid"], hc: "Double Barrel" },
    { id: "colt", name: "Colt", rarity: "Rare", img: "https://media.brawltime.ninja/brawlers/colt/avatar.png", gadgets: ["Speedloader", "Silver Bullet"], starPowers: ["Slick Boots", "Magnum Special"], hc: "Dual Wield" },
    { id: "elprimo", name: "El Primo", rarity: "Rare", img: "https://media.brawltime.ninja/brawlers/el_primo/avatar.png", gadgets: ["Suplex Supplement", "Asteroid Belt"], starPowers: ["El Fuego", "Meteor Rush"], hc: "Gravity Leap" },
    { id: "mortis", name: "Mortis", rarity: "Mythic", img: "https://media.brawltime.ninja/brawlers/mortis/avatar.png", gadgets: ["Combo Spinner", "Survival Shovel"], starPowers: ["Creepy Harvest", "Coiled Snake"], hc: "Blood Feast" },
    { id: "spike", name: "Spike", rarity: "Legendary", img: "https://media.brawltime.ninja/brawlers/spike/avatar.png", gadgets: ["Popping Pincushion", "Life Plant"], starPowers: ["Fertilize", "Curveball"], hc: "Blooming" },
    { id: "bolt", name: "Bolt", rarity: "Epic", img: "https://media.brawltime.ninja/brawlers/bolt/avatar.png", gadgets: ["Oil Change", "Bouncy Ball"], starPowers: ["Overdrive Max", "Shock Absorb"], hc: "Bowling Bolt" },
    { id: "starr_nova", name: "Starr Nova", rarity: "Mythic", img: "https://media.brawltime.ninja/brawlers/starr_nova/avatar.png", gadgets: ["Nova Hair, Go!", "Sword Dash"], starPowers: ["Cosmic Shift", "Anime Focus"], hc: "The Hypercharge" },
    { id: "nori", name: "Nori", rarity: "Legendary", img: "https://media.brawltime.ninja/brawlers/nori/avatar.png", gadgets: ["Sushi Snack", "Net Trap"], starPowers: ["Big Haul", "His Mother's Son"], hc: "Catch of the Day" }
];

// 2. Official names pool to populate the remaining 99 slots to reach 107
const rosterPoolNames = [
    "Brock", "Barley", "Darryl", "Rico", "Jacky", "Piper", "Frank", "Edgar", "Tara", "Mico", "Crow", "Kit", "Kenji",
    "Bull", "Jessie", "Bo", "Tick", "8-Bit", "Emz", "Stu", "Rosa", "Penny", "Carl", "Grom", "Gus", "Boone",
    "Pam", "Bibi", "Bea", "Nani", "Max", "Mr. P", "Sprout", "Byron", "Squeak", "Lou", "Ruffs", "Buzz", "Fang",
    "Eve", "Janet", "Otis", "Sam", "Buster", "Mandy", "R-T", "Maisie", "Hank", "Pearl", "Charlie", "Larry & Lawrie",
    "Angelo", "Melodie", "Lily", "Draco", "Clancy", "Berry", "Moe", "Juju", "Chucho", "Colette", "Amber", "Meg",
    "Chester", "Cordelius", "Leon", "Sandy", "Gale", "Surge", "Ash", "Lola", "Gray", "Willow", "Doug", "Chuck",
    "Sirius", "Najia", "Damian", "Wendy", "Kaze", "Alli", "Shade", "Nita", "Dynamike", "Rosa", "Penny", "Gene",
    "Belle", "Bonnie", "Grom", "Ash", "Lola", "Eve", "Buster", "Mandy", "Maisie", "Hank", "Pearl", "Charlie"
];

const raritiesList = ["Rare", "Super Rare", "Epic", "Mythic", "Legendary"];

function compileFullDatabase() {
    let fullRoster = [...coreBrawlers];
    let internalCounter = fullRoster.length;
    let nameIndex = 0;

    while (fullRoster.length < 107) {
        let name = rosterPoolNames[nameIndex] || `Brawler_${internalCounter}`;
        let fallbackId = name.toLowerCase().replace(/[^a-z0-9]/g, "_");
        let assignedRarity = raritiesList[internalCounter % raritiesList.length];

        fullRoster.push({
            id: fallbackId,
            name: name,
            rarity: assignedRarity,
            img: `https://media.brawltime.ninja/brawlers/${fallbackId}/avatar.png`,
            gadgets: [`${name} Gadget 1`, `${name} Gadget 2`],
            starPowers: [`${name} Star Power 1`, `${name} Star Power 2`],
            hc: `${name} Overdrive`
        });

        internalCounter++;
        nameIndex++;
    }
    return fullRoster;
}

const brawlersDatabase = compileFullDatabase();
