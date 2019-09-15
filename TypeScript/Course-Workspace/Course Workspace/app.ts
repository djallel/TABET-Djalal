console.log("It works!");
function multiply(first:number,seconde:number):number {
    return first*seconde;

}
let myMultiply=multiply;
console.log(myMultiply(2,3));
type Complex={money:number, deposit: (val:number)=>void}
let bankAccount :Complex= {
    money: 2000,
    deposit(value:number) {
        this.money += value;
    }
};

let myself :{name:string, bankAccount: Complex, hobbies: string[]}= {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

/**/
let myName: any="Max";
let myAge : number=27;
myName=30;
/*let & const*/
let variable="Test";
console.log(variable);
variable="Another value";
console.log(variable);

const maxLevels=100;
console.log(maxLevels);
//maxLevels=99; // ne marchera pas par e que c'est une constante

/*Block scope*/
function reset(){
    let variable=null;
    console.log(variable);
}
reset();
console.log("/*Block scope*/");
console.log(variable);

/*arrow function*/
console.log("ARROW FUNCTIONS");
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;

};
console.log(addNumbers(10,3));
const multiplyNumbers= ( number1:number,number2:number)=> number1*number2;
console.log(multiplyNumbers(2,3));
//fonction with no argument
const greet = ()=> {
    console.log("Hello!");
};
greet()
// ou bien tu fais ça à la place
const greetFriend = tonArgument => console.log(tonArgument);
greetFriend("Manu");
//Defaults Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10): number => {
    while (start>0){
        start--;
    }
    console.log("Done!",start);
    return start;

};
countdown(20);
countdown();

//Rest & Spread
console.log("Rest & Spread");
const numbers= [1,10,99,-5];
const numbers1= [2,20,199,-2];
const numbers2= [3,30,299,-3];
console.log(Math.max(33,99,10,-3));
console.log(...numbers,...numbers1,...numbers2);
let merged = { ...numbers,...numbers1,...numbers2 };
console.log("MERGED" ,merged);
console.log("...MERGED" ,...merged);
let merged2= { ...numbers,...numbers1,...numbers2,z: 3, y: 4 }; // You can also override existing properties and add new ones:
console.log("...MERGED2" ,...merged2);
console.log("...MERGED2" ,...merged2);

//Rest Operator
function makeArray(name:string, ...args:number[]){
    return args;
}
console.log(makeArray("Max",1,2,6));

//Destructuring arrays
console.log("DESTRUCTURING");
const myHobbies = ["Cooking","Sports"];
const hobby1 = myHobbies[0];
const hobby2 = myHobbies[1]; // en temps normale on déclare comme ça une constante
console.log(myHobbies[0],myHobbies[1]);
const [hobby3,hobby4]= myHobbies;
console.log(hobby3,hobby4);

//Destructuring object
const userData={userName:"Max",age:27,c:"9iw"};
const { userName,age}= userData; //This creates new variables userName and age from o.userName and o.age. Notice that you can skip c if you don’t need it.
console.log("Destructuring object",userName,age);

//Template Literals
const userName1 = "Max";
const greeting = `ici je peux inclure le user name en faisant un $ : ${userName1}, et ça c'est cool`;
console.log(greeting);

// Exercise 1 - Maybe use an Arrow Function?
let double = (value) => value * 2;
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
let greet1 = (name="anna2")=>  {
    if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
greet1();
greet1("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
const numbers5 = [-3, 33, 38, 5];
console.log(Math.min( ...numbers5));

// Exercise 4 - I have to think about Exercise 3 ...
const newArray = [55, 20];
newArray.push(...numbers5);
console.log(...newArray);

// Exercise 5 - That's a well-constructed array.
const testResults = [3.89, 2.99, 1.38];
const [result1,result2,result3]= testResults;
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
const scientist = {firstName: "Will", experience: 12};
const {firstName,experience}=scientist;
console.log(firstName, experience);