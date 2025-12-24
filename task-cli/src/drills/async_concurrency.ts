// console.log("Async & Concurrency Drills");

// ----------------------------------
// 1) Promise Fundamentals¶
// ----------------------------------

// const value: Promise<number>;
// async function add(a: number, b: number): Promise<number> {
//   return (a + b);
// }

// const p = add(5, 10);
// const result = await add(20, 30);

// ----------------------------------
// 2) async / await Basics
// ----------------------------------

// interface User {
//   id: string;
//   name: string;
// }

// async function fetchUser(id: string): Promise<User>{
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id, name: "John Doe" });
//     }, 1000);
//   });
// }

// async function main() {
//   const user = await fetchUser("123");
//   console.log(user.name);
// }


// ----------------------------------
// 3) Sequential vs Parallel
// ----------------------------------

// await fetchUser(id1);
// await fetchUser(id2);


// const [a, b] = await Promise.all([
//   fetchUser(id1),
//   fetchUser(id2)
// ]);

// const results = await Promise.allSettled([...]);


// ----------------------------------
// 4) 4) Timeouts¶
// ----------------------------------

// function timeout<T>(p: Promise<T>, ms: number): Promise<T> {
//   const timeoutPromise = new Promise<T>((_, reject) => {
//     setTimeout(() => {
//       reject(new Error("Operation timed out"));
//     }, ms);
//   });

//   return Promise.race([p, timeoutPromise]);
// }

// const slowPromise = new Promise<string>((resolve) => {
//   setTimeout(() => {
//     resolve("Completed");
//   }, 3000);
// });

// await timeout(slowPromise, 1000);

// ----------------------------------
// 5) Retries with Backoff
// ----------------------------------

// helper sleep
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// retry function
async function retry<T>(
  op: () => Promise<T>,
  attempts = 2,
  backoffMs = 250
): Promise<T> {
  for (let i = 0; i < attempts; i++) {
    try {
      return await op();
    } catch (err: any) {
      if (i === attempts - 1 || err?.retryable !== true) {
        throw err;
      }
      await sleep(backoffMs);
    }
  }
  throw new Error("Unreachable");
}

// ----------------------------------
// 6) Cancellation with AbortController
// ----------------------------------

// timeout signal helper
function withTimeoutSignal(ms: number) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);

  return {
    controller,
    signal: controller.signal,
    cleanup: () => clearTimeout(timer),
  };
}

// mock fetch using signal
function mockFetch(signal: AbortSignal): Promise<string> {
  return new Promise((resolve, reject) => {
    const id = setTimeout(() => resolve("Data fetched"), 2000);

    signal.addEventListener("abort", () => {
      clearTimeout(id);
      reject(new Error("Aborted"));
    });
  });
}

// ----------------------------------
// 7) Concurrency Limits (Task Pool)
// ----------------------------------

// class Semaphore {
//   private count: number;
//   private queue: (() => void)[] = [];

//   constructor(limit: number) {
//     this.count = limit;
//   }

//   async acquire(): Promise<void> {
//     if (this.count > 0) {
//       this.count--;
//       return;
//     }

//     await new Promise<void>((resolve) => this.queue.push(resolve));
//     this.count--;
//   }

//   release() {
//     this.count++;
//     const next = this.queue.shift();
//     if (next) next();
//   }
// }

// async function runWithLimit<T>(
//   limit: number,
//   tasks: (() => Promise<T>)[]
// ): Promise<T[]> {
//   const sem = new Semaphore(limit);
//   const results: Promise<T>[] = [];

//   for (const task of tasks) {
//     const p = (async () => {
//       await sem.acquire();
//       try {
//         return await task();
//       } finally {
//         sem.release();
//       }
//     })();

//     results.push(p);
//   }

//   return Promise.all(results);
// }

// // ----------------------------------
// // 8) Error Handling Patterns
// // ----------------------------------

// type Result<T> =
//   | { ok: true; value: T }
//   | { ok: false; error: string };

// async function safeFetch(): Promise<Result<string>> {
//   try {
//     const data = await Promise.resolve("Success");
//     return { ok: true, value: data };
//   } catch (err: any) {
//     return { ok: false, error: err.message };
//   }
// }

// // ----------------------------------
// // 9) Fire-and-Forget (Carefully)
// // ----------------------------------

// function backgroundTask() {
//   Promise.resolve("Background work")
//     .then((res) => console.log(res))
//     .catch((err) => console.error("Logged error:", err));
// }

// // no await, but .catch is attached
// backgroundTask();

// // ----------------------------------
// // 10) Typing Async APIs
// // ----------------------------------

// type ApiResponse<T> = {
//   status: number;
//   data: T;
// };

// async function getUserApi(): Promise<ApiResponse<User>> {
//   return {
//     status: 200,
//     data: { id: "1", name: "Azhar" },
//   };
// }

// // typed fetch wrapper
// async function typedFetch<T>(data: T): Promise<T> {
//   return Promise.resolve(data);
// }
