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
// Any
var any = ['hello', 12];
any = object;
// Void Functions that return nothing
var nothing = function () { return console.log('no thing to return'); };
// never Never returns or throws
var never = function () {
    throw Error('Shit');
};
var ninjasInfo = function (ninja) {
    console.log("Hello " + ninja.name);
};
ninjasInfo({ name: 'Ninja', age: 2, black: false });
// Functions
var ninjasInfo2 = function (ninja) {
    console.log("Hello " + ninja.name);
};
ninjasInfo({ name: 'Ninja', age: 2, black: false });
// Classes
var Gang = /** @class */ (function () {
    function Gang(name) {
        this.name = name;
    }
    Gang.prototype.greet = function () {
        return "Hello " + this.name;
    };
    return Gang;
}());
var mugisha = new Gang('Mugisha');
console.log(mugisha.greet());
