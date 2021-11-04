const andrewImg = document.getElementById('andrew-img');
const indyImg = document.getElementById('indy-img');
const kevinImg = document.getElementById('kevin-img');
const phoenixImg = document.getElementById('phoenix-img');

andrewImg.addEventListener('click', () => {
    andrewImg.src = '../assets/andrew.png';
});
indyImg.addEventListener('click', () => {
    indyImg.src = '../assets/indy.png';
});
kevinImg.addEventListener('click', () => {
    kevinImg.src = '../assets/kevin.png';
});
phoenixImg.addEventListener('click', () => {
    phoenixImg.src = '../assets/phoenix.png';
});