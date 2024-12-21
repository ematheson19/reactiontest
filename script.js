// Script For Reaction Test Game //
let timeInterval;
let startTime;
let isGameStarted = false;

const screen = document.getElementById('screen');
const screenText = document.getElementById('screen-text');

defaultScreen();

function defaultScreen() {
    screenText.innerText = "Click Anywhere To Start";
    screen.style.backgroundColor = "white";
    screenText.style.color = "black";
}


function start() {
    screenText.innerText = "Click On Green!";
    screen.style.backgroundColor = "rgb(242, 40, 67)";
    screenText.style.color = "white";

    const randomTime = Math.floor(Math.random() * 5000) + 2000;

    setTimeout(() => {
        screen.style.backgroundColor = "rgb(76, 175, 80)";
        screenText.style.color = "white";
        screenText.innerText = "Click Now!";

        startTime = Date.now();

        timeInterval = setInterval(updateTimer, 100);
    }, randomTime);
}

screen.addEventListener('click', () => {
    if (!isGameStarted) {

        isGameStarted = true;
        start();
    } else {
        const currentColor = getComputedStyle(screen).backgroundColor;

        if (currentColor === "rgb(76, 175, 80)") {
            clearInterval(timeInterval);
            screen.style.backgroundColor = "gray";
            const reactionTime = Date.now() - startTime;
            screenText.innerText = `You clicked in ${reactionTime} ms!
            Click Anywhere To Try Again`;

            setTimeout(() => {
                isGameStarted = false;
            }, 2000);
        }
    }
});