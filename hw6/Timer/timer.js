let countdown;
let timeLeft;
let timerDisplay = document.getElementById('timerDisplay');
let timeInput = document.getElementById('timeInput');

function startTimer() {
    if (countdown) clearInterval(countdown);
    timeLeft = parseInt(timeInput.value);
    countdown = setInterval(updateTimer, 1000);
}

function stopTimer() {
    if (countdown) {
        clearInterval(countdown);
        countdown = null; // Обнуляем countdown при остановке таймера
    }
}

function resumeTimer() {
    if (!countdown && timeLeft > 0) {
        countdown = setInterval(updateTimer, 1000);
    }
}

function resetTimer() {
    if (countdown) clearInterval(countdown);
    timeLeft = 0;
    countdown = null; // Обнуляем countdown при сбросе таймера
    timerDisplay.textContent = formatTime(timeLeft);
}

function updateTimer() {
    if (timeLeft <= 0) {
        clearInterval(countdown);
        countdown = null; // Обнуляем countdown при достижении нуля
        return;
    }
    timeLeft--;
    timerDisplay.textContent = formatTime(timeLeft);
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours > 0 ? hours + ':' : ''}${hours > 0 && minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
