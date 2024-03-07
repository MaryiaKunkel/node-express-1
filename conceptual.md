### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  Promisses, async/await

- What is a Promise?
  A promise is one-time guarantee of future value.

- What are the differences between an async function and a regular function?
  Async Function: Allows the use of the await keyword inside the function. It always returns a Promise, and the execution is paused until the Promise is resolved.
  Regular Function: Executes synchronously, and if it returns a value, it is available immediately.

- What is the difference between Node.js and Express.js?
  Node.js: A runtime environment that executes JavaScript code outside the browser. It provides a platform to build server-side applications using JavaScript.
  Express.js: A web application framework for Node.js that simplifies the process of building robust web applications and APIs by providing a set of features and tools.

- What is the error-first callback pattern?
  The callback function’s first parameter should be listed as error. Node will supply an error object (if something bad happened), otherwise null as arguments.
  Then follow the other parameters, if there are any.

- What is middleware?
  It is code that runs in the middle of the request / response cycle!

- What does the `next` function do?
  In the context of middleware, next is a function that, when invoked, passes control to the next middleware in the stack. It is used to move to the next phase of the request-response cycle.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  I think it would be better to use promise.all to execute requests at the same time. Maybe it would be better to name the function getSpecificUsers().

```js
async function getUsers() {
  const elie = await $.getJSON("https://api.github.com/users/elie");
  const joel = await $.getJSON("https://api.github.com/users/joelburton");
  const matt = await $.getJSON("https://api.github.com/users/mmmaaatttttt");

  return [elie, matt, joel];
}
```
