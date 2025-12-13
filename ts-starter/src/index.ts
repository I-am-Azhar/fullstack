// =======================
// DRILL 1: Hello World (TypeScript Basics)
// =======================

// function greet(name: string) {
//   return "Hello," + name;
// }

// console.log(greet("TypeScript"));


// =======================
// DRILL 2: Strict Typing & Function Safety
// =======================

// function getlength(value: string) {
//   return value.length;
// }

// console.log(getlength("10"));


// =======================
// DRILL 3: Scripts Discipline (Type Checking)
// =======================

// function sum(a: number, b: number) {
//   return a + b;
// }

// console.log(sum(5, 10));


// =======================
// DRILL 4: Debugging Mastery (setTimeout & Breakpoints)
// =======================

// function greet(name: string) {
//   return "Hello " + name;
// }

// console.log("Before timeout");

// setTimeout(() => {
//   const message = greet("Azhar");
//   console.log(message);
// }, 1000);

// console.log("After timeout");


// =======================
// DRILL 5: Module Hygiene (Runtime Import)
// =======================

// import dayjs from "dayjs";

// const now = dayjs();
// console.log(now.format("YYYY-MM-DD"));


// =======================
// DRILL 6: Editor Ergonomics (Rename, Refactor)
// =======================

// function calculateAmount(price: number, quantity: number) {
//   return price * quantity;
// }

// const total = calculateAmount(10, 2);
// console.log(total);

// const basePrice = 10;
// const basePriceWithTax = basePrice * 1.18;
// const basePriceWithoutTax = basePrice * 0.82;

// const result = (10 * 2) + (10 * 0.18);
// console.log(result);


// =======================
// DRILL 7: Env & Secrets (dotenv)
// =======================

// import "dotenv/config";

// const appName = process.env.APP_NAME;
// const port = process.env.PORT;

// console.log("App:", appName);
// console.log("Port:", port);
