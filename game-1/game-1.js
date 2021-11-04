import { getUser, setUser } from '../utils.js';

const light = document.getElementById('light');
const doll = document.getElementById('doll');
const runBtn = document.getElementById('run-btn');
const returnBtn = document.getElementById('return-home');
let imgObj = document.getElementById('player-img');

const attemptSpan = document.getElementById('attempt-span');
const winMessage = document.getElementById('win-message');
const loseMessage = document.getElementById('lose-message');

imgObj = null;

function init() {
    imgObj = document.getElementById('player-img');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}

function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 30 + 'px';
}
window.onload = init;

let currentColor = 'green';
light.textContent = currentColor;

setInterval(function() {
    if (currentColor === 'red') {
        currentColor = 'green';
        doll.src = '../assets/doll.jpeg';
    } else {
        currentColor = 'red';
        doll.src = '../assets/laserdoll.jpg';
    } 
    light.textContent = currentColor;
}, 5000
);

let totalAttempts = 2;
attemptSpan.textContent = totalAttempts;

let totalClicks = 0;

runBtn.addEventListener('click', () => {
    moveRight();
    totalClicks++;
    if (totalClicks >= 53) {
        runBtn.disabled = true;
        returnBtn.classList.remove('hidden');
        winMessage.classList.remove('hidden');
    }
    if (currentColor === 'red') {
        totalAttempts--;
        totalClicks = 0;
        if (totalAttempts === 1) {
            imgObj.src = '../assets/onearm.png';
        }
        if (totalAttempts === 0) {
            imgObj.src = '../assets/oneleg.png';
        }
        imgObj.style.left = '0px';
        attemptSpan.textContent = totalAttempts;
        if (totalAttempts <= 0) {
            runBtn.disabled = true;
            returnBtn.classList.remove('hidden');
            loseMessage.classList.remove('hidden');
        }
    } 
});

returnBtn.addEventListener('click', () => {
    const user = getUser();
    if (totalAttempts === 0) {
        user.gamesLost++;
        setUser(user);
    } else {
        user.games++;
        user.money -= 8000;
        setUser(user);
    }
    window.location.replace('../map');
});