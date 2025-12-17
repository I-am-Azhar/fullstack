import { createTask, markCompleted } from "./operations.js";
import { AppConfig } from "./config/index.js";

const task1 = createTask("Learn TypeScript");
const task2 = markCompleted(task1);

console.log(task1);
console.log(task2);

const config = AppConfig.getInstance();

console.log("PORT:", config.getPort());
console.log("BASE URL:", config.getBaseURL());
console.log("API BASE:", config.getApiBase());
console.log("RETRY:", config.getRetryPolicy());
console.log("FEATURE a:", config.isFeatureEnabled("a"));
