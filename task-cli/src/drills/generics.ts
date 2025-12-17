console.log('Generics drills');
//---------------------------
// 1) Generic Functions
//---------------------------

// function identity<T>(arg: T): T {
//   return arg;
// }

// const a = identity(42);
// const b = identity("Hello, Generics!");
// const c = identity({ id: 1 });


// const d = identity<string>("world");
// console.log(a, b, c, d);

// function identityAny(arg: any): any {
//   return arg;
// }

// const e = identityAny(42);
// e.toFixed(2); // No error, but risky
// console.log(e);
// e.toUpperCase(); // Runtime error if e is not a string


//---------------------------
// 2) Array Collections 
//---------------------------

// function first<T>(arr: T[]): T | undefined {
//   return arr[0];
// }

// const numArray = [1, 2, 3];
// const strArray = ["a", "b", "c"];

// console.log(first(numArray)); // 1
// console.log(first(strArray)); // "a"

// const mixed = first([1, "two"]);
// console.log(mixed); // Why 1?

//---------------------------
// 3)Constraints 
//---------------------------

// function lengthOf<T extends { length: number }>(arg: T): number {
//   return arg.length;
// }

// const len1 = lengthOf("Hello");
// const len2 = lengthOf([1, 2, 3, 4]);
// console.log(len1, len2);

// const len3 = lengthOf({ length: 10, value: "Test" });
// console.log(len3);

// const lenNumber = lengthOf(42); // Error: number doesn't have 'length'
// console.log(lenNumber);

// type HasId = { id: number };
// type HasName = { name: string };

// function printIdAndName<T extends HasId & HasName>(obj: T){
//   console.log(obj.id, obj.name);
//   return obj;
// }
// printIdAndName({ id: 1, name: "Alice" }); // Works

//---------------------------
// 4) Default Type Parameters
// //---------------------------

// type ApiResponse<T = unknown> = {
//   data: T;
//   status: number;
// };

// const response1: ApiResponse<string> = {
//   data: "Success",
//   status: 200,
// };

// const response2: ApiResponse = {
//   data: { message: "Default type used" },
//   status: 200,
// };

// console.log(response1, response2);
// Why unknown? Because it is more flexible and safer than any. how? because it forces the user to perform type checks before using the data, reducing runtime errors.
// why no direct <T>? because it provides a fallback type when no specific type is provided.

//---------------------------
// 5) Keyof and Lookup Types
//---------------------------

// type Keys<T> = keyof T;

// interface User {
//   id: string;
//   age: number;
// }

// Keys<User>; 

// function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// getProp(user, "id")

// getProp(user, "missing") // Error: "missing" is not a key of User


//---------------------------
// 6) Mapped Types
//---------------------------

// type Readonly<T> = {
//   readonly [K in keyof T]: T[K];
// };

// interface User {
//   id: string;
//   name: string;
// }

// const user: Readonly<User> = {
//   id: "u1",
//   name: "Bob",
// };
// console.log(user);
// // user.id = "u2"; // Error: Cannot assign to 'id' because it is a read-only property.
// // user.name = "Alice"; // Error: Cannot assign to 'name' because it is a read-only property.

// type Partial<T> = {
//   [K in keyof T]?: T[K];
// };

// const partialUser: Partial<User> = {
//   id: "u2",
//   name: "Alice",
// };
// console.log(partialUser);
// partialUser.name = "Charlie";
// console.log(partialUser);


//---------------------------
// 7) Conditional Types
//---------------------------

// type IsString<T> = T extends string ? true : false;

// type Test1 = IsString<string>; // true
// type Test2 = IsString<number>; // false

// type ElementType<T> = T extends (infer U)[] ? U : T;

// type Test3 = ElementType<string[]>; // string
// type Test4 = ElementType<boolean>; // boolean


//---------------------------
// 8) Uitility Types 
//---------------------------

// type Dict<T> = Record<string, T>;

// interface User {
//   id: string;
//   name: string;
//   age: number;
// }

// type UserPreview = Pick<User, "id">;
// type UserWithoutAge = Omit<User, "age">;

// function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
//   return items.map(item => item[key]);
// }

// const users: User[] = [
//   { id: "u1", name: "Alice", age: 30 },
//   { id: "u2", name: "Bob", age: 25 },
// ];

// const names = pluck(users, "name");
// console.log(names); // ["Alice", "Bob"]
// const ids = pluck(users, "id");
// console.log(ids); // ["u1", "u2"]
// const ages = pluck(users, "age");
// console.log(ages); // [30, 25]

