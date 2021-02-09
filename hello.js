var string = 'hello';
var number = 12;
var boolean = true;
var array = ['hey', 'hello', 'world'];
var object = { a: 1, b: 'hello' };
// tuples
var tuple = ['hi', 12];
// enumerable
var currencies;
(function (currencies) {
    currencies[currencies["rwf"] = 950] = "rwf";
    currencies[currencies["usd"] = 1] = "usd";
    currencies[currencies["ug"] = 1500] = "ug";
})(currencies || (currencies = {}));
var rwmoney = currencies.rwf;
console.log(rwmoney);
