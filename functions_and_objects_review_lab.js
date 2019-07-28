// // # Mid-Unit-1 Review Lab
// //
// // In this lab, we will review two key topics covered so far: Objects and Functions.
// // These are two vital topics for understanding JavaScript fundamentals, and will be
// // used heavily as we build web apps in later units.
// //
// //
// // ## Functions
// //
// // ## 1. Average of two numbers
// //
// // Write a function that takes in two numbers as input and returns their average
// //
// // ```
// // Input: 4,6
// // Output: 5
//
console.log('======answer#1=======')

const avgOfTwoNums = (num1, num2) => {
  return (num1 + num2)/ 2
}
avgOfTwoNums(4, 6)
 console.log(avgOfTwoNums(4, 6))
//
// // ```
// //
// // ## 2. Average of three numbers
// //
// // Write a function that takes in three numbers as input and returns their average
// //
// // ```
// // Input: 1,3,5
// // Output: 3
//
console.log('=======answer#2=======')
//
const avgOfThreeNums = (num1, num2, num3) => {
  return (num1 + num2 + num3) / 3
}
// avgOfThreeNums(1, 3, 5)
console.log(avgOfThreeNums(1, 3, 5))
//   // ```
// //
// // ## 3. Average of array
// //
// // Write a function that takes in an array of numbers as input and returns their average
// //
// // ```
// // Input: [1,2,3,4,5,10,10]
// // Output: 5
//
console.log('========answer#3=======')
//
let arr = [1,2,3,4,5,10,10]
function avgOfArr (array) {
  let sum = arr.reduce((acc, currElem) => {
    return acc + currElem
  }, 0)
  return sum / arr.length
}


// console.log(sum)
console.log(avgOfArr(arr))
//
//
// // ```
// //
// // ## 4. Remove even numbers
// //
// // Write a function that returns a new array with all even numbers removed.
// //
// // ```
// // Input: [1,2,3,4,5,6]
// // Output: [1,3,5]
//
console.log('========answer#4=========')

let arr1 = [1,2,3,4,5,6]
const oddOnly = (arr) => {
  let removeEvenNums = arr1.filter((elem) => {
    if (elem % 2 !== 0) {
      return elem
}
})
return removeEvenNums
}

console.log(oddOnly(arr1))
// // ```
// //
// // BONUS: If you didn't, rewrite this using an array method with a callback
// //
// // ## 5. Make sure each number is positive
// //
// // Write a function that checks to see whether every number in an array is positive.
// //
// // ```
// // Input: [-4,3,-2,4]
// // Output: false
//
console.log('======answer#5=======')

let arr2 = [-4,3,-2,4]
const noNeg = (arr) => {
  let allPos = arr2.every(currElem => {
      if (currElem >= 0) {
      return true
    } else if (currElem < 0) {
      return false
}
})

return allPos
}
console.log(noNeg(arr2))
// ```
//
// BONUS: If you didn't, rewrite this using an array method with a callback
//
// ## 6. Lowercase all strings
//
// Write a function that lowercases all strings in an array of strings.
//
// ```
// Input: ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
// Output: ["hello", "there", "these", "are", "some", "strings"]

console.log('======answer#6======')

let arr3 = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
function lowerCase (arr) {

   let allStrLowerCase = arr.map(currElem => {

     return currElem.toLowerCase()

   })
   return allStrLowerCase
}
console.log(lowerCase(arr3))


// ```
//
// BONUS:
//   - A. If you didn't, rewrite this using an array method with a callback
//
//   - B. Make it work even if the array has mixed types inside so that input = `[1, 'HELLO',
// {one: 'uno'}]` would give output = `['hello']`

console.log('=====6b===========')
let array3 = [1, 'HELLO', {one: 'uno'}]
function strLowerCase (arr) {
  let str = arr.map(currElem => {
    if (typeof currElem === "string") {
    return currElem.toLowerCase()
  }
}) .filter(currElem => {
    return currElem
  })
  return str
}
    console.log(strLowerCase(array3))
//
// ## 7. Combine strings
//
// Write a function that combines an array of strings into a single string separated by spaces.
//
// ```
// Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
// Output: "It’s not a bug. It’s an undocumented feature!""
//
// console.log('=====answer#7========')
//
// let arr4 = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
// const combineStrArr = (arr,) => {
//   let str = ""
//   if (arr === undefined) {
//     arr === " "
//   } else if (",") {
//   arr4.replace(/,/g," ")
//   }
// return "".concat(arr4)
// }
// let result = arr4.join()
// console.log(combineStrArr(arr4))




  // let str = ""
  // if (arr === undefined)
  // return
  // for (let i = 0; i < arr4.length; i++) {
  //
  // }

  // let newArr = arr.map(currElem => {
  //   if (typeof currElem === "string"){}
  //       return !""




// ```
//
// ## 8. Random number
//
// Write a function that returns a random integer between 1 and n
//
// ```
// Input: 7
// Output: 3
// ```
// Bonus: Your function should return 1 or 7 inclusive

console.log('======answer#8========')

// const randomNum = (num ) => {
// return Math.floor (Math.random() * Math.floor(num))
//
// }
// console.log(randomNum(7))


//
// ## 9. Sum of absolute values
//
// Write a function that returns the sum of the absolute values of an array
//
// ```
// Input: [3,-4,5,-6]
// Output: 18

console.log('======answer#9=======')


// ```
//
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
// 1. Write an object that represents a User.  It should have a property for the
//user's name, email address, and age.
console.log('======#1========')
let user = {
    username: "jjjj",
    email: "jjjj@gmail.com",
    age : 100
}
console.log(user)

//
// 2. Make 3 different user objects and store them in an array
console.log('=======#2=======')
let user1 = [
  {
    username: 'nnnnn',
    email: 'nnnnn@mail.com',
    age: 101
  },
  {
    username: 'oooo',
    email: 'oooo@mail.com',
    age: 102
  },
  {
    username: 'pppp',
    email: 'pppp@mail.com',
    age: 103
  }
  ]
console.log(user1)

// 3. Write a function that takes in an array of User objects, and returns an array
//  with only their email addresses

console.log('======#3=======')

const userObject = (obj) => {
  //return obj.email

let user2 = [
  {
    username: 'nnnnn',
    email: 'nnnnn@mail.com',
    age: 101
  },
  {
    username: 'oooo',
    email: 'oooo@mail.com',
    age: 102
  },
  {
    username: 'pppp',
    email: 'pppp@mail.com',
    age: 103
  }
  ]
    return obj.email
}
  userObject(user2)
  console.log(user2.email)


//console.log(user2.email)
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
