//Call/bind/apply
function Store(item, paymentType) {
    this.item = item;
    this.paymentType = paymentType;
}

//Call - Changing the Values of a Function
//Let's say we have multiple stores...

function flagshipStore(area) {
    Store.call(this, "Kit Kat Bar", "cash");
    this.area = area;
    console.log(`Flagship Store Info: `, this) //will repeatedly console.log new instances of the function name
}

//Add the info we want to see...
const newArea = new flagshipStore("Area 1") //call a new instance of the store, reference the values called upon, and add an new value to the area property

const construction = new flagshipStore("Under Development")


//Class Exercise: The manager of the store needs you to create a function that automatically defines the price of new items. The name of the function should be "fixedPrice", use the price as the parameter, call the Store function (you can use different information), use the this keyword and send a console.log that will reflect a set price of "1.00".

//Add the info we want to see...

//Answer:
/*
function fixedPrice(price) {
    Store.call(this, "An Item", "payment method");
    this.price = price;
    console.log(`Fixed Price:`, this)
}

const newPrice = new fixedPrice("1.00")
*/
//-----------------------------------
let arr = ["teddy bear","credit card"] //an array of goodies and payment method in the cart

function cartFunctionality(test) {
    //Store.apply(this, ["teddy bear","credit card"]) //Syntax with array literal
    //Store.apply(this, new Array("teddy bear","credit card")) //Syntax with array object construction
    Store.apply(this, arr) //reference the array
    this.test = test;
    console.log(`Testing cart functionality...`, this)
}

const newTest = new cartFunctionality("Hello World");

//Class Exercise: The manager of the store needs you to create another test cart set in an array that has "cookies" for an employee care package and the "company card" so supervisors can pay for the treat. You can use the cartFunctionality function to do the work. Make sure to trigger the test. :D

//Answer:
/*
let employeeCare = ["cookies","company card"];
function cartFunctionality(test) {
    Store.apply(this, employeeCare)
    this.test = test;
    console.log(`Testing cart functionality...`, this)
}

const employeeLove = new cartFunctionality("Manager task done")

*/
//-----------------------------------

//Binding Class Exercise: we're going to make a magic message for the user when they checkout. 

//1. Make an object called cartMessage with key/value pair of userMessage and a string that says "Hello user" and a function called getMessage that utilizes the this keyword to capture the userMessage. Console.log and return the variable.

//2. Have a secondary function with the sole job of logging the result from the first one. Call this function msgLogger. There should be a message that says ", are you all set and ready to checkout?"

//3. Bind the 2nd function to the first object. Use the variable name logUser.

//4. Invoke or call the function to do their job!!!

//Answer: 
/*
const cartMessage = {
    userMessage: "Hello user",
    getMessage: function() {
        let text = this.userMessage;
    }
} //Make an object called cartMessage with key/value pair of userMessage and a string that says "Hello user" and a function called getMessage that utilizes the this keyword to capture the userMessage. Console.log and return the variable.

const msgLogger = function() {// Have a secondary function with the sole job of logging the result from the first one.
    console.log(this.getMessage() + ", are you all set and ready to checkout?") //There should be a message that says ", are you all set and ready to checkout?"
}

const logUser = msgLogger.bind(cartMessage); //Bind the 2nd function to the first object.

logUser(); // Invoke or call the function to do their job!!!
*/



//Binding 

//1. Define the object first with key/value pairs and a function that utilizes the this keyword
const pokemonConverter = {
    yusufPokemon: "Wobbuffet",
    kitPokemon: "Charmander",
    getPokeName: function() {
        let foo = this.yusufPokemon;
        let bar = this.kitPokemon;
        //console.log(foo, bar);
        return foo;
        //return bar;
    }
}
//https://pvpoke.com/battle/ - Wobbuffet would win!

//2. Have a secondary function with the sole job of logging the result from the first one.
const logger = function() {
    //console.log(this.getPokeName() + ', I choose you! Goooo!')
}

//3. Bind the 2nd function to the first object

const logPokemon = logger.bind(pokemonConverter) // creates new object and binds pokemon. 'this' of pokemon === pokemon now

//4. Invoke or call the function to do their job!!!
logPokemon();

//Call w/o arguments
/*
const newDev = (obj) => console.log(obj);
function detectDev () {
    this.dev = newDev;
    console.log(`Developer ${this.dev} is detected on ${this}`);
    //Developer (obj) => console.log(obj) is detected on [object global]
}

detectDev.call();
*/


//Creating a Constructor

/*
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("John", 25);

// Using structuredClone() to create a deep copy
const clonedPerson1 = structuredClone(person1);

// Displaying the original and cloned objects
console.log("Original Object:");
console.log(person1); //Person {name: 'John', age: 25}

console.log("Cloned Object:");
console.log(clonedPerson1); //{name: 'John', age: 25}
*/


//Using an Object Literal
/*
const person2 = {
    name: "Jane",
    age: 30
};

// Using structuredClone() to create a deep copy
const clonedPerson2 = structuredClone(person2);

// Displaying the original and cloned objects
console.log("Original Object:");
console.log(person2); //{name: 'Jane', age: 30}

console.log("Cloned Object:");
console.log(clonedPerson2); //{name: 'Jane', age: 30}
*/

