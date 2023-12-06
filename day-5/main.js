// Original function that takes three arguments
function add(x, y, z) {
  return x + y + z;
}

// Curry the function
function curryAdd(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}

// Usage of the curried function
const curriedAdd = curryAdd(1)(2)(3);
console.log(curriedAdd); // Output: 6


