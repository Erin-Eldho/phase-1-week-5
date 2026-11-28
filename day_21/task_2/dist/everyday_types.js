"use strict";
// Part 1
// Variable 1 - String
let username = "Erin";
// Variable 2 - Number
let age = 21;
// Variable 3 - Boolean
let login = true;
// Variable 4 - Null
let empty = null;
// Variable 5 - Undefined
let missing = undefined;
// Variable 6 - Symbol
let unique = Symbol("id");
// Variable 7 - BigInt
let large = 12345678901234567890n;
// Variable 8 - Any: replaced with a better type
// let userInput: any = "Hello";
// userInput = 100;
// userInput = true;
let input = "Hello";
input = 100;
// Variable 9 - Unknown
let response = "Success";
if (typeof response === "string") {
    console.log(response.toUpperCase());
}
// Variable 10 - Never
function throwError(message) {
    throw new Error(message);
}
// Variable 11 - Void
function displayMessage() {
    console.log("Welcome!");
}
// Variable 12 - Object
let userDetails = {
    name: "Erin",
    age: 21
};
// Variable 13 - Number array
let numbers = [10, 20, 30];
// Variable 14 - String array
let subjects = [
    "JavaScript",
    "TypeScript",
    "Test"
];
// Variable 15 - Tuple
let coordinates = [10, 20];
// Variable 16 - Object with defined properties
let employee = {
    name: "Erin",
    age: 21
};
// Variable 17 - String or null
let myName = null;
// Variable 18 - Number or undefined
let score = undefined;
// Variable 19 - Function variable returning void
let callback = () => {
    console.log("Callback executed");
};
// Variable 20 - Function variable returning never
let fail = (message) => {
    throw new Error(message);
};
// Part 2
// Function 1
function formatName(name) {
    return name.toUpperCase();
}
// Function 2
function calcTotal(price, quantity) {
    return price * quantity;
}
// Function 3
function isEligible(age) {
    return age >= 18;
}
// Function 4
function getFirstItem(items) {
    return items[0];
}
// Function 5
function showMessage(message) {
    console.log(message);
}
// Part 3
// Explicit return type omitted
// TypeScript infers: function add(a: number, b: number): number
function add(a, b) {
    return a + b;
}
// const vs let inference
const greeting = "Hello";
let message = "Hello";
let anotherGreeting = "Hello";
// anotherGreeting = "Hi";
// PART 4
function processValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value.toFixed(2);
    }
}
// Test
console.log(formatName("Erin"));
console.log(calcTotal(100, 3));
console.log(isEligible(25));
console.log(getFirstItem(["JavaScript", "TypeScript"]));
showMessage("Everyday Types");
console.log(add(10, 20));
console.log(greeting);
console.log(message);
console.log(anotherGreeting);
console.log(processValue("typescript"));
console.log(processValue(125.5));
