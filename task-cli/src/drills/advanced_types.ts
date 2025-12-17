console.log("This is the advanced_types.ts file.");

// //----------------------------------
// // 1) Union Types
// //----------------------------------

// type status = "success" | "error" | "loading";

// function handleStatus(s: status) {
//   switch (s) {
//     case "success":
//       console.log("Operation was successful.");
//       break;
//     case "error":
//       console.log("An error occurred.");
//       break;
//     case "loading":
//       console.log("Loading...");
//       break;
//     default:
//       // This case will never be reached due to the union type
//       const _exhaustiveCheck: never = s;
//       return _exhaustiveCheck;
//   }
// }

// // handleStatus("success");
// // handleStatus("error");
// // handleStatus("loading");

// //----------------------------------
// // 2) Intersection Types
// //----------------------------------

// type HashId = {
//   id: string;
// }; 

// type Timestamped = {
//   createdAt: Date;
//   updatedAt: Date;
// };

// type Entity = HashId & Timestamped;

// const user: Entity = {
//   id: "user_123",
//   createdAt: new Date(),
//   updatedAt: new Date(),
// };

// // console.log(user);

// //----------------------------------
// // Discriminated Unions
// //----------------------------------

// type Shape =
//   | { kind: "circle"; radius: number }
//   | { kind: "square"; sideLength: number }
//   | { kind: "rectangle"; width: number; height: number };

// // function area(shape: Shape): number {
// //   switch (shape.kind) {
// //     case "circle":
// //       return Math.PI * shape.radius ** 2;
// //     case "square":
// //       return shape.sideLength ** 2;
// //     case "rectangle":
// //       return shape.width * shape.height;
// //     default:
// //       const _exhaustiveCheck: never = shape;
// //       return _exhaustiveCheck;
// //   }
// // }

// //----------------------------------
// // 4) Type Guards¶
// //----------------------------------

// function isCircle(
//   s: Shape
// ): s is { kind: "circle"; radius: number } {
//   return s.kind === "circle";
// }

// function area(shape: Shape): number {
//   if (isCircle(shape)) {
//     return Math.PI * shape.radius ** 2;
//   } else {
//     switch (shape.kind) {
//       case "square":
//         return shape.sideLength ** 2;
//       case "rectangle":
//         return shape.width * shape.height;
//       default:
//         const _exhaustiveCheck: never = shape;
//         return _exhaustiveCheck;
//     } 
//   }
// }

// console.log(area({ kind: "circle", radius: 5 })); // Circle area
// console.log(area({ kind: "square", sideLength: 4 })); // Square area
// console.log(area({ kind: "rectangle", width: 3, height: 6 })); // Rectangle area

//----------------------------------
// 5) Conditional Types (Deeper)¶
//----------------------------------

// type PromiseType<T> = T extends Promise<infer U> ? U : T;

// type A = PromiseType<Promise<string>>; // string
// type B = PromiseType<Promise<number>>; // number
// type C = PromiseType<boolean>; // boolean

// type Nullable<T> = T | null;
// type NonNullable<T> = T extends null | undefined ? never : T;

// type D = NonNullable<string | null | undefined>; // string

//----------------------------------
// 6) Utility Types in Depth¶
//----------------------------------

// type User = {
//   id: string;
//   name: string;
//   email?: string;
//   age?: number;
// };

// type StrictUser = Required<User>;

// type Config = Readonly<{
//   host: string;
//   port: number;
// }>;

// type Letters = "a" | "b" | "c";

// type WithoutA = Exclude<Letters, "a">;

//-----------------------------------
// 7) Template Literal Types¶
//-----------------------------------

// type Events = "click" | "hover" | "focus";
// type EventHandlers = `on${Capitalize<Events>}`;

// const handlers: Record<EventHandlers, () => void> = {
//   onClick: () => console.log("Clicked"),
//   onHover: () => console.log("Hovered"),
//   onFocus: () => console.log("Focused"),
// };

//-----------------------------------
// 8) Indexed Access & Recursive Types¶
//-----------------------------------

// type User = { id: string; profile: { name: string; address: { city: string } } }

// type City = User["profile"]["address"]["city"];

// type JSONValue =
//   | string
//   | number
//   | boolean
//   | null
//   | JSONValue[]
//   | { [key: string]: JSONValue };

