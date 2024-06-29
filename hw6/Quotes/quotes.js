const quotes = [
    "We do not remember days, we remember moments",
    "Happiness is not by chance, but by choice",
    "The more you say, the less people remember",
    "To love and be loved is to feel the sun from both sides",
    "Simplicity is the ultimate sophistication"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayRandomQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = getRandomQuote();
}

document.addEventListener('DOMContentLoaded', () => {
    displayRandomQuote();
    setInterval(displayRandomQuote, 10000);
});
