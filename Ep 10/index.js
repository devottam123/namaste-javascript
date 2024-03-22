// Closure
// function x(){
//     var a= 7
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// Closure is a function bundled together with its lexical scope/environment

// *****************************************************
// function x(){
//     var a= function y(){
//         console.log(a);
//     }
//     a();
// }
// x();

// *****************************************************
// function x(){
//     var a= 7
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// Both of the above and below are one and same thing
// function x(){
//     var a= 7
//     return function y(){
//         console.log(a);
//     }    
// }
// console.log(x());;

// var z = x()
// console.log(z);
// z();
// ******************************************************

// function x(){
//     var a= 7
//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;
// }

// var z = x();
// console.log(z);
// z();

// ******************************************************
function z(){
    var b= 900;
    function x(){
    var a= 7
    function y(){
        console.log(a, b);
    }
    y();
}
x();
}
z();