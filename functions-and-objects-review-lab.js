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

const avgOfTwo = (arg1, arg2) =>{
return (arg1 + arg2)/2
}
console.log(avgOfTwo(4,6))

// ## 2. Average of three numbers
//
// Write a function that takes in three numbers as input and returns their average
//
// ```
// Input: 1,3,5
// Output: 3
// ```
const avgofThree = (arg1, arg2, arg3) =>{
  return(arg1 + arg2 +arg3)/3
}
console.log(avgofThree(15, 4, 22))

// ## 3. Average of array
//
// Write a function that takes in an array of numbers as input and returns their average
//
// ```
// Input: [1,2,3,4,5,10,10]
// Output: 5
// ```
let arr1 = [1,2,3,4,5,10,10]

const avgOfArr = (arr) =>{
  // let n = arr.length
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    sum+= arr[i]/arr.length
  }
  return sum
}
console.log(avgOfArr(arr1))

// ## 4. Remove even numbers
//
// Write a function that returns a new array with all even numbers removed.
//
// ```
// Input: [1,2,3,4,5,6]
// Output: [1,3,5]
// ```
let arr2 = [1,2,3,4,5,6]
const removeEven =(arr) =>{
  return arr2.filter((currentElem)=>{
    return currentElem % 2 !== 0
  })
}
console.log(removeEven(arr2))

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

let arr3 = [-4,3,-2,4]
const posArr = (arr) =>{
  return arr.every((currentElem)=>{
    if(currentElem < 0){
      return false
    }
    return true
  })
}
console.log(posArr(arr3))

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
let arr4 = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"];
const lowercase = (arr) =>{
  return arr.map((currentElem)=>{
    if(typeof(currentElem === 'string')){
      return currentElem.toLowerCase()
    }
    else{
      return currentElem
    }
  })
}
console.log(lowercase(arr4))
//
// BONUS:
//   - A. If you didn't, rewrite this using an array method with a callback
//
//   - B. Make it work even if the array has mixed types inside so that input = `[1, 'HELLO', {one: 'uno'}]` would give output = `['hello']`
// arr.filter((currentElem)=>{
//   return typeof(currentElem) === 'string'
// })
// console.log(lowercase(arr4))

// ## 7. Combine strings
//
// Write a function that combines an array of strings into a single string separated by spaces.
//
// ```
// Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
// Output: "It’s not a bug. It’s an undocumented feature!""
// ```
let arr5 = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]

const singleStr = (arr) =>{
return arr.reduce((acc, el)=>{
  return acc + " "+ el
})
}
console.log(singleStr(arr5))

// ## 8. Random number
//
// Write a function that returns a random integer between 1 and n
//
// ```
// Input: 7
// Output: 3
// ```
// Bonus: Your function should return 1 or 7 inclusive

function randomInt(n){
  return Math.floor(Math.random() * n)
}
console.log(randomInt(4))



// ## 9. Sum of absolute values
//
// Write a function that returns the sum of the absolute values of an array
//
// ```
// Input: [3,-4,5,-6]
// Output: 18
// ```

let arr6 = [3,-4,5,-6]
const sumOfAbsVal = (arr) =>{
  return arr.reduce((acc, currentEl)=>{
    return acc += Math.abs(currentEl) // find the absolute value with .abs and then reduce to get one number.
  })
}
console.log(sumOfAbsVal(arr6))

// ## 10. Fahrenheit to Celsius
//
// Write a function that converts a temperature in Fahrenheit to Celsius
//
// ```
// Input: 212
// Output: 100
// ```
const convertFToC = (num) =>{
 return ((num - 32) * (5/9))
}
console.log(convertFToC(212))

// ## Objects
//
// 1. Write an object that represents a User.  It should have a property for the user's name, email address, and age.
let user = {
  username: "name",
  email: "name@gmail.com",
  age: 24
}

// 2. Make 3 different user objects and store them in an array
let multUsers = [
  { username: "ashley",
    email:"ashley@idk.org",
    age:22

  },
  { username: "carl",
    email: "carl@iworkhere.net",
    age:27
  },
  { username: "timothy",
    email: "timtim@bing.org",
    age: 25}
  ]

// 3. Write a function that takes in an array of User objects, and returns an array with only their email addresses
let email = multUsers.map((currentElem)=>{
    return {
      mailing: currentElem.email // keying into the the value of email
    }
  })
console.log(email)

// 4. Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.
// const avgOfAge = (arr) =>{
//   let sum = 0
//   for(let i = 0; i < arr.length; i++){
//     sum+= arr[i]/arr.length
//   }
//   return sum
// }

// // 5. Write a function that takes in an array of User objects and returns whether or not all users have an age greater than 18
// let under18 = multUsers.every((currentEl, i, arr)=>{
//
//   })
//
// console.log(under18)

// 6. Write an object that represents a Recipe.  It should have a property for the recipe's ingredients, name, and how long it will take to make.
let firstRecipe = {
  name: 'Chicken Nachos',
  ingredients: ['Tortilla Chips', 'Cheese', 'Chicken', 'Tomatos', 'Onions', 'Sour Cream', 'Jalapeños', 'Hot Sauce'],
  minutes: 30
}
// 7. Make 3 different recipe objects and store them in an array.
let recipes = [
  {
    name: 'Nachos',
    ingredients: ['Tortilla Chips', 'Cheese', 'Chicken', 'Tomatos', 'Onions', 'Sour Cream', 'Jalapeños', 'Hot Sauce'],
    minutes: 30
  },
  {
    name: "Mac n' Cheese",
    ingredients: ["Macaroni", "Milk", "Breadcrumbs", "Unsalted Butter", "Mustard", "Cheddar Cheese", "Flour", "Salt", "Pepper"],
    minutes: 90
  },
  {
    name: "Avocado Toast",
    ingredients: ['Avocado', 'Cilantro', 'Black Pepper', 'Lime', 'Brown Rice Flour', 'Baking Powder', 'Eggs', 'Olive Oil', 'Everything Seasoning'],
    minutes: 5
  }
]
// 8. Write a function that takes in an array of Recipe objects and returns the recipe that will take the least amount of time to make.
recipes.filter(recipe =>{

})
// 9. Write a function that takes in an array of Recipe objects and returns an array containing all the ingredients you need to make all of the recipes.

//Loop through the recipes to get ingredients of all of them
let allIngredients = []
recipes.forEach(recipe =>{ // will pass every recipe individually
allIngredients = allIngredients.concat(recipe.ingredients) // concat joins all ingredients as strings in just ONE array
})
console.log(allIngredients)
// Bonus: Remove duplicate ingredients from the final array

// 10. Write a function that takes in an array of Recipe objects and an array of ingredients and returns all the recipes that you are able to make.
