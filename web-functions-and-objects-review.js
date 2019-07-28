// # Mid-Unit-1 Review Lab
//
// In this lab, we will review two key topics covered so far: Objects and Functions.  These are two vital topics for understanding JavaScript fundamentals, and will be used heavily as we build web apps in later units.
//
//
// ## Functions
//
// ## 1. Average of two numbers
//
// Write a function that takes in two numbers
//as input and returns their average
//
// ```
// Input: 4,6
// Output: 5
// let num1 = 4;
// let num2 = 6
// function Average (num1, num2) {
//   return (num1 + num2) / 2
// }
// let result = Average(num1, num2)
// console.log(result);
// // ```
//=================================================================
// ## 2. Average of three numbers
//
// Write a function that takes in three numbers as input and returns their average
//
// ```
// Input: 1,3,5
// Output: 3
// let input = [1, 3, 5]
// const arrayAverage = ( array ) => {
//   let sum = 0;
//   for ( let i = 0; i < array.length; i++){
//     sum += array[i]
//   }
// return sum / input.length;
// }
// console.log(arrayAverage(input))

// ```
//===============================================
// ## 3. Average of array
//
// Write a function that takes in an array of numbers as input and returns their average
//
// ```
// Input: [1,2,3,4,5,10,10]
// Output: 5
// let input3 = [1,2,3,4,5,10,10]
// const arrayAverage3 = ( array ) => {
//     let sum3 = 0;
//     for ( let i = 0; i < array.length; i++){
//       sum3 += array[i]
//     }
//   return sum3 / input3.length;
//   }
// console.log(arrayAverage3(input3))
// ===============================================
// ## 4. Remove even numbers
//
// Write a function that returns a new array
//with all even numbers removed.

// Input: [1,2,3,4,5,6]
// Output: [1,3,5]

// let arr4 = [1, 2, 3, 4, 5, 6];
// let filteredArr = arr4.filter((currentElement) => {
//  if (currentElement % 2 !=0) {
//     return true
//     }
//    })
//  console.log(filteredArr)
// // ```
//==========
// let arr4 = [1, 2, 3, 4, 5, 6];
// Array.prototype.myFilter = function(callback){
//   let outputArr = [];
//   for ( i = 0; i < this .length; i++){
//     if (callback(this[i]) === true){
//       outputArr.push(this[i])
//     }
// }
// return outputArr;
// };
// const oddNumber = (currentElement) =>{
// if (currentElement % 2 !=0) {
//    return true
//  }
// }
//  console.log(arr4.myFilter(oddNumber));

// BONUS: If you didn't, rewrite this using an array method with a callback
//
// ## 5. Make sure each number is positive
//
// Write a function that checks to see whether every number in an array is positive.
//
// ```
// Input: [-4,3,-2,4]
// Output: false
// ```
//===============================================
// BONUS: If you didn't, rewrite this using an array method with a callback
// let arr5 = [-4, 3, -2, 4];
// let arrPositive = arr5.every(elem => {
//   if (elem === 1 ){
//     return true
//   }
//   return false
// })
// console.log(arrPositive)
// ## 6. Lowercase all strings
//
// Write a function that lowercases all strings in an array of strings.
//
// ```
// Input: ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
// Output: ["hello", "there", "these", "are", "some", "strings"]
//  let input6 = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
//  const lowerCase = (arr)=>{
// let allStringArr = arr.filter(elm =>typeof elm === "string")
// return allStringArr.map(elm => elm.toLowerCase());
//  }
//  let newArr6 = lowerCase(input6);
//  console.log(newArr6);
// BONUS:
//   - A. If you didn't, rewrite this using an array method with a callback
//
//   - B. Make it work even if the array
//has mixed types inside so that
//input = `[1, 'HELLO', {one: 'uno'}]` would give output = `['hello']`
// let input6 = [1, 'HELLO', {one: 'uno'}];
// const lowerCase = (arr)=>{
// let allStringArr = arr.filter(elm =>typeof elm === "string")
// return allStringArr.map(elm => elm.toLowerCase());
// }
// let newArr6 = lowerCase(input6);
// console.log(newArr6);
// ## 7. Combine strings
//
// Write a function that combines an array of strings into a single string separated by spaces.
//
// ```
// Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
// Output: "It’s not a bug. It’s an undocumented feature!""
// ```
// let myArray7 = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
// Array.prototype.myJoin = function(separator) {
// 			    let str = '';
// 			    if (separator === undefined){
// 			        separator = ' '
// 			    }
// 			    for (let i = 0; i < this.length - 1; i++){
// 			        str += this[i] + separator;
// 			    }
// 			    str += this[this.length-1];
// 			    return str;
// 			}
//
// 			let result7 = myArray7.myJoin();
//
// 			console.log(result7);

// ## 8. Random number
//
// Write a function that returns a random integer between 1 and n
//
// ```
// Input: 7
// Output: 3
// function getRandomInt(num) {
//   return Math.floor(Math.random() * Math.floor(num)) ;
// }
// console.log(getRandomInt(7));

// console.log(Math.random());
// ```
// Bonus: Your function should return 1 or 7 inclusive
//
// ## 9. Sum of absolute values
//
// Write a function that returns the sum of the absolute values of an array
//
// ```
// Input: [3,-4,5,-6]
// Output: 18
// ```
let input9 = [3,-4,5,-6];

function sumOfAbsolute(arr) {
  var result = 0
  for(var i = 0; i < arr.length; i++){
    result += Math.abs(arr[i] + arr[i++]);
  }
  return result;
}
console.log(sumOfAbsolute(input9));

// ## 10. Fahrenheit to Celsius
//
// Write a function that converts a temperature in Fahrenheit to Celsius
//
// ```
// Input: 212
// Output: 100
// ```
//
// ## Objects
//
// 1. Write an object that represents a User.  It should have a property for the user's name, email address, and age.
//
// 2. Make 3 different user objects and store them in an array
//
// 3. Write a function that takes in an array of User objects, and returns an array with only their email addresses
//
// 4. Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.
//
// 5. Write a function that takes in an array of User objects and returns whether or not all users have an age greater than 18
//
// 6. Write an object that represents a Recipe.  It should have a property for the recipe's ingredients, name, and how long it will take to make.
//
// 7. Make 3 different recipe objects and store them in an array.
//
// 8. Write a function that takes in an array of Recipe objects and returns the recipe that will take the least amount of time to make.
//
// 9. Write a function that takes in an array of Recipe objects and returns an array containing all the ingredients you need to make all of the recipes.
//
// Bonus: Remove duplicate ingredients from the final array
//
// 10. Write a function that takes in an array of Recipe objects and an array of ingredients and returns all the recipes that you are able to make.
