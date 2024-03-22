// function x() {
//     var i = 1
//     setTimeout(function(){
//         console.log(i)
//     }, 3000)
//     console.log("Namaste Javascript");
// }
// x();


// function x() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function(){
//             console.log(i)
//         }, i * 1000)    
//     }
//     console.log("Namaste Javascript");
// }
// x();
// Here, there is only one value of i because of the use of var. And because of the clousures, the setTimeout will remember the value of i as it references it. After each iteration the value of i increases due to for loop. And at each iteration, the setTimeout function will go to web API. After the each 1 second the setTimeout function will go in call back queue and at the value of 6, the loop will end and the global execution context will also go out od the ccall stack. After this, each setTimeout function will be implemeted in which a console.log(i) is there. So, all the functions will the 6 as the value of i after each second.

// To fix this, we canuse let here:
// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function(){
//             console.log(i)
//         }, i * 1000)    
//     }
//     console.log("Namaste Javascript");
// }
// x();
// In the case of let at each iteration, there is a new value of i, and each value of i its own scope as let has block scope. As a result, each new setTimeout() function in iteration will point to new value of i due to closure property. So each time the setTimeout() was refering to new value of i which it remembered as it referced to them due to closures.

// But to do the same thing with var: 
// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function close(i) {
//             setTimeout(function(){
//                 console.log(i)
//             }, i * 1000)     
//         }
//         close(i)   
//     }
//     console.log("Namaste Javascript");
// }
// x();
// The below code is used here to understand the above code:
function x() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function(){
                console.log(x)
            }, x * 1000)     
        }
        close(i)   
    }
    console.log("Namaste Javascript");
}
x();
