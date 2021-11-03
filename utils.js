export function generateUser(formData){
    // This function will return a userObject using data from formData
    return {
        number: Math.ceil(Math.random() * 467),
        money: toUSD(-24000),
        name: formData.get('name'),
        games: 0, 
        totalClicks: 0,
        gamesLost: 0,
    };
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}

export function getUser(){
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString); 
}

export function toUSD(number){
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });

}

export function userProfile() {
    const user = getUser();
    
    const money = document.getElementById('money-total');
    money.textContent = user.money;
    
    const number = document.getElementById('player-number');
    number.textContent = user.number;

    const games = document.getElementById('games-survived');
    games.textContent = user.games;

}

export function openUser(){
    const user = getUser();
    const name = document.getElementById('input-name');
    name.textContent = user.name;
    
    const number = document.getElementById('player-number');
    number.textContent = user.number;
}