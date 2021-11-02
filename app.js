import { setUser, generateUser } from './utils.js'
// import functions and grab DOM element

const userForm = document.getElementById('user-form');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(userForm);
    const user = generateUser(formData);

    setUser(user);
    window.location.replace('../opener');
});