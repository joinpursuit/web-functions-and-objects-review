// ## 1. Average of two numbers

// Write a function that takes in two numbers as input and returns their average

// const averageFunction = (num1, num2) => {
//     let addFunc = num1 + num2;
//     let divideFunc = addFunc/2;
//     return divideFunc 
// }
// console.log(averageFunction(4, 6))

// ## 2. Average of three numbers

// Write a function that takes in three numbers as input and returns their average

// const avgThree = (numA, numB, numC) => {
//     let avg = (numA + numB + numC)/3
//     return avg
// }
// console.log(avgThree(1,3,5))

// ## 3. Average of array

// Write a function that takes in an array of numbers as input and returns their average

// let sumArray = [10, 20, 30, 10, 20]


// const avgFunc = (values) => {
//     let sum = 0 
//     for (let i = 0; i < values.length; i += 1) {
//         sum += values[i]
//     }
//     let divideSum = sum / values.length 
//     return divideSum 
// }
// console.log(avgFunc(sumArray))

let oddArray = [3,4,5,6,7,8]
let newArray = []

const oddFunction = (values) => {

for (let i = 0; i <= values.length; i++) {
    if (values[i] % 2 === 0) {
        
       
        console.log(newArray.push(values[i])) // => 4 (length of arr) 
        
        


    } 
}
}
console.log(oddFunction(newArray))