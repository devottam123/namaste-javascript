// map
const arr1 = [5, 1, 3, 2, 6];

// Double - [10, 2, 6, 4, 12]

// Triple - [15, 3, 9, 6, 18]

// Binary - ["101", "1", "11", "10", "110"]

function double(x) {
  return 2 * x;
}
const output1 = arr1.map(double);
const output2 = arr1.map((x) => {
  return 2 * x;
});
// console.log(output1);
// console.log(output2);

function triple(x) {
  return 3 * x;
}

const output3 = arr1.map(triple);
// console.log(output3);

function binary(x) {
    return x.toString(2);
}
const output4 = arr1.map(binary)
const output5 = arr1.map((x) => {
    return x.toString(2);
  });
const output6 = arr1.map((x) => x.toString(2));

// console.log(output4);
// console.log(output5);
// console.log(output6);

// filter

const arr2 = [5, 1, 3, 2, 6];
// filter odd values

function isOdd(x) {
    return x%2;
}
function isEven(x) {
    return x%2 === 0;
}
function greaterThan4(x) {
    return x>4;
}

const outputf1 = arr2.filter(isOdd)
const outputf2 = arr2.filter(isEven)
const outputf3 = arr2.filter(greaterThan4)
const outputf4 = arr2.filter(function greaterThan4(x) {
    return x>4;
})
const outputf5 = arr2.filter(function (x) {
    return x>4;
})
const outputf6 = arr2.filter((x) => x>4 )
const outputf7 = arr2.filter((x) => x<3 )
// console.log(outputf1);
// console.log(outputf2);
// console.log(outputf3);
// console.log(outputf4);
// console.log(outputf5);
// console.log(outputf6);
// console.log(outputf7);

// reduce
// reduce function is used where we take all the values of the array and want to take out a single value out of them.
// For eg, to find sum of the elements of an array, taking out max number out of the array. 

const arr3 = [5, 1, 3, 2, 6];

// Finding sum of all the elements in an array:
// function findSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];               
//     }
//     return sum;
// }

// console.log(findSum(arr3));

// const output = arr3.reduce(function (acc, curr) {
//     acc = acc + curr;
//     return acc;
// }, 0)
// console.log(output);

// Finding max of all values in an array:
function findMax(arr) {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]> max){
            max = arr[i]
        }
    }
    return max
}

// console.log(findMax(arr3));

const output = arr3.reduce(function (max, curr) {
    if(curr > max){
        max = curr
    }
    return max;
}, 0)

// console.log(output);

// Some more examples:
const users = [
    {firstName: "Devottam", lastname: "Vaishnav", age: 22},
    {firstName: "Akshay", lastname: "Saini", age: 22},
    {firstName: "Elon", lastname: "Musk", age: 50},
    {firstName: "Donald", lastname: "Trump", age: 75},
] 

// list of full names
// ["Devottam Vaishnav", "Akshay Saini"....]

const outputm = users.map( x => x.firstName + " " + x.lastname)
// console.log(outputm);

// All the people having age 22:
const outputr = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age]++
    }
    else{
        acc[curr.age] = 1
    }
    return acc
}, {})

// console.log(outputr);

// Finding the firstName of all the people whose age < 30

const outputt = users.filter( (x) => x.age<30).map((x) => x.firstName)
console.log(outputt);