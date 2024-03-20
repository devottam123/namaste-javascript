// undefined vs not defined
console.log(a);
var a = 7
console.log(a);

var b;
console.log(b);

if(b === undefined){
    console.log("b is undefined");
} else{
    console.log("b is not defined");
}

// JS is loosely typed or weakly typed or dynamically typed language
var c;
console.log(c);
c=10;
console.log(c);
c="Hello World!"
console.log(c);

// never do this, it's not a good practice =>
a = undefined;
console.log(a);



console.log(x); //It will give an error since x is not defined!