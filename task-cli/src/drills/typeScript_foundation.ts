console.log("TypeScript Foundations!");

//---------------------------
// 1) Basic Types¶
//---------------------------
// const greet = (name: string): string => {
//   return `Hello, ${name}!`;
// };
// console.log(greet("Developer"));

// const add = (a: number, b: number): number => {
//   return a + b;
// };
// console.log(add(2, 3));

// const isEven = (num: number): boolean => {
//   return num % 2 === 0;
// };

// console.log(isEven(5));

// let anyEx: any = "This can be anything";
// anyEx = 42;
// console.log(anyEx);
// anyEx = 4.5;
// console.log(anyEx);
// anyEx = { key: "value" };
// console.log(anyEx);

// let unknownEx: unknown = "Unknown type example";
// if (typeof unknownEx === "string") {
//   console.log(unknownEx.toUpperCase());
// }

// unknownEx = 100;
// if (typeof unknownEx === "number") {
//   console.log(unknownEx.toFixed(2));
// }

// let stringEx: string | null = null;
// stringEx = "Now I have a string value null";
// console.log(stringEx);


// let StringEx1: string | undefined = undefined;
// StringEx1 = "Now I have a string value undefined";
// console.log(StringEx1);

// let StringNullable: string | null | undefined = null;
// StringNullable = "Now I have a string value null or undefined";
// console.log(StringNullable);


// const numberArray: number[] = [1, 2, 3, 4, 5];
// console.log(numberArray); 

//---------------------------
// 2) Type Inference
//---------------------------

// Write a function that takes unknown and uses type assertion inside.
// const processValue = (input: unknown) => {
//   if (typeof input === "string") { 
//     const strLength = (input as string).length; 
//   }}
// processValue("Test String");

//what is type assertion in TypeScript?
// Type assertion in TypeScript is a way to inform the compiler about the specific type of a variable, 
// allowing developers to override the inferred type when they have more information about the variable's type than the compiler does.
// If the coder has more info about the type of a variable than TypeScript can infer, they can use type assertions to specify that type explicitly. right? yes or no?
// Yes, that's correct. Type assertions allow developers to specify a more precise type for a variable when they have additional knowledge about its type that the TypeScript compiler cannot infer on its own.
//example of type assertion in TypeScript

//Discuss: why are type assertions potentially unsafe?
// // Type assertions can be unsafe because they override the compiler's type checking, 
// potentially leading to runtime errors if the asserted type does not match the actual type of the value.


//---------------------------
// 3) Type Narrowing
//---------------------------

// let value: string | null;

// function typeNarrowingExample(value: string | number) {
//   if (typeof value === "string") {
//     console.log("String value:", value.toUpperCase());
//   } else {
//     console.log("Number value:", value.toFixed(2));
//   }
// }

//Use instanceof to check if an input is a Date.

// let createdAt: Date | string = new Date(); 

// if (createdAt instanceof Date) {
//   console.log("Date value:", createdAt.toISOString());
// }else {
//   console.log("String value:", createdAt.toUpperCase()); // solution is here make it uppercase
// }

// typeNarrowingExample("hello");
// typeNarrowingExample(42);

// let data: number [] = [1, 2, 3];
// if (Array.isArray(data)) {
//   console.log("Array length:", data.length);
// }else {
//   console.log("Number value:", data.toFixed(2));
// }

// doubt Use instanceof to check if an input is a Date.
//why narrowing arrays using Array.isArray?
// what is union types in TypeScript?


//---------------------------
// 5) Strict Mode Practice¶
//---------------------------

// let age: number;
// age = 25;
// console.log("Age:", age);

// const functionWithoutReturn = (): void => {
//   console.log("This function returns nothing.");
// }
// console.log(functionWithoutReturn());

// const functionWithReturn = (): number => {
//   return 42;
// }

// console.log("Function return value:", functionWithReturn());

//---------------------------
// 6) First Program in TypeScript¶
//---------------------------

// const hello = () => {
//   console.log("Hello from TypeScript!");
// } 

// const greetUser = (name: string): string => {
//   return `Hello, ${name}!`;
// } 
// console.log(greetUser("typeScript User"));



// const greetUserWithAge = (name: string, age?: number): void => {
//   if (age !== undefined) {
//     console.log(`${name} is ${age} years old`);
//   } else {
//     console.log(`${name}'s age is not provided`);
//   }
// };

// greetUserWithAge("Alice", 20); 
// greetUserWithAge("Bob"); 

//---------------------------
// 7) Type Narrowing Practice¶
//---------------------------

// function formatInput(input: string | number | boolean): void {
//   if (typeof input === "string") {
//     console.log("String input:", input.toUpperCase());
//   } else if (typeof input === "number") {
//     console.log("Number input:", input.toFixed(2));
//   } else if (typeof input === "boolean") {
//     console.log("Boolean input:", input ? "TRUE" : "FALSE");
//   } 
//   else {
//     console.log("Unsupported type");
//   }
// }

// formatInput("hello world");
// formatInput(123.456);
// formatInput(true);
// formatInput(false);

//---------------------------
// 8) Array Type Mastery¶
//---------------------------

// const number: number[] = [1, 2, 3];
// const names: Array<string> = ["Alice", "Bob"];

// const mixed: (number | string)[] = [1, "Alice", 2, "Bob"];

// function getFirstElement(arr: string[]): void {
//   const first = arr[0];

//   if (first !== undefined) {
//       console.log(first.toUpperCase());
//   } else {
//     console.log("Array is empty");
//   }

// }
// getFirstElement(["apple", "banana", "cherry"]);


//---------------------------
// 9) Object Shape Practice¶
//---------------------------

// const user: { name: string; age: number; active: boolean } = {
//   name: "John",
//   age: 30,
//   active: true
// };


// user.name = "Jane";
// user.age = 28;
// user.active = false;

// console.log(user);

// const userOptional: { name: string; age?: number; active: boolean } = {
//   name: "Alice",
//   active: true
// };

// if (userOptional.age !== undefined) {
//   console.log(`Age is provided: ${userOptional.age}`);
// }else {
//   console.log("Age is not provided");
// }
// console.log(userOptional);

//---------------------------
// 10) Unknown vs Any Practice¶
//---------------------------

// let valueAny: any = "hello";

// console.log(valueAny.toUpperCase());
// console.log(valueAny.toFixed?.(2));

// let valueUnknown: unknown = "hello";

// if (typeof valueUnknown === "string") {
//   console.log(valueUnknown.toUpperCase());
// }

// valueUnknown = 42;

// if (typeof valueUnknown === "number") {
//   console.log(valueUnknown.toFixed(2));
// }



// const processAny = (input: any): void => {
//   console.log(input.toUpperCase());
// };

// const processUnknown = (input: unknown): void => {
//   if (typeof input === "string") {
//     console.log(input.toUpperCase());
//   } else {
//     console.log("Not a string");
//   }
// };

// processAny(10);       // ⚠️ runtime crash
// processUnknown(10);   // ✅ safe


