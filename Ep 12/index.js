// function outer() {

//     function inner() {
//         console.log(a);
//     }
//     var a = 10;
//     return inner;
// }

// function outer() {

//     function inner() {
//         console.log(a);
//     }
//     let a = 10;
//     return inner;
// }

// function outer(b) {

//     function inner() {
//         console.log(a, b);
//     }
//     let a = 10;
//     return inner;
// }
// outer()();
// Two paranthesis is for calling inner function inside a function
// This is same as:
// var close = outer("helloworld");
// close();

// function outest() {
//   var c = 20;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     let a = 10;
//     return inner;
//   }
//   return outer;
// }
// let a = 100;
// var close = (outest())("helloworld")
// close()

// Example of Data Privacy using Closures.
// function counter(){
//     var count = 0

//     return function incrementCounter(){
//     count++;
//     console.log(count)
//     }
// }
// var counter1 = counter()
// counter1()
// counter1()

// var counter2 = counter()
// counter2()
// counter2()
// counter2()
// counter2()
// counter2()

// Function Constructor in JavaScript
// function counter() {
//     var count = 0;
//     this.incrementCounter = function(){
//         count++;
//         console.log(count);
//     }
//     this.decrementCounter = function(){
//         count--;
//         console.log(count);
//     }
// }

// var counter1 = new counter()

// counter1.incrementCounter()
// counter1.incrementCounter()
// counter1.decrementCounter()

// Relation between Garbage Collection, Memory Leaks and Closures?
function a() {
    var x = 0, z=10;
    return function b() {
        console.log(x);
    }
}

var y = a()
// ......
y()