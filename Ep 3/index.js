// Hoisting in JS
getName1();
console.log(x);
console.log(getName1)
// getName2();
getName3();


var x = 7;

function getName1() {
  console.log("Namaste Javascript1");
}


// var getName2 = () => {
//   console.log("Namaste Javascript2");
// }
//it will throw an error as getName2 is a variable and as it is hoisted, its value is undefined
// So as it is called as a function, like getName2(), it will give an error getName2 is not a function.


var getName3 = function () {
  console.log("Namaste Javascript3");
}
//it will throw an error as getName3 is a variable and as it is hoisted, its value is undefined
// So as it is called as a function, like getName3(), it will give an error getName3 is not a function.


