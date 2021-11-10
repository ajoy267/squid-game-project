import { getUser, setUser, getOddEven } from '../utils.js';

const attemptSpan = document.getElementById('guesses-remain');
const guessBtn = document.getElementById('guess');
const resultSpan = document.getElementById('result-span');
const userGuessInput = document.getElementById('odd-even');
const returnHome = document.getElementById('return');
const correctGuessesSpan = document.getElementById('correct-guesses');

let totalAttempts = 2;
attemptSpan.textContent = totalAttempts;

let correctGuesses = 0;
correctGuessesSpan.textContent = correctGuesses;


guessBtn.addEventListener('click', ()=> {
    const thing = getOddEven();

    // i don't think this logic was quite right
    // oddGuess will always be 'odd' and evenGuess will always be 'even'
    // i clicked even, but thing was odd, but it still said i guess correctly

    const userGuess = userGuessInput.value;

    if (userGuess === thing) {
        correctGuesses++;
        correctGuessesSpan.textContent = correctGuesses;
        resultSpan.textContent = 'You guessed correct! Select odd or even and guess again!';
    } else {
        totalAttempts--;
        attemptSpan.textContent = totalAttempts;
        resultSpan.textContent = 'You guessed incorrect.. Select odd or even and guess again, but guess correctly!';
    } 

    if (totalAttempts <= 0) {
        returnHome.classList.remove('hidden');
        guessBtn.disabled = true;
    } else if (correctGuesses === 3) {
        returnHome.classList.remove('hidden');
        guessBtn.disabled = true;
    }
});

returnHome.addEventListener('click', () => {
    const user = getUser();

    if (totalAttempts === 0) {
        user.gamesLost++;
        setUser(user);
    } else if (correctGuesses === 3) {
        user.games++;
        user.money -= 8000;
        setUser(user);
    }
    window.location.replace('../map');
});