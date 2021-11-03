import { userProfile, getUser, setUser } from '../utils.js';

const startButton = document.getElementById('start-button');

userProfile();

startButton.addEventListener('click', () => {
    const user = getUser();
    
    user.totalClicks++;
    
    setUser(user);
    
    const updatedUser = getUser();
    
    if (updatedUser.totalClicks <= 1){
        window.location.replace('../game-1');
    } else if (updatedUser.totalClicks === 2) {
        window.location.replace('../game-2');
    } else {
        window.location.replace('../game-3');
    }
});