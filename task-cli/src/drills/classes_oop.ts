console.log("=== Classes and OOP in TypeScript ===");

//---------------------------
// 1) Class Basics
//---------------------------

// class Counter {
//   private count: number;

//   constructor(initialCount: number = 0) {
//     this.count = initialCount;
//   } 

//   inc() {
//     this.count++;
//   }
//   dec() {
//     this.count--;
//   } 
//   value() {
//     return this.count;
//   }
// }

// const c = new Counter(0);
// console.log(c.value());
// Counter
// c.inc();
// c.dec();
// c.dec();
// console.log(c.value()); 


//---------------------------
// 2) Access Modifiers and private fields
//---------------------------

// class Demo {
//   public name: string;
//   protected age: number;
//   private secret: string;

//   constructor(name: string, age: number, secret: string) {
//     this.name = name;
//     this.age = age;
//     this.secret = secret;
//   }  
// }

// const demo = new Demo("Alice", 30, "loves TypeScript");
// console.log(demo.name); // Accessible
// // console.log(demo.age); // Error: Property 'age' is protected
// // console.log(demo.secret); // Error: Property 'secret' is private

// class Vault {
//   #secretCode: string;

//   constructor(secretCode: string) {
//     this.#secretCode = secretCode;
//   }
// }

// const vault = new Vault("12345");
// // console.log(vault.#secretCode); // Error: Private field


//---------------------------
// 3) Getters and Setters
//---------------------------

// class Counter {
//   private count: number = 0;
//   private step: number = 1;

//   set Step(value: number) {
//     if (value <= 0) {
//       throw new Error("Step must be positive");
//     }
//     this.step = value;
//   }

//   get isZero(): boolean {
//     return this.count === 0;
//   }
// }

// const counter = new Counter();
// console.log(counter.isZero);
// counter.Step = 5;
// // counter.Step = -3; // Error: Step must be positive
// console.log(counter.isZero);


//---------------------------
// 4) Static members and factory functions
//---------------------------

// class counter {
//   static created = 0;

//   constructor() {
//     counter.created++;
//   }
// }


// function makeCounter(initial: 0){
//   let count = initial;

//   return {
//     inc() {
//       count++;
//     },
//   value(){
//     return count;
//   }
// }
// }


//---------------------------
// 5) Inheritance vs composition
//---------------------------

// class Counter {
//   protected count: number;
//   constructor(initialCount: number = 0) {
//     this.count = initialCount;
//   }
// }

// class BoundedCounter extends Counter {
//   constructor(private max: number) {
//     super(0);
//   }
// }

// class BoundedCounrer {
//   constructor(
//     private counter: Counter,
//     private max: number
//   ){}
  
//   inc() {
//     if (this.counter['count'] < this.max) {
//       this.counter['count']++;
//     }
//   }
// }


//---------------------------
// 6) Abstract Constracts
//---------------------------

// abstract class Store<T> {
//   abstract get(key: string): T | undefined;
//   abstract set(key: string, value: T): void;
// }

// class MemoryStore<T> extends Store<T> {
//   private map = new Map<string, T>();

//   get(key: string): T | undefined {
//     return this.map.get(key);
//   }
//   set(key: string, value: T): void {
//     this.map.set(key, value);
//   }
// }

//---------------------------
// 7) Generics classes and invariats
//---------------------------

// class  SafeStore<T> {
//   private open = true;

//   private requireOpen() {
//     if (!this.open) {
//       throw new Error("Store is closed");
//     }
//   }

//   get(key: string): T | undefined {
//     this.requireOpen();
//     return undefined;
//   }
// }