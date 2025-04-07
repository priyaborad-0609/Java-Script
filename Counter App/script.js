const countdownInput = document.getElementById('countdownInput');
const countdownDisplay = document.getElementById('countdownDisplay');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

let countdownInterval;
let currentCount;

countdownInput.addEventListener('input', function () {
    countdownDisplay.textContent = this.value;
});

startBtn.addEventListener('click', function () {
    const startNumber = parseInt(countdownInput.value);

    if (isNaN(startNumber) || startNumber <= 0) {
        alert('Please enter a valid positive number');
        return;
    }

    countdownInput.disabled = true;
    startBtn.disabled = true;
    resetBtn.disabled = false;

    currentCount = startNumber;
    countdownDisplay.textContent = currentCount;

    countdownInterval = setInterval(() => {
        currentCount--;
        countdownDisplay.textContent = currentCount;

        if (currentCount <= 0) {
            clearInterval(countdownInterval);
            countdownDisplay.textContent = "Done!";
            startBtn.disabled = false;
        }
    }, 1000);
});

resetBtn.addEventListener('click', function () {
    clearInterval(countdownInterval);
    countdownDisplay.textContent = countdownInput.value;
    countdownInput.disabled = false;
    startBtn.disabled = false;
    resetBtn.disabled = true;
});