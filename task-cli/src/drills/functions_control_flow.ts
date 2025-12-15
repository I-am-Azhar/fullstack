console.log("----- Functions and Control Flow Drill -----");

//-------------------------------------------------
// 1) Function Basics
//-------------------------------------------------

// const add = (a: number, b: number): number => {
//   return a + b; 
// };

// console.log(add(2, 3));


// const logMessage = (msg: string): void => {
//   console.log(msg); 
// };


// logMessage("Hello TypeScript");

//-------------------------------------------------
// 2) Optional & Default Parameters
//-------------------------------------------------

// Optional parameter example
// const greet = (name: string, age?: number): void => {
//   console.log(name, age);
// };

// greet("Azhar");
// greet("Azhar", 25);

// Default parameter example
// const greetWithDefault = (name: string, age: number = 18): void => {
//   console.log(`${name} is ${age} years old`);
// };

// greetWithDefault("John");
// greetWithDefault("John", 30);


//-------------------------------------------------
// 3) Rest Parameters 
//-------------------------------------------------

// const sumAll = (...nums: number[]): number => {
//   let total = 0;

//   for (let n of   nums) {
//     total += n;
//   }

//   return total;
// };

// console.log(sumAll(1, 2, 3));
// console.log(sumAll(5, 10, 15));



// const sumMixed = (...values: (number | string)[]): number => {
//   let total = 0;

//   for (let v of values) {
//     if (typeof v === "number") {
//       total += v;
//     } else {
//       total += Number(v); // converting string to number
//     }
//   }

//   return total;
// };

// console.log(sumMixed(1, "2", 3));


//-------------------------------------------------
// 4) Function Overloading
//-------------------------------------------------

// function toArray(x: string): string[];
// function toArray(x: number): number[];

// function toArray(x: string | number) {
//   return [x];
// }

// console.log(toArray("hello"));
// console.log(toArray(42));

// toArray(true); 

//-------------------------------------------------
// 5) Union Types in Functions
//-------------------------------------------------

// const formatValue = (input: string | number): string => {
//   if (typeof input === "string") {
//     return input.toUpperCase();
//   } else {
//     return input.toFixed(2);
//   }
// };

// console.log(formatValue("typescript"));
// console.log(formatValue(10.456));

//-------------------------------------------------
// 6) Control Flow (if, while, switch)
//-------------------------------------------------

// const isEven = (n: number): boolean => {
//   return n % 2 === 0;
// };

// if (isEven(4)) {
//   console.log("Even number");
// } else {
//   console.log("Odd number");
// }

// let count = 3;
// while (count > 0) {
//   console.log("Count:", count);
//   count--;
// }


//-------------------------------------------------
// 7) Higher-Order Functions
//-------------------------------------------------

// const applyTwice = (fn: (x: number) => number, value: number): number => {
//   return fn(fn(value));
// };

// console.log(applyTwice(n => n * 2, 5));

// applyTwice((n: string) => n, 5); // TS error

//-------------------------------------------------
// 8) Arrow Functions + Array Methods
//-------------------------------------------------

// const square = (n: number): number => {
//   return n * n;
// };

// const numbers = [1, 2, 3, 4];

// const squared = numbers.map(n => n * n);
// console.log(squared);

// const evenNumbers = numbers.filter(n => n % 2 === 0);
// console.log(evenNumbers);

//-------------------------------------------------
// 9) Function Type Annotations
//-------------------------------------------------

// type Calculator = (a: number, b: number) => number;

// const addCalc: Calculator = (x, y) => x + y;
// const subCalc: Calculator = (x, y) => x - y;

// console.log(addCalc(5, 3));
// console.log(subCalc(5, 3));

//-------------------------------------------------
// 10) Return Types: unknown, void, never
//-------------------------------------------------

// unknown input example
// const processData = (data: unknown): string => {
//   if (typeof data === "string") {
//     return data.toUpperCase();
//   }

//   if (typeof data === "number") {
//     return data.toString();
//   }

//   return "Unsupported type";
// };

// console.log(processData("hello"));
// console.log(processData(10));
// console.log(processData(true));

// void return
// const saveData = (): void => {
//   console.log("Data saved");
// };

// saveData();

// const crashApp = (msg: string): never => {
//   throw new Error(msg);
// };

// crashApp("Something went wrong");


//-------------------------------------------------
// 11) Callback Function Typing
//-------------------------------------------------

// const processArray = (arr: number[], cb: (n: number) => number): number[] => {
//   return arr.map(cb);
// };

// console.log(processArray([1, 2, 3], n => n * 2));


