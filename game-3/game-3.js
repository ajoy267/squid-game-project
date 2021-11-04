import { setUser, getUser } from '../utils.js';

const glass1 = document.getElementById('glass-1');
const glass2 = document.getElementById('glass-2');
const glass3 = document.getElementById('glass-3');
const glass4 = document.getElementById('glass-4');
const glass5 = document.getElementById('glass-5');
const glass6 = document.getElementById('glass-6');
const glass7 = document.getElementById('glass-7');
const glass8 = document.getElementById('glass-8');
const glass9 = document.getElementById('glass-9');
const glass10 = document.getElementById('glass-10');
const fake1 = document.getElementById('fake-1');
const fake2 = document.getElementById('fake-2');
const fake3 = document.getElementById('fake-3');
const fake4 = document.getElementById('fake-4');
const fake5 = document.getElementById('fake-5');
const real1 = document.getElementById('real-1');
const real2 = document.getElementById('real-2');
const real3 = document.getElementById('real-3');
const real4 = document.getElementById('real-4');
const real5 = document.getElementById('real-5');

const figure = document.getElementById('figure');

const resultMessage = document.getElementById('result-message');
const endGame = document.getElementById('end-game');

const triesLeft = document.getElementById('tries-left');
let tries = 3;
triesLeft.textContent = tries;

document.getElementById('glass-3').disabled = true;
document.getElementById('glass-4').disabled = true;
document.getElementById('glass-5').disabled = true;
document.getElementById('glass-6').disabled = true;
document.getElementById('glass-7').disabled = true;
document.getElementById('glass-8').disabled = true;
document.getElementById('glass-9').disabled = true;
document.getElementById('glass-10').disabled = true;

glass1.addEventListener('click', () => {
    real1.src = '../assets/jumpglass.png';
    document.getElementById('glass-1').disabled = true;
    document.getElementById('glass-2').disabled = true;
    document.getElementById('glass-3').disabled = false;
    document.getElementById('glass-4').disabled = false;
    figure.src = '../assets/transparent.png';
});

glass2.addEventListener('click', () => {
    tries--;
    fake1.src = '../assets/broken-glass.png';
    document.getElementById('glass-1').disabled = true;
    document.getElementById('glass-2').disabled = true;
    document.getElementById('glass-3').disabled = false;
    document.getElementById('glass-4').disabled = false;
    figure.src = '../assets/transparent.png';
    if (tries <= 0) {
        resultMessage.textContent = 'You died, game over.';
        triesLeft.textContent = tries;
    } else {
        resultMessage.textContent = 'You made it across safely!';
        triesLeft.textContent = tries;
    }
});

glass3.addEventListener('click', () => {
    tries--;
    fake2.src = '../assets/broken-glass.png';
    document.getElementById('glass-3').disabled = true;
    document.getElementById('glass-4').disabled = true;
    document.getElementById('glass-5').disabled = false;
    document.getElementById('glass-6').disabled = false;
    if (tries <= 0) {
        resultMessage.textContent = 'You died, game over.';
        triesLeft.textContent = tries;
    } else {
        resultMessage.textContent = 'You made it across safely!';
        triesLeft.textContent = tries;
    }
});

glass4.addEventListener('click', () => {
    real2.src = '../assets/jumpglass.png';
    document.getElementById('glass-3').disabled = true;
    document.getElementById('glass-4').disabled = true;
    document.getElementById('glass-5').disabled = false;
    document.getElementById('glass-6').disabled = false;
    real1.src = '../assets/glass.png';
});

glass5.addEventListener('click', () => {
    tries--;
    fake3.src = '../assets/broken-glass.png';
    document.getElementById('glass-5').disabled = true;
    document.getElementById('glass-6').disabled = true;
    document.getElementById('glass-7').disabled = false;
    document.getElementById('glass-8').disabled = false;
    if (tries <= 0) {
        endGame.classList.remove('hidden');
        resultMessage.classList.remove('hidden');
        resultMessage.textContent = 'You died, game over.';
        triesLeft.textContent = tries;
        document.getElementById('glass-6').disabled = true;
        document.getElementById('glass-7').disabled = true;
        document.getElementById('glass-8').disabled = true;
        document.getElementById('glass-9').disabled = true;
        document.getElementById('glass-10').disabled = true;
    } else {
        resultMessage.textContent = 'You made it across safely!';
        triesLeft.textContent = tries;
    }
});

glass6.addEventListener('click', () => {
    real3.src = '../assets/jumpglass.png';
    document.getElementById('glass-5').disabled = true;
    document.getElementById('glass-6').disabled = true;
    document.getElementById('glass-7').disabled = false;
    document.getElementById('glass-8').disabled = false;
    real1.src = '../assets/glass.png';
    real2.src = '../assets/glass.png';
});

glass7.addEventListener('click', () => {
    real4.src = '../assets/jumpglass.png';
    document.getElementById('glass-7').disabled = true;
    document.getElementById('glass-8').disabled = true;
    document.getElementById('glass-9').disabled = false;
    document.getElementById('glass-10').disabled = false;
    real1.src = '../assets/glass.png';
    real2.src = '../assets/glass.png';
    real3.src = '../assets/glass.png';
});

glass8.addEventListener('click', () => {
    tries--;
    fake4.src = '../assets/broken-glass.png';
    document.getElementById('glass-7').disabled = true;
    document.getElementById('glass-8').disabled = true;
    document.getElementById('glass-9').disabled = false;
    document.getElementById('glass-10').disabled = false;
    if (tries <= 0) {
        endGame.classList.remove('hidden');
        resultMessage.classList.remove('hidden');
        resultMessage.textContent = 'You died, game over.';
        triesLeft.textContent = tries;
        document.getElementById('glass-9').disabled = true;
        document.getElementById('glass-10').disabled = true;
    } else {
        resultMessage.textContent = 'You made it across safely!';
        triesLeft.textContent = tries;
    }
});

glass9.addEventListener('click', () => {
    tries--;
    fake5.src = '../assets/broken-glass.png';
    document.getElementById('glass-9').disabled = true;
    document.getElementById('glass-10').disabled = true;
    if (tries <= 0) {
        endGame.classList.remove('hidden');
        resultMessage.classList.remove('hidden');
        resultMessage.textContent = 'You died, game over.';
        triesLeft.textContent = tries;
    } else {
        endGame.classList.remove('hidden');
        resultMessage.classList.remove('hidden');
        resultMessage.textContent = 'You made it across safely!';
        triesLeft.textContent = tries;
    }
});

glass10.addEventListener('click', () => {
    real5.src = '../assets/jumpglass.png';
    document.getElementById('glass-9').disabled = true;
    document.getElementById('glass-10').disabled = true;
    real1.src = '../assets/glass.png';
    real2.src = '../assets/glass.png';
    real3.src = '../assets/glass.png';
    real4.src = '../assets/glass.png';
    if (tries <= 0) {
        endGame.classList.remove('hidden');
        resultMessage.classList.remove('hidden');
        resultMessage.textContent = 'You died, game over.';
        triesLeft.textContent = tries;
    } else {
        resultMessage.textContent = 'You made it across safely!';
        triesLeft.textContent = tries;
        endGame.classList.remove('hidden');
        resultMessage.classList.remove('hidden');
    }
});

endGame.addEventListener('click', () => {
    const user = getUser();

    if (tries === 0) {
        user.gamesLost++;
        setUser(user);
    } else {
        user.games++;
        user.money -= 8000;
        setUser(user);
    }

    window.location.replace('../game-over');
});
