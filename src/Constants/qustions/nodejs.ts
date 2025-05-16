
export const nodejs = [

  {
    "id": "1",
    "question": "What is Node.js?",
    "answer": "Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript code outside of a browser. It is built on Chrome's V8 JavaScript engine."
  },
  {
    "id": "2",
    "question": "What is the difference between Node.js and JavaScript?",
    "answer": "JavaScript is a programming language, while Node.js is a runtime environment that allows JavaScript to be run on the server side."
  },
  {
    "id": "3",
    "question": "What is the use of 'require' in Node.js?",
    "answer": "The 'require' function is used to import modules, JSON, and local files in Node.js applications."
  },
  {
    "id": "4",
    "question": "What is npm?",
    "answer": "npm (Node Package Manager) is the default package manager for Node.js. It allows developers to install, share, and manage dependencies in a project."
  },
  {
    "id": "5",
    "question": "What are streams in Node.js?",
    "answer": "Streams are objects in Node.js that allow you to read data from a source or write data to a destination in a continuous fashion. They are useful for handling large volumes of data efficiently."
  },
  {
    "id": "6",
    "question": "What are the different types of streams in Node.js?",
    "answer": "There are four types: Readable, Writable, Duplex (both readable and writable), and Transform (a type of duplex stream that can modify data)."
  },
  {
    "id": "7",
    "question": "What is the Event Loop in Node.js?",
    "answer": "The Event Loop is a mechanism in Node.js that handles asynchronous callbacks. It allows non-blocking I/O by offloading operations to the system and continuing to process other events."
  },
  {
    "id": "8",
    "question": "What is middleware in Node.js?",
    "answer": "Middleware is a function that has access to the request, response, and next middleware function in the application's request-response cycle. It is commonly used in Express.js."
  },
  {
    "id": "9",
    "question": "What is the difference between process.nextTick() and setImmediate()?",
    "answer": "`process.nextTick()` executes a callback after the current operation completes, before the event loop continues. `setImmediate()` schedules the callback to run on the next iteration of the event loop."
  },
  {
    "id": "10",
    "question": "How do you handle exceptions in Node.js?",
    "answer": "You can handle exceptions using try-catch blocks for synchronous code, and error-first callbacks or `.catch()` with Promises for asynchronous code. You can also use process-level handlers like `process.on('uncaughtException')` for unhandled errors."
  }
]
