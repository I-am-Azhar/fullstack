console.log("Objects & Interfaces");

//---------------------------
// 1) Object Types
//---------------------------
// type Person = {
//   name: string;
//   age: number;
// };

// const person1: Person = {
//   name: "Azhar",
//   age: 24
// };

// console.log(person1);


// type PersonWithId = {
//   readonly id: string;
//   name: string;
//   age: number;
// };

// const person2: PersonWithId = {
//   id: "p1",
//   name: "John",
//   age: 30
// };

// person2.id = "p2"; 


//---------------------------
// 2) Interfaces vs Type Aliases
//---------------------------

// interface Car {
//   make: string;
//   model: string;
// }

// type Bike = {
//   make: string;
//   gears: number;
// };


// interface ElectricCar extends Car {
//   batteryCapacity: number;
// }


// type ElectricBike = Bike & {
//   battery: number;
// };

//---------------------------
// 3) Optional Properties
//---------------------------

// type PersonOptional = {
//   name: string;
//   age: number;
//   middleName?: string;
// };

// const p1: PersonOptional = {
//   name: "Alice",
//   age: 25
// };

// console.log(p1.middleName); 

// console.log(p1.middleName?.toUpperCase());


//---------------------------
// 4) Index Signatures
//---------------------------

// interface Dictionary {
//   [key: string]: string;
// }

// const translations: Dictionary = {
//   en: "Hello",
//   fr: "Bonjour"
// };

// translations.es = "Hola";
// translations.count = 2; 

// interface FlexibleDictionary {
//   [key: string]: string | number;
// }

// const flexible: FlexibleDictionary = {
//   en: "Hello",
//   count: 3
// };


//---------------------------
// 5) Utility Types
//---------------------------

// type Person = {
//   id: string;
//   name: string;
//   age: number;
// };

// const partialPerson: Partial<Person> = {
//   name: "Bob"
// };

// type NameOnly = Pick<Person, "name">;

// const personName: NameOnly = {
//   name: "Charlie"
// };

// type WithoutAge = Omit<Person, "age">;

// const noAgePerson: WithoutAge = {
//   id: "x1",
//   name: "David"
// };


//---------------------------
// 6) Extending Interfaces
//---------------------------

// interface BasePerson {
//   name: string;
//   age: number;
// }

// interface Employee extends BasePerson {
//   role: string;
//   department?: string;
// }

// const emp1: Employee = {
//   name: "Emma",
//   age: 28,
//   role: "Developer"
// };

// const empWrong: Employee = {
//   name: "Sam",
//   role: "Tester" 
// };


//---------------------------
// 7) Structural Typing
//---------------------------

// type PersonShape = {
//   name: string;
//   age: number;
// };

// function printPerson(p: PersonShape) {
//   console.log(p.name, p.age);
// }

// printPerson({
//   name: "Alex",
//   age: 35,
//   hobby: "Gaming" 
// });


//---------------------------
// 8) Records and Maps
//---------------------------

// const prices: Record<string, number> = {
//   apple: 100,
//   banana: 40
// };

// prices.orange = "cheap"; 

// const peopleMap = new Map<string, Person>();

// peopleMap.set("user1", {
//   id: "1",
//   name: "Azhar",
//   age: 24
// });

// console.log(peopleMap.get("user1"));



