// What is a Callback Function in JavaScript?

// The functions that are passed in another functions as parameters are known as Callback Functions in JavaScript.
// Callback Functions only brings Asynchronity in JavaScript.
// function x(y) {
//     console.log("x");
//     y();
// }

// x(function y(){
//     console.log("y");
// })
// Here y is a callback function.

// Eg,
// setTimeout(function() {
//     console.log("Timer");
// }, 5000);

// JavaScript is a Synchronous and single-threaded language.

// Blocking the main thread:
// Since, the JavaScript has only one Call Stack, or we can also call it as one main thread. So, everything whatever that is executed in our page, is executed through that call stack only. So, if any operation blocks this call Stack, it is known as Blocking the main thread.
// If a piece of code takes a lot of time to run, it will block our call stack (or main thread)
// So, the piece of code which takes a lot of time to run should be called asynchronously with setTimeout, setTimeinterval, etc. That is we should apply Async operations on them.

// Power of Callbacks?
// Because of Callbacks only we could do async operations in JS.

// Deep about Event Listeners
// document.getElementById("clickMe").addEventListener("click", function xyx() {
//   console.log("Button Clicked!");
// });
// Here, xyz() function is called AHndler Function.

// Closures Demo with Event Listeners

function attachEventListeners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyx() {
    console.log("Button Clicked!", ++count);
  });
}
attachEventListeners()

// Garbage Collection and removeEventListeners
// Why do we remove Event Listeners?
// Because Event Listeners are heavy. That means, it takes memory of itself and closures, that is all the variables in Event Listeners are always there, to be called be for action whenever to call them.
// If we have lot of EventListeners, our page can go slow because of a lot of Event listeners.
// So, it is good practice is to free up that extra memory, we remove Event Listeners and as they are freed up, all those variables used by Event Listeners are garbage collected by JavaScript engine.