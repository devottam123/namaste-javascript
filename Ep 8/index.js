// console.log(b);
// console.log(a);
// var b = 100; //b is hoisted and it goes inside the global object (eg, window object in case of browsers)
// let a = 10; //a is also hoisted but it goes in separate memory space (Script in browsers) than global object and we cannot access them until we place any value in them, i.e. it is in Temporal Dead Zone
// let & const declaration are hoisted!

// Temporal Dead Zone: 
// Temporal Dead Zone is the time since when let or const variable is hoisted and till it is initialized some value. 
// Whenever we try to execute a value in Temporal Dead Zone, it gives a ReferenceError 
// That error looks like this:
// Uncaught ReferenceError: Cannot access 'a' before initialization at index.js:2:13

// let a = 10;
// console.log(a);
// var b = 100;
// console.log(window.b) will give 100 as an output on console in broweser as b value is attached to the global object window in the browser
// console.log(this.b) will give 100 as an output on console in broweser as b value is attached to the global object window in the browser and this is the refernce to global object (window here)

// let a= 10;
// let a= 100;
// var a= 100;
// This above code will give SyntaxError: 
// Uncaught SyntaxError: Identifier 'a' has already been declared (at index.js:20:5)

// But this is not in the case of var:
// var b=10
// var b=1000
// console.log(b);

// let a;
// a=10
// console.log(a);
// In the case of const:
// const b; 
// b=10;
// console.log(b);
// we can't do it like this!
// Reason: const value is ne assigned it is fixed we can't change it!
// So, We can declare const only like this:
const x = 100;
// Now if we do:
x=10000; 
// It will give an TypeError:
// Uncaught TypeError: Assignment to constant variable.
    // at index.js:42:2