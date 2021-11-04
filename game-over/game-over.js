import { getUser, setUser } from '../utils.js';

const balance = document.getElementById('balance');
const gamesWon = document.getElementById('games-won');
const gamesLost = document.getElementById('games-lost');
const winSection = document.getElementById('winner');
const loseSection = document.getElementById('isa');
const playerNumber = document.getElementById('number');
const isaBtn = document.getElementById('sign-isa');
const startOver = document.getElementById('start-over-btn');

const user = getUser();

if (user.money > 0) {
    balance.textContent = `-$${user.money}`;
} else {
    balance.textContent = `$${Math.abs(user.money)}`;
}
gamesWon.textContent = user.games;
gamesLost.textContent = user.gamesLost;

if (user.games >= 3) {
    winSection.classList.remove('hidden');
    loseSection.classList.add('hidden');
    document.body.style.background = `url('../assets/piggy.jpeg') no-repeat`;
    document.body.style.backgroundSize = `cover`;
    document.body.style.backgroundPosition = `center`;
} else if (user.games < 3) {
    playerNumber.textContent = user.number;
    document.body.style.background = `url('../assets/coffin.jpg') no-repeat`;
    document.body.style.backgroundSize = `cover`;
    document.body.style.backgroundPosition = `center`;
}

isaBtn.addEventListener('click', () => {
    user.totalClicks = 0;
    setUser(user);
    window.location.replace('../map');
});

startOver.addEventListener('click', () => {
    localStorage.removeItem('USER');
    window.location.replace('..');
});
