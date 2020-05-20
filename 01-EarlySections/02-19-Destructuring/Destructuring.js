const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const printName_1 = (personData) => {
    console.log(personData.name);
};

printName_1(person);

const printName_2 = ({ name }) => {
    console.log(name);
};

printName_2(person);

const { name, age } = person;
console.log(name, age);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby2, hobby1);
// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // }

// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// // console.log(hobbies);

// const copiedArray_1 = hobbies.slice(); // creates a copy
// const copiedArray_2 = [hobbies]; // creates an array that hobbies is nested inside of.
// const copiedArray_3 = [...hobbies]; // creates a copy of the array.
// // ... is called the "spread" operator

// console.log(copiedArray_1);
// console.log(copiedArray_2);
// console.log(copiedArray_3);
// console.log(hobbies);


// const copiedPerson = { ...person };
// console.log(copiedPerson);
// console.log(person);
// // Spread Operator (...) used to pull elements out of an array.
// // Rest Operator   (...) used to merge multiple arguments into an array.

// const toArray_1 = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// };
// console.log(toArray_1(1, 2, 3));
// console.log(toArray_1(1, 2, 3, 4)); // can't copy 4

// const toArray_2 = (...args) => {
//     return args;
// };
// console.log(toArray_2(1, 2, 3));
// console.log(toArray_2(1, 2, 3, 4)); // can't copy 4


