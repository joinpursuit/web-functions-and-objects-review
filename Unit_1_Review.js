// # Mid-Unit-1 Review Lab
//
// In this lab, we will review two key topics covered so far: Objects and Functions.  These are two vital topics for understanding JavaScript fundamentals, and will be used heavily as we build web apps in later units.
//
//
// ## Functions
//
// ## 1. Average of two numbers
console.log("---------- Functions #1 ----------")

const averageOfTwo = (num1, num2) => {
  return (num1 + num2) / 2
}

console.log(averageOfTwo(4, 6))
console.log(averageOfTwo(4, 32))

console.log(" ")

// Write a function that takes in two numbers as input and returns their average
//
// ```
// Input: 4,6
// Output: 5
// ```
//
// ## 2. Average of three numbers
console.log("---------- Functions #2 ----------")

const averageOfThree = (num1, num2, num3) => {
  return (num1 + num2 + num3) / 3
}

console.log(averageOfThree(1, 3, 5))
console.log(averageOfThree(5, 21, 31))

console.log(" ")
// Write a function that takes in three numbers as input and returns their average
//
// ```
// Input: 1,3,5
// Output: 3
// ```
//
// ## 3. Average of array
console.log("---------- Functions #3 ----------")
let arr1 = [1, 2, 3, 4, 5, 10, 10]
let arr2 = [2, 4, 7, 7, 9, 10, 10]

const averageArr = (arr) => {
  let collector = 0
  for (let i = 0; i < arr.length; i++) {
    collector += arr[i]
  }
  return collector / arr.length
}

console.log(averageArr(arr1))
console.log(averageArr(arr2))

console.log(" ")

// Write a function that takes in an array of numbers as input and returns their average
//
// ```
// Input: [1,2,3,4,5,10,10]
// Output: 5
// ```
//
// ## 4. Remove even numbers
console.log("---------- Functions #4 ----------")

let arr3 = [1, 2, 3, 4, 5, 6]

const goodbyeEven = (arr) => {
  let collector = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      collector.push(arr[i])
    }
  }
  return collector
}

console.log(goodbyeEven(arr3))

console.log(" ")

// Write a function that returns a new array with all even numbers removed.
//
// ```
// Input: [1,2,3,4,5,6]
// Output: [1,3,5]
// ```
//
// BONUS: If you didn't, rewrite this using an array method with a callback



const arrCallback = (arr, callback) => {
  let collector = []
  arr.forEach((currentElem) => {
    if (callback(currentElem) === true) {
      collector.push(currentElem)
    }
  })
  return collector
}

const oddCheck = (num) => {
  if (num % 2 === 1) {
    return true
  } else {
    return false
  }
}

console.log(arrCallback(arr3, oddCheck))

console.log(" ")

// ## 5. Make sure each number is positive
console.log("---------- Functions #5 ----------")

let arr4 = [-4, 3, -2, 4]

const posCheck = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return false
    }
  }
  return true
}

console.log(posCheck(arr4))

console.log(" ")

// Write a function that checks to see whether every number in an array is positive.


// ```
// Input: [-4,3,-2,4]
// Output: false
// ```
//
// BONUS: If you didn't, rewrite this using an array method with a callback

const posCheckArr = (arr) => {
  let result = arr.every((currentElem) => {
    if (currentElem < 0) {
      return false
    }
  })
  return result
}

console.log(posCheckArr(arr4))

console.log(" ")

// ## 6. Lowercase all strings
console.log("---------- Functions #6 ----------")

let arr5 = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]

const allCapsArr = (arr) => {
  let collector = []
  for (let i = 0; i < arr.length; i++) {
    collector.push(arr[i].toLowerCase())
  }
  return collector
}

console.log(allCapsArr(arr5))

console.log(" ")
// Write a function that lowercases all strings in an array of strings.
//
// ```
// Input: ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
// Output: ["hello", "there", "these", "are", "some", "strings"]
// ```
//
// BONUS:
//   - A. If you didn't, rewrite this using an array method with a callback

const newArrEffected = (arr, callback) => {
  let collector = []
  arr.forEach((currentElem) => {
      collector.push(callback(currentElem))
  })
  return collector
}

const autoLowerCase = (str) => {
  return str.toLowerCase()
}

console.log(newArrEffected(arr5, autoLowerCase))

console.log(" ")

//   - B. Make it work even if the array has mixed types inside so that input = `[1, 'HELLO', {one: 'uno'}]` would give output = `['hello']`

let arr6 = [1, 'HELLO', {one: 'uno'}]

const newArrEffected2 = (arr, callback) => {
  let collector = []
  arr.forEach((currentElem) => {
    if (typeof currentElem === "string") {
      collector.push(callback(currentElem))
    }
  })
  return collector
}

console.log(newArrEffected2(arr6, autoLowerCase))

console.log(" ")

// ## 7. Combine strings
console.log("---------- Functions #7 ----------")

let arr7 = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]

const stringGlue = (arr) => {
  return arr.join(" ")
}

console.log(stringGlue(arr7))
console.log(" ")

//
// Write a function that combines an array of strings into a single string separated by spaces.
//
// ```
// Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
// Output: "It’s not a bug. It’s an undocumented feature!""
// ```
//
// ## 8. Random number
console.log("---------- Functions #8 ----------")

const randomNumGen = (num) => {
  return Math.floor(Math.random() * num) + 1
}

console.log(randomNumGen(7))

console.log(" ")
//
// Write a function that returns a random integer between 1 and n
//
// ```
// Input: 7
// Output: 3
// ```
// Bonus: Your function should return 1 or 7 inclusive
//
// ## 9. Sum of absolute values
console.log("---------- Functions #9 ----------")

let arr8 = [3, -4, 5, -6]

const sumOfAbsolute = (arr) => {
  let collector = 0
  for (let i = 0; i < arr.length; i++) {
    collector += Math.abs(arr[i])
  }
  return collector
}

console.log(sumOfAbsolute(arr8))

console.log(" ")
//
// Write a function that returns the sum of the absolute values of an array
//
// ```
// Input: [3,-4,5,-6]
// Output: 18
// ```
//
// ## 10. Fahrenheit to Celsius
console.log("---------- Functions #10 ----------")

const fToC = (num) => {
  return (num - 32) / 1.8
}

console.log(fToC(212))

console.log(" ")
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
console.log("---------- Objects #1, #2 [INVISIBLE] ----------")

let users = [
  {name: "Douglas MacKrell",
  email: "douglasmackrell@pursuit.org",
  age: 39
},
  {name: "Montague Smithe",
  email: "boomer57@earthlink.net",
  age: 72
},
  {name: "Othello VonRyan",
  email: "BootyShaker9000@tmnt.org",
  age: 17
}
]

console.log(" ")

// 2. Make 3 different user objects and store them in an array

// SEE ABOVE!

// 3. Write a function that takes in an array of User objects, and returns an array with only their email addresses

console.log("---------- Objects #3 ----------")

const gimmieThemEmails = (arr) => {
  let collector = []
  for (let i = 0; i < arr.length; i++) {
    collector.push(arr[i].email)
  }
  return collector
}

console.log(gimmieThemEmails(users))

console.log(" ")

// 4. Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.
console.log("---------- Objects #4 ----------")

const averageUserAge = (arr) => {
  let collector = 0
  for (let i = 0; i < arr.length; i++) {
    collector += arr[i].age
  }
  return Math.floor(collector / arr.length)
}

console.log(averageUserAge(users))

console.log(" ")

// 5. Write a function that takes in an array of User objects and returns whether or not all users have an age greater than 18

console.log("---------- Objects #5 ----------")

const areYouOldEnough = (users) => {
  let boolian = users.every((user) => {
    if (user.age >= 18) {
      return true
    } else {
      return false
    }
  })
  return boolian
}

console.log(areYouOldEnough(users))


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
