let list = [
    { item: "Chips", amount: 3, bought: false },
    { item: "Salt", amount: 2, bought: true },
    { item: "Cookies", amount: 4, bought: false }
];

function showList() {
    console.log("Shopping list : ");
    list.filter(item => !item.bought).forEach(item => {
        console.log(`${item.item} - ${item.amount}`);
    });
    list.filter(item => item.bought).forEach(item => {
        console.log(`${item.item} - ${item.amount} (buyed)`);
    });
}

function addItem(item, amount) {
    let existingItem = list.find(i => i.item === item);
    if (existingItem) {
        existingItem.amount += amount;
    } else {
        list.push({ item: item, amount: amount, bought: false });
    }
}

function buyItem(item) {
    let targetItem = list.find(i => i.item === item);
    if (targetItem) {
        targetItem.bought = true;
        console.log(`${item} marked as purchased`);
    } else {
        console.log(`Product ${item} not found`);
    }
}

showList();
addItem("Sugar", 5);
addItem("МолоSaltко", 2);
buyItem("Chocolate");
showList();
