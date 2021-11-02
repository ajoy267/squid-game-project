export function generateUser(formData){
    // This function will return a userObject using data from formData
    return {
        number: Math.ceil(Math.random() * 467),
        money: toUSD(-24000),
        name: formData.get('name')
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