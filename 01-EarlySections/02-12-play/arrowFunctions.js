const name = 'Max';
let age = 29;
const hasHobbies = true;

//name = 'Maximilian';

age = 30;


// Arrow function v2
const add_v2 = (a, b) => a + b;

// Arrow function v1
const add_v1 = (a, b) => {
    return a + b;
}

// Arrow funcion v0 (not an arrow function)
const add_v0 = function (a, b) {
    return a + b;
}

// Arrow function
const summarizeUser_03 = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies ' +
        userHasHobby
    );
}


// Anonymous function
const summarizeUser_02 = function (userName, userAge, userHasHobby) {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies ' +
        userHasHobby
    );
}

// Named function
function summarizeUser_01(userName, userAge, userHasHobby) {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies ' +
        userHasHobby
    );
}

console.log(summarizeUser(name, age, hasHobbies));