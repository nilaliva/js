let items = [
    { name: "Salt", quantity: 3, price: 20 },
    { name: "Cookies", quantity: 1, price: 50 },
    { name: "Chocolate", quantity: 2, price: 30 },
    { name: "Milk", quantity: 1, price: 80 }
];

function printBill() {
    console.log("Check:");
    items.forEach(item => {
        console.log(`${item.name} - ${item.quantity} quantity by ${item.price} $`);
    });
}

function calcTotal() {
    let total = 0;
    items.forEach(item => {
        total += item.quantity * item.price;
    });
    return total;
}

function maxPurchase() {
    let maxItem = items.reduce((max, item) => (item.price > max.price ? item : max), items[0]);
    return maxItem;
}

function avgPrice() {
    let totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
    let totalPrice = items.reduce((total, item) => total + item.quantity * item.price, 0);
    return totalPrice / totalQuantity;
}

printBill();
console.log("Total cost:", calcTotal(), "$");
console.log("Most expensive:", maxPurchase().name);
console.log("Average cost od 1 product in check:", avgPrice(), "$");