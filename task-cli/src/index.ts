import { createTask, markCompleted } from "./operations.js";

const task1 = createTask("Learn TypeScript");
const task2 = markCompleted(task1);

console.log(task1);
console.log(task2);
