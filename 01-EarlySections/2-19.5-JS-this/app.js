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
        btn.addEventListener('click', ???);
    }

    addName() {
        const name = new NameField("Max");
    }
}
const gen = new NameGenerator();

// source https://www.youtube.com/watch?v=Pv9flm-80vM&feature=youtu.be
