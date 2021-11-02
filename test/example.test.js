// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { setUser, getUser } from '../utils.js';

const test = QUnit.test;

test('setUser should save userObject to localStorage', (expect) => {
    localStorage.removeItem('USER');

    const expected = {
        number: 2,
        money: -24000,
        name:'pindy'
    };

    setUser(expected);

    const actual = JSON.parse(localStorage.getItem('USER'));
    expect.deepEqual(actual, expected);
});

test('getUser should retrieve userObject from LS', (expect)=> {
    localStorage.removeItem('USER');

    const expected = {
        number: 2,
        money: -24000,
        name:'pindy'
    };
    setUser(expected);

    const actual = getUser();

    expect.deepEqual(actual, expected);
});