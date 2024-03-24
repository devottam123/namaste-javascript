// Higher Order Functions:
// A Function which takes another function as an arguement or returns a function from it is known as Higher Order Function.

// function x() {
//     console.log("Namaste");
// }

// function y(x){
//     x();
// }

// y(x)
// Here y is the Higher Order Function and x is the Callback Function.

// const radius = [3, 1, 2, 4];

// const calculateArea = function area(radius){
//     const output=[]
//     for (let i = 0; i<radius.length; i++){
//         output.push(Math.PI*radius[i]*radius[i])
//     }
//     return output
// }

// console.log(calculateArea(radius));

// const calculateCircumference = function area(radius){
//     const output=[]
//     for (let i = 0; i<radius.length; i++){
//         output.push(2*Math.PI*radius[i])
//     }
//     return output
// }
// console.log(calculateCircumference(radius));

// const calculateDiameter = function area(radius){
//     const output=[]
//     for (let i = 0; i<radius.length; i++){
//         output.push(2*radius[i])
//     }
//     return output
// }
// console.log(calculateDiameter(radius));

// DRY Principle - Don't Repeat Yourself
// Above above has lot of repeatations, so to optimize it we will do:

const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI*radius*radius;
}

const circumference = function (radius) {
    return 2*Math.PI*radius;
}
const diameter = function (radius) {
    return 2*radius;
}

const calculate = function area(arr, logic){
    const output=[]
    for (let i = 0; i<arr.length; i++){
        output.push(logic(arr[i]))
    }
    return output
}
 
console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

console.log(radius.map(area));

// To make the calculate function to work exactly as map:

Array.prototype.calculate = function area(logic){
    const output=[]
    for (let i = 0; i<this.length; i++){
        output.push(logic(this[i]))
    }
    return output
}

console.log(radius.calculate(area));
 
