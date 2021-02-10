const string: string = 'hello';
const number: number = 12;
const boolean: boolean = true;
const array: Array<string> = ['hey', 'hello', 'world'];
const object: object = { a: 1, b: 'hello' };

// tuples

const tuple: [string, number] = ['hi', 12];

// enumerable
enum currencies {
  rwf = 950,
  usd = 1,
  ug = 1500
}
let rwmoney: number = currencies.rwf;

// Any
let any: any = ['hello', 12];
any = object;

// Void Functions that return nothing

const nothing = (): void => console.log('no thing to return');

// never Never returns or throws

const never = (): never => {
  throw Error('Shit');
};

// interface

interface Ninja {
  name: string;
  age: number;
  black: boolean;
}

const ninjasInfo = (ninja: Ninja) => {
  console.log(`Hello ${ninja.name}`);
};
ninjasInfo({ name: 'Ninja', age: 2, black: false });

// Functions

const ninjasInfo2 = (ninja: Ninja): void => {
  console.log(`Hello ${ninja.name}`);
};
ninjasInfo({ name: 'Ninja', age: 2, black: false });

// Classes

class Gang {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(): string {
    return `Hello ${this.name}`;
  }
}
let mugisha = new Gang('Mugisha');
console.log(mugisha.greet());
