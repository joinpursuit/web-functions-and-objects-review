// ## Functions
//
// ## 1. Average of two numbers
//
// Write a function that takes in two numbers as input and returns their average
const avgOf2 = (n1,n2) => (n1 + n2) / 2
console.log(avgOf2(4,6))

// ## 2. Average of three numbers
//
// Write a function that takes in three numbers as input and returns their average
const avgOf3 = (n1,n2,n3) => (n1 + n2 + n3) / 3
console.log(avgOf3(1,3,5))

// ## 3. Average of array
//
// Write a function that takes in an array of numbers as input and returns their average
const avgOfArr = (arr) => (arr.reduce((a,b) => a + b)) / arr.length
console.log(avgOfArr([1,2,3,4,5,10,10]))

// ## 4. Remove even numbers
//
// Write a function that returns a new array with all even numbers removed.
const rmvEven = (arr) => (arr.filter(a => a % 2 !== 0))
console.log(rmvEven([1,2,3,4,5,6]))

// ## 5. Make sure each number is positive
//
// Write a function that checks to see whether every number in an array is positive.
const positiveCheck = (arr) => {
  let answer = true
  arr.forEach(a => {
   if (a < 0) {
   answer = false
 }
})
  return answer
}
console.log(positiveCheck([-4,3,-2,4]))

// ## 6. Lowercase all strings
//
// Write a function that lowercases all strings in an array of strings.
const lowerCase = arr => arr.map(a => a.toLowerCase())
console.log(lowerCase(['HELLO', 'THERE']))

// ## 7. Combine strings
//
// Write a function that combines an array of strings into a single string separated by spaces.
const stringCombiner = arr => arr.reduce((a,b) => a + " " + b)
console.log(stringCombiner(["It's", "not", "a", "bug."]))

// ## 8. Random number
//
// Write a function that returns a random integer between 1 and n
const randomUpTo = num => Math.floor((Math.random() * num) + 1)
console.log(randomUpTo(7))

// ## 9. Sum of absolute values
//
// Write a function that returns the sum of the absolute values of an array
const absoluteValues = arr => arr.map(a => Math.abs(a)).reduce((a,b) => a + b)
console.log(absoluteValues([3,-4,5,-6]))

// ## 10. Fahrenheit to Celsius
//
// Write a function that converts a temperature in Fahrenheit to Celsius
const fToC = num => (num - 32) / 1.8
console.log(fToC(212))

// ## Objects
//
// 1. Write an object that represents a User.  It should have a property for the user's name, email address, and age.
let user1 = {
  name: 'Sergio',
  email: 'sergiocohensalama@gmail.com',
  age: 32
}

// 2. Make 3 different user objects and store them in an array
let user2 = {
  name: 'Stephanie',
  email: 'ramirez.e.steph@gmail.com',
  age: 25
}

let user3 = {
  name: 'Voniel',
  email: 'vonielbrown@pursuit.org',
  age: 23
}

let users = [user1,user2,user3]

// 3. Write a function that takes in an array of User objects, and returns an array with only their email addresses
const emailAddresses = arr => arr.map(a => a.email)
console.log(emailAddresses(users))

// 4. Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.
const avgAge = arr => Math.floor(arr.map(a => a.age).reduce((a,b) => a + b) / arr.length)
console.log(avgAge(users))

// 5. Write a function that takes in an array of User objects and returns whether or not all users have an age greater than 18
const checkAge = arr => {
  let output = true
  arr.forEach(a => {
  if (a.age < 19) {
    output = false
  }
})
  return output
}
console.log(checkAge(users))

// 6. Write an object that represents a Recipe.  It should have a property for the recipe's ingredients, name, and how long it will take to make.
let recipe1 = {
  ingredients: ['potatos', 'oil'],
  name: 'french fries',
  minutes: 10
}

// 7. Make 3 different recipe objects and store them in an array.
let recipe2 = {
  ingredients: ['eggs', 'butter'],
  name: 'scrambled eggs',
  minutes: 5
}

let recipe3 = {
  ingredients: ['oats', 'water'],
  name: 'oatmeal',
  minutes: 7
}

let recipes = [recipe1,recipe2,recipe3]

// 8. Write a function that takes in an array of Recipe objects and returns the recipe that will take the least amount of time to make.
let faster = arr => arr.map(a => a.minutes).reduce((a,b) => {
    if (a < b) {
      return a
    } else {
      return b
    }
})
console.log(`${faster(recipes)} minutes`)

// 9. Write a function that takes in an array of Recipe objects and returns an array containing all the ingredients you need to make all of the recipes.
let allIngredients = arr => {
  let ingredients = arr.map(a => a.ingredients)
  all = ingredients[0]
  for (let i = 1; i < ingredients.length; i ++) {
  all = all.concat(ingredients[i])
  }
  return all
}
let ingredients = allIngredients(recipes)
console.log(ingredients)
// Bonus: Remove duplicate ingredients from the final array
//
// 10. Write a function that takes in an array of Recipe objects and an array of ingredients and returns all the recipes that you are able to make.
function inside(str,arr) {
  if (arr.includes(str)) {
    return true
  } else {
    return false
  }
}

const possibles = (arr1, arr2) => {
  let options = []
  for (a of arr1) {
    let mapped = a.ingredients
    let result = true
    for (b of mapped) {
      if (arr2.includes(b) === false){
        result = false
      }
    }
    if (result === true) {
    options.push(a.name)
    }
  }
  return options
}
console.log(possibles(recipes, ['potatos','oil','eggs','oats','water']))
