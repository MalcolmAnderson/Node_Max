class NameField {
    constructor(name) {
        const field = document.createElement('li');
        field.textContent = name;
        const nameListHook = document.querySelector('#names');
        nameListHook.appendChild(field);
    }
}

class NameGenerator {
    constructor() {
        const btn = document.querySelector('button');
        this.names = ['Max', 'Manu', 'Anna'];
        this.currentName = 0;
        // btn.addEventListener('click', ???);
        //btn.addEventListener('click', this.addName.bind(this));
        // btn.addEventListener('click', function () {
        //     this.addName(); // doesn't work
        // });
        btn.addEventListener('click', () => {
            this.addName(); // works
        });
    }

    addName() {
        console.log(this);
        const name = new NameField(this.names[this.currentName]);
        this.currentName++;
        if (this.currentName >= this.names.length) {
            this.currentName = 0;
        }
    }
}
const gen = new NameGenerator();

// source https://www.youtube.com/watch?v=Pv9flm-80vM&feature=youtu.be
