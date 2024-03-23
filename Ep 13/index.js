// a()
// b()

// Function Statement aka Declaration
function a() {
    console.log("a called");
}


// Function Expression
var b = function(){
    console.log("b called");
}

// Anonymous Functions
// function (){

// }

// Function Statements always require a name
// So, we have to create Anonymous Functions as Expressions
// For eg,
var c = function(){

} 

// Named Function Expresssion
// var c = function xyz() {
//     console.log("c called");
// }
// c()
// xyz() //this will throw an error, as xyz() is not created in the outer scope but it is created as a local variable.
// So, below code will work:
var d = function xyz() {
    console.log(xyz);
}
// d()
// bit if its used outside like,: 
// xyz() //it will throw an error

// Difference between Parameters and Arguements:
var e = function(param1, param2){ //param1 & param2 are parameters here
    console.log(param1, param2);
}

// e(1,2) //1&2 are arguements here

// First Class Functions
// Taking a function as an arguement/Passing a function insise another function
// 1)
// var f = function(param1){
//     console.log(param1);
// }
// f(function () {
    
// })

// 2)
// var f = function(param1){
//     console.log(param1);
// }
// function xyz() {
    
// }

// f(xyz)

// Passing a function in another function and again returning another function
var f = function(param1){
    // returning a anonymous function
    // return function() {
        
    // }
    // returning a named function
    return function ABC() {
        
    }
}
function xyz() {
    
}

// console.log(f(xyz))

// So, the ability of functions to be used as values and also can be assigned to a variable and can be passed in another functions as arguements and can be returned from the functions is known as First Class Functions.
// First Class Citizens and First Class functions are one and same thing.

