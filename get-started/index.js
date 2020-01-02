console.log('Hello, World!');
async function hello() {
    return 'world';
}
let lucky = 23;
lucky = '23';
let font;
const person = {
    first: 'Jeff',
    last: 'Delaney',
};
const person2 = {
    first: 'Usain',
    last: 'Bolt',
    fast: true
};
// Functions
function pow(x, y) {
    Math.pow(x, y).toString();
}
pow(2, 2);
const arr = [];
arr.push(1);
arr.push('1');
arr.push(false);
// Generics
class Observable {
    constructor(value) {
        this.value = value;
    }
}
let x;
let y;
let z = new Observable(23);
