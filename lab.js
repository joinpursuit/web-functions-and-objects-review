// ## 1. Average of two numbers

// Write a function that takes in two numbers as input and returns their average

// ```
// Input: 4,6
// Output: 5
// ```

// function average(num1, num2) {
//     let newAverage = (num1 + num2) / 2
//     return newAverage
// }
// console.log(average(4,6))

// ## 2. Average of three numbers

// Write a function that takes in three numbers as input and returns their average

// ```
// Input: 1,3,5
// Output: 3
// ```

// function average(num1, num2, num3) {
//     let newAverage = (num1 + num2 + num3) / 3
//     return newAverage
// }

// console.log(average(1,3,5))

// ## 3. Average of array

// Write a function that takes in an array of numbers as input and returns their average

// ```
// Input: [1,2,3,4,5,10,10]
// Output: 5
// ```

let givenArr = [1,2,3,4,5,10,10]
let newAverage = 0

function average(arr) {
    for (let i = 0; i < arr.length; i++) {
     newAverage += arr[i] / arr.length
    }
    return newAverage
}

console.log(average(givenArr))