// // console.log("Modules & Project Structure Drills");

// // ----------------------------------
// // 1) ESM Everywhere
// // ----------------------------------

// // package.json
// // {
// //   "type": "module"
// // }

// // tsconfig.json
// // {
// //   "compilerOptions": {
// //     "module": "ESNext"
// //   }
// // }

// // const fs = require("fs");
// // module.exports = { fs };

// import fs from "node:fs";
// export { fs };

// // ----------------------------------
// // 2) Barrels & Public API
// // ----------------------------------

// // src/shared/math.ts
// export function add(a: number, b: number) {
//   return a + b;
// }

// // src/shared/strings.ts
// export function upper(s: string) {
//   return s.toUpperCase();
// }

// // src/shared/index.ts (barrel)
// export { add } from "./math";
// export { upper } from "./strings";

// // usage
// // import { add, upper } from "@shared";

// // ----------------------------------
// // 3) Node vs Browser Boundaries
// // ----------------------------------

// import fs from "node:fs";

// export function readFile() {
//   return fs.readFileSync("data.txt", "utf-8");
// }

// // This FAILS in Next client component
// // Fix: move to server/ and use only in API / Server Component

// // ----------------------------------
// // 4) package.json Scripts
// // ----------------------------------

// // Node service scripts
// // {
// //   "scripts": {
// //     "dev": "tsx watch src/index.ts",
// //     "build": "tsc",
// //     "start": "node dist/index.js",
// //     "typecheck": "tsc --noEmit"
// //   }
// // }

// // Next.js scripts
// // {
// //   "scripts": {
// //     "dev": "next dev",
// //     "build": "next build",
// //     "start": "next start"
// //   }
// // }

// // ----------------------------------
// // 5) Installing Modules & Types
// // ----------------------------------

// // pnpm add dayjs

// import dayjs from "dayjs";

// const now = dayjs().format("YYYY-MM-DD");
// console.log(now);

// // types are bundled, no @types needed

// // ----------------------------------
// // 6) Paths & Aliases
// // ----------------------------------

// // tsconfig.json
// // {
// //   "compilerOptions": {
// //     "baseUrl": ".",
// //     "paths": {
// //       "@shared/*": ["src/shared/*"]
// //     }
// //   }
// // }

// // src/shared/time.ts
// export function nowISO() {
//   return new Date().toISOString();
// }

// // usage
// // import { nowISO } from "@shared/time";

// // ----------------------------------
// // 7) Minimal Exports for Libraries
// // ----------------------------------

// export default function uuid() {
//   return crypto.randomUUID();
// }

// export function createUUID() {
//   return crypto.randomUUID();
// }

// // import { createUUID } from "@shared/uuid";
