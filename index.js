// Code 1
// The receivesAFunction function should:
// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function

// Code 2
// The returnsANamedFunction function should:
// take no arguments
// return a named function

// Code 3
// The returnsAnAnonymousFunction function should:
// take no arguments
// return an anonymous function

function receivesAFunction(callback) {
  callback();
}
function returnsANamedFunction() {
  return function namedFunction() {
    console.log('Hello World');
  };
}
function returnsAnAnonymousFunction() {
    return function() {
        console.log('Hello World');
    };
}