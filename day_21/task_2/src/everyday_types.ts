// Part 1

// Variable 1 - String
let username: string = "Erin";

// Variable 2 - Number
let age: number = 21;

// Variable 3 - Boolean
let login: boolean = true;

// Variable 4 - Null
let empty: null = null;

// Variable 5 - Undefined
let missing: undefined = undefined;

// Variable 6 - Symbol
let unique: symbol = Symbol("id");

// Variable 7 - BigInt
let large: bigint = 12345678901234567890n;

// Variable 8 - Any: replaced with a better type
// let userInput: any = "Hello";
// userInput = 100;
// userInput = true;

let input: string | number = "Hello";
input = 100;

// Variable 9 - Unknown
let response: unknown = "Success";
if (typeof response === "string") {
    console.log(response.toUpperCase());
}

// Variable 10 - Never
function throwError(message: string): never {
    throw new Error(message);
}

// Variable 11 - Void
function displayMessage(): void {
    console.log("Welcome!");
}

// Variable 12 - Object
let userDetails: object = {
    name: "Erin",
    age: 21
};

// Variable 13 - Number array
let numbers: number[] = [10, 20, 30];

// Variable 14 - String array
let subjects: Array<string> = [
    "JavaScript",
    "TypeScript",
    "Test"
];

// Variable 15 - Tuple
let coordinates: [number, number] = [10, 20];

// Variable 16 - Object with defined properties
let employee: {
    name: string;
    age: number;
} = {
    name: "Erin",
    age: 21
};

// Variable 17 - String or null
let myName: string | null = null;

// Variable 18 - Number or undefined
let score: number | undefined = undefined;

// Variable 19 - Function variable returning void
let callback: () => void = () => {
    console.log("Callback executed");
};

// Variable 20 - Function variable returning never
let fail: (message: string) => never = (message) => {
    throw new Error(message);
};



// Part 2

// Function 1
function formatName(name: string): string {
    return name.toUpperCase();
}

// Function 2
function calcTotal(price: number, quantity: number): number {
    return price * quantity;
}

// Function 3
function isEligible(age: number): boolean {
    return age >= 18;
}

// Function 4
function getFirstItem(items: string[]): string | undefined {
    return items[0];
}

// Function 5
function showMessage(message: string): void {
    console.log(message);
}



// Part 3

// Explicit return type omitted
// TypeScript infers: function add(a: number, b: number): number
function add(a: number, b: number) {
    return a + b;
}


// const vs let inference
const greeting = "Hello";

let message = "Hello";
type Greeting = typeof greeting;
let anotherGreeting: Greeting = "Hello";

// anotherGreeting = "Hi";



// PART 4
function processValue(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else {
        return value.toFixed(2);
    }
}



// Test
console.log(formatName(username));
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
