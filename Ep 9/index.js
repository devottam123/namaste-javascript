// BLOCK SCOPE & Shadowing in JS

{
} // => This is block in JS. Also known as Compound Statement.
// A block is used to combine multiple JavaScript statement into a group.
// We need to group these statements together so that we can use multiple statements in a place where JavaScript excepts only one statement.
// For eg, after if(true) javascript expects only one statement so we use use block to combine multiple JS statements into one statement like this: if(true){ //mutliple JS statements here// }
// Eg,
// if(true){
//     // Block or Compound Statement
//     var a = 10
//     console.log(a);
// }

// scope of the block is all the variable we can access inside it.

// var a = 100;
// let b = 100;
// const c = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// const c = 100;
// function x() {
//   const c = 30;
//   console.log(c);
// }
// x();
// console.log(c);

// Illegal Shadowing:
// let a = 20;
// {
//     var a = 20;
// }
// We can't shadow let using a var

// But we can shadow let/const using let/const
// let a = 20;
// {
//     let a = 30;
// }
// const a = 20;
// {
//     const a = 30;
// }

// This is also perfectly fine:
// var a = 20;
// {
//     let a = 20; 
// }

// let a = 20;
// function x(){
//     var a = 20;
// }
// This is also fine as var has function scope

// const a=20;
// {
//     const a = 100;
//     {
//         const a = 200;
//         console.log("y",a);
//     }
//     console.log('x', a);
// }

const a=20;
{
    const a = 100;
    {
        console.log('inner', a);
    }
}
console.log('outer', a);