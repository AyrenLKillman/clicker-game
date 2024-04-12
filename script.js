let clicks = 0;
let clickBoost = 1;
let autoClickers = 0;
let rebirth = 0;
//shop items
const shopItems = [
    { name: "Small Click Boost", cost: 10, clickIncrease: 1 },
    { name: "Medium Click Boost", cost: 50, clickIncrease: 3 },
    { name: "Large Click Boost", cost: 100, clickIncrease: 5 },
    { name: "Larger Click Boost", cost: 300, clickIncrease: 15 },
    { name: "Even Larger Click Boost", cost: 6000, clickIncrease: 20 },
    { name: "Huge Click Boost", cost: 10000, clickIncrease: 50 },
    { name: "Massive Click Boost", cost: 500000, clickIncrease: 100 },
    { name: "Huge Click Boost", cost: 1000000, clickIncrease: 500 },
    { name: "Cheap AutoClicker", cost: 1000, clicksPerSecond: 1 },
    { name: "Meh AutoClicker", cost: 5000, clicksPerSecond: 3},
    { name: "Ok AutoClicker", cost: 10000, clicksPerSecond: 10},
    { name: "Good AutoClicker", cost: 50000, clicksPerSecond: 50},
    { name: "Better AutoClicker", cost: 100000, clicksPerSecond: 100},
    { name: "best AutoClicker", cost: 10000000, clicksPerSecond: 1000},
    { name: "Too much AutoClicker", cost: 30000000, clicksPerSecond: 3000},
    { name: "Way too much AutoClicker", cost: 50000000, clicksPerSecond: 5000},
    { name: "2x clicks", cost: 10000000, multiplayclicks: 2},
    { name: "3x clicks", cost: 80000000, multiplayclicks: 3},
    { name: "4x clicks", cost: 6000000000, multiplayclicks: 4},
    { name: "5x clicks", cost: 8000000000, multiplayclicks: 5},
    { name: "Rebirth", cost: 200000000000000, Rebirth: 1},
    

];
//this updates the number on the html
function updateClicks() {
    document.getElementById("clicks").textContent = clicks;
    document.getElementById("clickBoost").textContent = clickBoost;
    document.getElementById("rebirth").textContent = rebirth;
   
}
//this happens when the button is pressed
function click() {
    clicks += clickBoost;
    updateClicks();
}
//how the shop works
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
        if (item.multiplayclicks) {
            clickBoost *= item.multiplayclicks;
        }
        if (item.Rebirth){
            rebirth += 1;
            clickBoost = 1;
            clicks = 1;
            autoClickers = 0;
        }
        updateClicks();
        displayShopItems();
    } else {
        alert("Not enough clicks to buy this item.");
    }
}
//how the auto clicker works
function startAutoClickers() {
    setInterval(() => {
        clicks += autoClickers;
        updateClicks();
    }, 1000);
}



//how you see the shop items in general
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


document.getElementById("clickButton").addEventListener("click", click);

updateClicks();
displayShopItems();