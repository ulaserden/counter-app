export function initCounter() {

    let count = 0;

    const counterValue = document.querySelector(".counter-value");
    const decreaseBtn = document.querySelector(".decrease");
    const resetBtn = document.querySelector(".reset");
    const increaseBtn = document.querySelector(".increase");

    updateCounter();

    increaseBtn.addEventListener("click", () => {
        if (count < 10) {
            count++;
        }

        updateCounter();
    });

    decreaseBtn.addEventListener("click", () => {
        if (count > -10) {
            count--;
        }

        updateCounter();
    });

    resetBtn.addEventListener("click", () => {
        count = 0;
        updateCounter();
    });

    function updateCounter() {
        updateCounterText();
        updateCounterColor();
        updateButtons();
    }

    function updateCounterText() {
        counterValue.textContent = count;
    }

    function updateCounterColor() {

        counterValue.classList.remove(
            "positive",
            "negative",
            "neutral"
        );

        if (count > 0) {
            counterValue.classList.add("positive");
        } else if (count < 0) {
            counterValue.classList.add("negative");
        } else {
            counterValue.classList.add("neutral");
        }

    }

    function updateButtons() {

        increaseBtn.disabled = false;
        decreaseBtn.disabled = false;
        resetBtn.disabled = false;

        if (count === 10) {
            increaseBtn.disabled = true;
        }

        if (count === -10) {
            decreaseBtn.disabled = true;
        }

        if (count === 0) {
            resetBtn.disabled = true;
        }

    }

}