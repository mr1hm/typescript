import * as _ from 'lodash';

console.log('Hello, World!')

async function hello() {
  return 'world'
}


let lucky:any = 23;

lucky = '23';

type Style = 'bold' | 'italic' | 23;

let font: Style;



// Objects
interface Person {
  first: string,
  last: string,
  [key: string]: any
}

const person: Person = {
  first: 'Jeff',
  last: 'Delaney',
}

const person2: Person = {
  first: 'Usain',
  last: 'Bolt',
  fast: true
}

// Functions
function pow(x:number, y:number): void {
  Math.pow(x, y).toString();
}

pow(2, 2);


// Strong type an array

  // Strict. Array can only contain numbers, strings or booleans.
  type MyList = [number, string, boolean]

  // Optional. Array can or can not have these types.
  type MyList = [number?, string?, boolean?]

const arr: MyList = [];

arr.push(1);
arr.push('1');
arr.push(false);


// Generics

class Observable<T> {
  constructor(public value: T) {}
}

let x: Observable<number>;

let y: Observable<Person>;

let z = new Observable(23);
