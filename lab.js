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

// let givenArr = [1,2,3,4,5,10,10]
// let newAverage = 0

// function average(arr) {
//     for (let i = 0; i < arr.length; i++) {
//      newAverage += arr[i] / arr.length
//     }
//     return newAverage
// }

// console.log(average(givenArr))

// ## 4. Remove even numbers

// Write a function that returns a new array with all even numbers removed.

// ```
// Input: [1,2,3,4,5,6]
// Output: [1,3,5]
// ```

// let arr1 = [1,2,3,4,5,6]

// function noEvenNums(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let newArr = []
//         if (arr[i] % 3 === 0) {
//          newArr.push(arr[i]) 
//         } 
//         return newArr
//         }
// }

// console.log(noEvenNums(arr1))
// skipped, come back to it

// ## 5. Make sure each number is positive

// Write a function that checks to see whether every number in an array is positive.

// ```
// Input: [-4,3,-2,4]
// Output: false
// ```
// arr1 = [-4,3,-2,4]

// function positiveCheck(arr) {
//     for (let i = 0; i < arr.length ; i++) {
//         if (arr[i] > 0) {
//             console.log("This index " + arr[i] + " is " + true)
//         } else {
//             console.log("This index " + arr[i] + " is " + false)
//         }
//     }
// }

// console.log(positiveCheck(arr1))

// ## 6. Lowercase all strings

// Write a function that lowercases all strings in an array of strings.

// ```
// Input: ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
// Output: ["hello", "there", "these", "are", "some", "strings"]
// ```

// BONUS: 
//   - A. If you didn't, rewrite this using an array method with a callback

//   - B. Make it work even if the array has mixed types inside so that input = `[1, 'HELLO', {one: 'uno'}]` would give output = `['hello']` 


// let strings = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"];

// function lowerCase(arr) {
//     let lowerArr = []
//     let finalArr = []
//     for(let i = 0; i < strings.length; i ++){
//         lowerArr = arr[i].toLowerCase()
//         finalArr.push(lowerArr)
//         // lowerArr.push(arr[i])    
//     }
//     return finalArr;
// }
// console.log(lowerCase(strings));

// Write a function that combines an array of strings into a single string separated by spaces.

// ```
// Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
// Output: "It’s not a bug. It’s an undocumented feature!""

let arr1 = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
function stringCombine(arr) {
    return arr.join(" ")
}

console.log(stringCombine(arr1))