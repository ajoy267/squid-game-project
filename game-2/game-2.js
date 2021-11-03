const attemptSpan = document.getElementById('guesses-remain');
const dropDown = document.getElementById('odd-even');
const guessBtn = document.getElementById('guess');
const resultSpan = document.getElementById('result-span');
const odd = document.getElementById('odd');
const even = document.getElementById('even');

let totalAttempts = 2;

// let things = ['odd', 'even'];
// let thing = things[Math.floor(Math.random() * things.length)];


// console.log(thing);



guessBtn.addEventListener('click', ()=> {
    // check if userGuess === thing
    let things = ['odd', 'even'];
    let thing = things[Math.floor(Math.random() * things.length)];
    console.log(thing);

    const oddGuess = odd.value;
    const evenGuess = even.value;

    if (oddGuess === thing) {
        resultSpan.textContent = 'You guessed correct! Select odd or even and guess again!';
    }

    else if (oddGuess !== thing) {
        resultSpan.textContent = 'You guessed incorrect.. Select odd or even and guess again, but guess correctly!';
    } 

    else if (evenGuess === thing) {
        resultSpan.textContent = 'You guessed correct! Select odd or even and guess again!';
    }
    else if (evenGuess !== thing) {
        resultSpan.textContent = 'You guessed incorrect.. Select odd or even and guess again, but guess correctly!';
    }
    // if yes display win message --> else display loose message
    
    // if not correct decrease number of tries remaining

    // after 3 correct answers re-direct to map and +8K -- if 3 incorrect also redirect to map page
    
});