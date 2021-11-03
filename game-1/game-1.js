console.log('hello world');
const light = document.getElementById('light');
// const imgObj = document.getElementById('player-img');
const runBtn = document.getElementById('run-btn');
let imgObj = document.getElementById('player-img');
// write a function for a button that on click will -->
// shift an img to the right each time the button is clicked.
// --If button clicked while light red user lose/reset
imgObj = null;

function init() {
    imgObj = document.getElementById('player-img');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}

function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 16 + 'px';
}
window.onload = init;
runBtn.addEventListener('click', () => {
    moveRight();
    console.log('clicks');
});