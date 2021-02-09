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
console.log(rwmoney);
