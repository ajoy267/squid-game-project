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

const row1 = document.querySelectorAll('.row-1');

const figure = document.getElementById('figure');

// const triesLeft = document.getElementById('tries-left');
// triesLeft.append(tries);
// let tries = 3;

document.getElementById('glass-3').disabled = true;
document.getElementById('glass-4').disabled = true;
document.getElementById('glass-5').disabled = true;
document.getElementById('glass-6').disabled = true;
document.getElementById('glass-7').disabled = true;
document.getElementById('glass-8').disabled = true;
document.getElementById('glass-9').disabled = true;
document.getElementById('glass-10').disabled = true;


glass1.addEventListener('click', () => {
    real1.src = '../assets/jumpglass.png'
    document.getElementById('glass-1').disabled = true;
    document.getElementById('glass-2').disabled = true;
    document.getElementById('glass-3').disabled = false;
    document.getElementById('glass-4').disabled = false;
    figure.src = '../assets/transparent.png';
});

glass2.addEventListener('click', ()=> {
    fake1.src = '../assets/broken-glass.png'
    document.getElementById('glass-1').disabled = true;
    document.getElementById('glass-3').disabled = false;
    document.getElementById('glass-4').disabled = false;
    figure.src = '../assets/transparent.png';
});

glass3.addEventListener('click', ()=> {
    fake2.src = '../assets/broken-glass.png'
    document.getElementById('glass-4').disabled = true;
    document.getElementById('glass-5').disabled = false;
    document.getElementById('glass-6').disabled = false;
});

glass4.addEventListener('click', ()=> {
    real2.src = '../assets/jumpglass.png'
    document.getElementById('glass-4').disabled = true;
    document.getElementById('glass-5').disabled = false;
    document.getElementById('glass-6').disabled = false;
    real1.src = '../assets/glass.png';
});

glass5.addEventListener('click', ()=> {
    fake3.src = '../assets/broken-glass.png'
    document.getElementById('glass-6').disabled = true;
    document.getElementById('glass-7').disabled = false;
    document.getElementById('glass-8').disabled = false;
});

glass6.addEventListener('click', ()=> {
    real3.src = '../assets/jumpglass.png'
    document.getElementById('glass-5').disabled = true;
    document.getElementById('glass-7').disabled = false;
    document.getElementById('glass-8').disabled = false;
    real1.src = '../assets/glass.png';
    real2.src = '../assets/glass.png';
});

glass7.addEventListener('click', ()=> {
    real4.src = '../assets/jumpglass.png'
    document.getElementById('glass-8').disabled = true;
    document.getElementById('glass-9').disabled = false;
    document.getElementById('glass-10').disabled = false;
    real1.src = '../assets/glass.png';
    real2.src = '../assets/glass.png';
    real3.src = '../assets/glass.png';
});

glass8.addEventListener('click', ()=> {
    fake4.src = '../assets/broken-glass.png'
    document.getElementById('glass-7').disabled = true;
    document.getElementById('glass-9').disabled = false;
    document.getElementById('glass-10').disabled = false;
});

glass9.addEventListener('click', ()=> {
    fake5.src = '../assets/broken-glass.png'
    document.getElementById('glass-10').disabled = true;
});

glass10.addEventListener('click', ()=> {
    real5.src = '../assets/jumpglass.png'
    document.getElementById('glass-9').disabled = true;
    real1.src = '../assets/glass.png';
    real2.src = '../assets/glass.png';
    real3.src = '../assets/glass.png';
    real4.src = '../assets/glass.png';
});
