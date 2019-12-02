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

// // ## 3. Average of array

// // Write a function that takes in an array of numbers as input and returns their average
// // ```
// // Input: [1,2,3,4,5,10,10]
// // Output: 5
// // ```
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

// // another way:

// const noEvens = (arr) => {
//     return arr.filter(el => {
//       if(el % 2 === 1)
//       return el
//     })
//   }
//   console.log(noEvens([1,2,3,4,5,6,7,8,9]))

// ## 5. Make sure each number is positive

// Write a function that checks to see whether every number in an array is positive.
// ```
// Input: [-4,3,-2,4]
// Output: false
// ```
// const checkPositive = (arr) => {
//     let ans = " "
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] > 0){
//             ans = true
//         } else (ans = false)
//     } 
//     return ans
// }
// console.log(checkPositive([2,4,6,8,9,4,0]))

// another way:

// const allPositive = (arr) => {
//     arr.every (el => {
//         if(el > 0) {
//         return true
//         }
//     })
// }
// console.log(allPositive(-1,2,-33,4,5,6,7,8,9,10))

// ## 6. Lowercase all strings

// Write a function that lowercases all strings in an array of strings.

// const toLowerCase = (arr) => {
//         arr.map(el => {
//         if(typeof el === "string") {
//         return el = el.toLowerCase()
//         }
//     })
//     return arr
//   }
// console.log(toLowerCase(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]))

// //another way:

// const toLowerCaseOne = (arr) => {
//     let lowerCaseStr = []
//     for (let i = 0; i < arr.length; i++) {
//         if(typeof arr[i] === 'string') {
//         lowerCaseStr.push(arr[i].toLowerCase()) 
//         }
//     }
//     return lowerCaseStr
// }
// console.log(toLowerCaseOne(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]))

// ```
// Input: ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
// Output: ["hello", "there", "these", "are", "some", "strings"]
// ```

// BONUS: 
//   - A. If you didn't, rewrite this using an array method with a callback

//   - B. Make it work even if the array has mixed types inside so that input = `[1, 'HELLO', {one: 'uno'}]` would give output = `['hello']` 

// ## 7. Combine strings

// Write a function that combines an array of strings into a single string separated by spaces.

// const makeASentence = (arr) => {
//     return arr.join(" ")
// }
// console.log(makeASentence(["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]))

// ```
// Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
// Output: "It’s not a bug. It’s an undocumented feature!""
// ```

// ## 8. Random number

// Write a function that returns a random integer between 1 and n

// const randomInteger = (num) => {
//     return Math.floor(Math.random() * num - 1);
// }
// console.log(randomInteger(7))

// // ```
// // Input: 7
// // Output: 3
// // ```
// // Bonus: Your function should return 1 or 7 inclusive

// // ## 9. Sum of absolute values
// // Write a function that returns the sum of the absolute values of an array

// const sumAbsolutes = (arr) => {
//     let sum = 0
//     arr.forEach(el => {
//         sum += Math.abs(el)
//     })
//     return sum
// }
// console.log(sumAbsolutes([3,-4,5,-6]))

// // ```
// // Input: [3,-4,5,-6]
// // Output: 18

// // ## 10. Fahrenheit to Celsius
// // Write a function that converts a temperature in Fahrenheit to Celsius

// const termometer = (num) =>{
//     // let fahrenheit = num
//     let celsius = (num - 32) / 1.800 
//     return celsius
// }
// console.log(termometer(212))

// ```
// Input: 212
// Output: 100

// // 1. Write an object that represents a User.  
// It should have a property for the user's name, email address, and age.
let user = {name: "user", email:"prodigos@hotmail.com", age:40 }

// // 2. Make 3 different user objects and store them in an array

// // 3. Write a function that takes in an array of User objects, and returns an array with only their email addresses

// // 4. Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.

// // 5. Write a function that takes in an array of User objects and returns whether or not all users have an age greater than 18

// // 6. Write an object that represents a Recipe.  It should have a property for 
// the recipe's ingredients, name, and how long it will take to make.

// // 7. Make 3 different recipe objects and store them in an array.

// // 8. Write a function that takes in an array of Recipe objects and returns the recipe that will take the least 
// amount of time to make.

// // 9. Write a function that takes in an array of Recipe objects and returns an array 
// containing all the ingredients you need to make all of the recipes.

// // Bonus: Remove duplicate ingredients from the final array

// // 10. Write a function that takes in an array of Recipe objects and an array of ingredients 
// and returns all the recipes that you are able to make.






