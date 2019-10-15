// ## Functions

// ## 1. Average of two numbers

// Write a function that takes in two numbers as input and returns their average

// ```
// Input: 4,6
// Output: 5
// ```

// const average = (num1,num2) => {
//     return (num1 + num2) / 2
// }
// console.log(average(5,5));

// ## 2. Average of three numbers

// Write a function that takes in three numbers as input and returns their average

// ```
// Input: 1,3,5
// Output: 3
// ```

// const average = (num1, num2, num3) => {
//     return (num1 + num2 + num3) / 3
// }
// console.log(average(20, 15, 42));

// ## 3. Average of array

// Write a function that takes in an array of numbers as input and returns their average
// ```
// Input: [1,2,3,4,5,10,10]
// Output: 5
// ```
// const averageArray = (arr) => {
//     let sum = 0
//     for(i = 0; i < arr.length; i++){
//         sum += arr[i]
//     } 
//     return sum/arr.length
// }
// console.log(averageArray([1,2,3]))

// ## 4. Remove even numbers

// Write a function that returns a new array with all even numbers removed.

// ```
// Input: [1,2,3,4,5,6]
// Output: [1,3,5]
// ```

// const removeEven = (arr) => {
//     let oddNum = []
//     for(i = 0; i < arr.length; i++){
//         if (arr[i] % 2 === 1) {
//             oddNum.push(arr[i]);
//         }
//     }
//     return oddNum
// }
// console.log(removeEven([1,2,3,4,5]))

// ## 5. Make sure each number is positive

// Write a function that checks to see whether every number in an array is positive.
// ```
// Input: [-4,3,-2,4]
// Output: false
// ```
const checkPositive = (arr) => {
    let ans = " "
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0){
            ans = true
        } else (ans = false)
    } 
    return ans
}
console.log(checkPositive([2,4,6,8,9,4,0]))