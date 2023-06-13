// Object Method:

// When a function is called as a method of an object, this refers to the object itself.
// The value of this is determined by the object on which the method is called.
// For example:

// const obj = {
//     name: "John",
//     sayHello: function() {
//       console.log("Hello, " + this.name + "!");
//     }
//   };
  
//   obj.sayHello(); // Output: Hello, John!


// Constructor Functions:

// When a function is used as a constructor function with the new keyword, this refers to the newly created object.
// The this keyword within the constructor function represents the instance being created.
// For example:


function Person(name) {
    this.name = name;
    this.sayHello = function() {
      console.log("Hello, " + this.name + "!");
    };
  }
  
  const john = new Person("John");
  john.sayHello(); // Output: Hello, John!
  