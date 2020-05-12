const person = {
    name: 'Max',
    age: 29,
    greet_01: () => { // is this case 'this.' will not work because it's global
        console.log('Hi, I am ' + this.name);
    },
    greet_02: function () {
        console.log('Hi, I am ' + this.name);
    },
    greet_03() {
        console.log('Hi, I am ' + this.name);
    }

};

person.greet_01();
person.greet_02();
person.greet_03();

