// # Mid-Unit-1 Review Lab
//
// In this lab, we will review two key topics covered so far: Objects and Functions.  These are two vital topics for understanding JavaScript fundamentals, and will be used heavily as we build web apps in later units.
//
//
// ## Functions
//
// ## 1. Average of two numbers
//
// Write a function that takes in two numbers as input and returns their average
//
// ```
// Input: 4,6
// Output: 5
// ```
//


function averageNum(num1, num2){
  return (num1 + num2)/2
}
console.log(averageNum(4, 6))


// ## 2. Average of three numbers
//
// Write a function that takes in three numbers as input and returns their average
//
// ```
// Input: 1,3,5
// Output: 3
// ```


function averageNum2(num1, num2, num3){
  return (num1 + num2 + num3)/3
}
console.log(averageNum2(1,3,5))



// ## 3. Average of array
//
// Write a function that takes in an array of numbers as input and returns their average
//
// ```
// Input: [1,2,3,4,5,10,10]
// Output: 5
// // ```



function averageArr(arr){
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]/arr.length
  }
  return sum
}
console.log(averageArr([1,2,3,4,5,10,10]))



// ## 4. Remove even numbers
//
// Write a function that returns a new array with all even numbers removed.
//
// ```
// Input: [1,2,3,4,5,6]
// Output: [1,3,5]
// ```



function newArr(arr){
  let arr2 = []
  for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 !== 0){
      arr2.push(arr[i])

    }
// console.log(arr2)
  }
  return arr2
}
console.log(newArr([1,2,3,4,5,6]))



// BONUS: If you didn't, rewrite this using an array method with a callback



function newArr(arr,callBack){
let arr2 = [];
 for(let i = 0; i < arr.length; i++){
   if (callBack(arr[i]) === true){
    arr2.push(arr[i]);
  }
 }
 return arr2;
}
function removeEvenNumbers(arr){
  return arr % 2 !== 0
}

console.log(newArr([1,2,3,4,5,6], removeEvenNumbers));



// ## 5. Make sure each number is positive
//
// Write a function that checks to see whether every number in an array is positive.
//
// ```
// Input: [-4,3,-2,4]
// Output: false
// ```



let arr = [-4,3,-2,4]
let postiveNum = arr.every(elem => {
  if(elem > 0){
    return true
  }else{
    return false
  }
})
console.log(postiveNum)



// BONUS: If you didn't, rewrite this using an array method with a callback
//
// ## 6. Lowercase all strings
//
// Write a function that lowercases all strings in an array of strings.
//
// ```
// Input: ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
// Output: ["hello", "there", "these", "are", "some", "strings"]
// ```



function lowerCase(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if (typeof arr[i] === "string"){
      newArr.push(arr[i].toLowerCase())
    }
  }
  return newArr;
}
console.log(lowerCase(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]))




// BONUS:
//   - A. If you didn't, rewrite this using an array method with a callback
//
//   - B. Make it work even if the array has mixed types inside so that input = `[1, 'HELLO', {one: 'uno'}]` would give output = `['hello']`
//
// ## 7. Combine strings
//
// Write a function that combines an array of strings into a single string separated by spaces.
//
// ```
// Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
// Output: "It’s not a bug. It’s an undocumented feature!""
// ```



function newArr(words){
  return words.join(" ")
}
console.log(newArr(["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]));



// ## 8. Random number
//
// Write a function that returns a random integer between 1 and n
//
// ```
// Input: 7
// Output: 3
// ```
// Bonus: Your function should return 1 or 7 inclusive



function randomNum(num) {
  return Math.floor(Math.random(num) * 7 + 1);
}

console.log(randomNum(7));



// ## 9. Sum of absolute values
//
// Write a function that returns the sum of the absolute values of an array
//
// ```
// Input: [3,-4,5,-6]
// Output: 18
// ```



 let arr = [3,-4,5,-6]

function add(total, currElem){
  return total + Math.abs(currElem)
}

let total = arr.reduce(add,0)
console.log(total)



// ## 10. Fahrenheit to Celsius
//
// Write a function that converts a temperature in Fahrenheit to Celsius
//
// ```
// Input: 212
// Output: 100
// ```



function tempToCel (fahrenheit){
let tempInCelcius = ((fahrenheit - 32) * (5/9));
  return tempInCelcius

}
console.log(tempToCel(212))



// ## Objects
//
// 1. Write an object that represents a User.  It should have a property for the user's name, email address, and age.


let user = {
  name: 'Kathy',
  emailAdress:'kathypuma96@gmail.com',
  age:'22'
}


// 2. Make 3 different user objects and store them in an array

let user = [
{
  name: 'Kathy',
  emailAdress:'kathypuma96@gmail.com',
  age:'22'
}
,
{
  name: 'John',
  emailAdress:'John12345@gmail.com',
  age:'23'
}
,
{
  name: 'Sarah',
  emailAdress:'Sarah12345@gmail.com',
  age:'24'
}
]


//
// 3. Write a function that takes in an array of User objects, and returns an array with only their email addresses

let mapEmail = user.map((info) => {
  return {
    email: info.emailAdress
  }

})
  console.log(mapEmail)



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
