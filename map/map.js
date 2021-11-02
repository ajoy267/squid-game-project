import { userProfile } from '../utils.js';

const startButton = document.getElementById('start-button');

userProfile();

let totalClicks = 0;

startButton.addEventListener('click', () => {
    totalClicks++;

    if (totalClicks <= 1){
        window.location.replace('../game-1');
    } else if (totalClicks === 2) {
        window.location.replace('../game-2');
    } else {
        window.location.replace('../game-3');
    }
});