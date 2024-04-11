let clicks = 0;
let clickBoost = 1;
let autoClickers = 0;

const shopItems = [
    { name: "Small Click Boost", cost: 10, clickIncrease: 1 },
    { name: "Medium Click Boost", cost: 50, clickIncrease: 3 },
    { name: "Large Click Boost", cost: 100, clickIncrease: 5 },
    { name: "Larger Click Boost", cost: 300, clickIncrease: 15 },
    { name: "Even Larger Click Boost", cost: 6000, clickIncrease: 20 },
    { name: "Huge Click Boost", cost: 10000, clickIncrease: 50 },
    { name: "CheapAutoClicker", cost: 200, clicksPerSecond: 1 },
    { name: "MehAutoClicker", cost: 500, clicksPerSecond: 3},
    { name: "OkAutoClicker", cost: 1000, clicksPerSecond: 10},
    { name: "GoodAutoClicker", cost: 5000, clicksPerSecond: 50},
    { name: "BetterAutoClicker", cost: 10000, clicksPerSecond: 100},
    { name: "bestAutoClicker", cost: 100000, clicksPerSecond: 1000},
    { name: "OH LAWD HE COMIN Click Boost", cost: 500000, clickIncrease: 800 },
];

function updateClicks() {
    document.getElementById("clicks").textContent = clicks;
    document.getElementById("clickBoost").textContent = clickBoost;
}

function click() {
    clicks += clickBoost;
    updateClicks();
}

function buyItem(index) {
    const item = shopItems[index];
    if (clicks >= item.cost) {
        clicks -= item.cost;
        if (item.clickIncrease) {
            clickBoost += item.clickIncrease;
        }
        if (item.clicksPerSecond) {
            autoClickers += item.clicksPerSecond;
            startAutoClickers();
        }
        updateClicks();
        displayShopItems();
    } else {
        alert("Not enough clicks to buy this item.");
    }
}

function startAutoClickers() {
    setInterval(() => {
        clicks += autoClickers;
        updateClicks();
    }, 1000);
}

function displayShopItems() {
    const itemsDiv = document.getElementById("items");
    itemsDiv.innerHTML = "";
    shopItems.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `
            <p>${item.name} - Cost: ${item.cost}</p>
            <button onclick="buyItem(${index})">Buy</button>
        `;
        itemsDiv.appendChild(itemDiv);
    });
}

// Initial click event binding
document.getElementById("clickButton").addEventListener("click", click);

// Initial display
updateClicks();
displayShopItems();