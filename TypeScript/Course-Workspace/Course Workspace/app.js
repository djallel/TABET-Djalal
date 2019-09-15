var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("It works!");
function multiply(first, seconde) {
    return first * seconde;
}
var myMultiply = multiply;
console.log(myMultiply(2, 3));
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
/**/
var myName = "Max";
var myAge = 27;
myName = 30;
/*let & const*/
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
//maxLevels=99; // ne marchera pas par e que c'est une constante
/*Block scope*/
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log("/*Block scope*/");
console.log(variable);
/*arrow function*/
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(2, 3));
//fonction with no argument
var greet = function () {
    console.log("Hello!");
};
greet();
// ou bien tu fais ça à la place
var greetFriend = function (tonArgument) { return console.log(tonArgument); };
greetFriend("Manu");
//Defaults Parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
    return start;
};
countdown(20);
countdown();
//Rest & Spread
console.log("Rest & Spread");
var numbers = [1, 10, 99, -5];
var numbers1 = [2, 20, 199, -2];
var numbers2 = [3, 30, 299, -3];
console.log(Math.max(33, 99, 10, -3));
console.log.apply(console, numbers.concat(numbers1, numbers2));
var merged = __assign({}, numbers, numbers1, numbers2);
console.log("MERGED", merged);
console.log.apply(console, ["...MERGED"].concat(merged));
var merged2 = __assign({}, numbers, numbers1, numbers2, { z: 3, y: 4 }); // You can also override existing properties and add new ones:
console.log.apply(// You can also override existing properties and add new ones:
console, ["...MERGED2"].concat(merged2));
console.log.apply(console, ["...MERGED2"].concat(merged2));
//Rest Operator
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Max", 1, 2, 6));
//Destructuring arrays
console.log("DESTRUCTURING");
var myHobbies = ["Cooking", "Sports"];
var hobby1 = myHobbies[0];
var hobby2 = myHobbies[1]; // en temps normale on déclare comme ça une constante
console.log(myHobbies[0], myHobbies[1]);
var hobby3 = myHobbies[0], hobby4 = myHobbies[1];
console.log(hobby3, hobby4);
//Destructuring object
var userData = { userName: "Max", age: 27, c: "9iw" };
var userName = userData.userName, age = userData.age; //This creates new variables userName and age from o.userName and o.age. Notice that you can skip c if you don’t need it.
console.log("Destructuring object", userName, age);
//Template Literals
var userName1 = "Max";
var greeting = "ici je peux inclure le user name en faisant un $ : " + userName1 + ", et \u00E7a c'est cool";
console.log(greeting);
// Exercise 1 - Maybe use an Arrow Function?
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
var greet1 = function (name) {
    if (name === void 0) { name = "anna2"; }
    if (name === undefined) {
        name = "Max";
    }
    console.log("Hello, " + name);
};
greet1();
greet1("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers5 = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers5));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push.apply(newArray, numbers5);
console.log.apply(console, newArray);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
//# sourceMappingURL=app.js.map