// ## 1. Average of two numbers
// Write a function that takes in two numbers as input and returns their average
// Input: 4,6
// Output: 5
console.log("QUESTION 1")
function avg (a,b) {
  return (a + b) / 2
}
console.log(avg(4,6))

// ## 2. Average of three numbers
// Write a function that takes in three numbers as input and returns their average
// Input: 1,3,5
// Output: 3
console.log("QUESTION 2")
function avg2 (a,b,c) {
  return (a + b + c) / 3
}
console.log(avg2(1,3,5))

// ## 3. Average of array
// Write a function that takes in an array of numbers as input and returns
// their average.
// Input: [1,2,3,4,5,10,10]
// Output: 5
console.log("QUESTION 3")
let input = [1,2,3,4,5,10,10]
const avgArr = (arr) => {
  return arr.reduce((acc,cur) => {
    return (acc + cur)
  })/ arr.length
}
console.log(avgArr(input))

//  ## 4. Remove even numbers
// Write a function that returns a new array with all even numbers removed.
//  Input: [1,2,3,4,5,6]
//  Output: [1,3,5]
console.log("QUESTION 4")
let input2 = [1,2,3,4,5,6]

let evenArr = input2.filter(elem => {
  return elem % 2 !== 0
})
.map ((elem) => {
  return elem
})
console.log(evenArr)

// Write a function that checks to see whether every number in an array is positive.
// Input: [-4,3,-2,4]
// Output: false
console.log("QUESTION 5")
 const positiveNum = (currentElem) => (
 currentElem.every((elem) => {
   if(elem > 0){
    return true
  }else{
      return false
    }
 })
)
let input3 = [-4,3,-2,5]
console.log(positiveNum(input3))

// ## 6. Lowercase all strings
// Write a function that lowercases all strings in an array of strings.
// Input: ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
// Output: ["hello", "there", "these", "are", "some", "strings"]
console.log("QUESTION 6")
let input4 = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]

const lowerCase = (currentElem) => (
  currentElem.map(currentElem => {
    if(typeof(currentElem === "string")){
      return currentElem.toLowerCase()
    }
  })
)
console.log(lowerCase(input4))

// Write a function that combines an array of strings into a single string
// separated by spaces.
// Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
// Output: "It’s not a bug. It’s an undocumented feature!""
console.log("QUESTION 7")
input5 = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]

const combine = (arr, val) => {
  return arr + ' ' + val
}

let concat = input5.reduce(combine)
console.log(concat)

// ## 8. Random number
// Write a function that returns a random integer between 1 and n
// Input: 7
// Output: 3
console.log("QUESTION 8")
function randomNum (currentElem) {
  return Math.floor(Math.random() * currentElem + 1)
}
let choice = 7
console.log(randomNum(choice))

// ## 9. Sum of absolute values
// Write a function that returns the sum of the absolute values of an
// array.
// Input: [3,-4,5,-6]
// Output: 18
console.log("QUESTION 9")
let input6 = [3,-4,5,-6]
function sum (arr){
  let result = 0
  for(let i =0; i < arr.length; i++ ){
    result += Math.abs(arr[i])
  }
  return result
}
console.log(sum(input6))

// ## 10. Fahrenheit to Celsius
// Write a function that converts a temperature in Fahrenheit to Celsius
// Input: 212
// Output: 100
console.log("QUESTION 10")

function convert (num){
  return (num - 32) * 5 / 9
}
let input7 = 212
console.log(convert(input7) + " Celsius")
console.log("OBJECTS")

// ## Objects
// 1. Write an object that represents a User.  It should have a property
//  for the user's name, email address, and age.
console.log("QUESTION 1")

let user = {"name": "Kadijah",
            "email": "kadijahwilson@pursuit.org",
            "age": 25}
console.log(user)
// 2. Make 3 different user objects and store them in an array
console.log("QUESTION 2")

    let users = [{
         "name" : "John Doe",
         "email": "JD@gmail.com",
          "age": 33},
           {
           "name" : "Jane Doe",
            "email": "JA@gmail.com",
            "age" : 24},
           {
          "name" : "Smith Doe",
            "email" : "SD@gmail.com",
            "age" : 17
            }]
            console.log(users)
// 3. Write a function that takes in an array of User objects,
// and returns an array with only their email addresses
console.log("QUESTION 3")

const userObj = (arr) => {
 return arr.map((users) => {
   return {
     email: users.email
   }
 })
}
console.log(userObj(users))

// 4. Write a function that takes in an array of User objects,
//  and returns the average age of all users. Rounded down.
console.log("QUESTION 4")

const userAge = (arr) => {
  let sum = arr.reduce((acc, curr) =>{
    return curr.age + acc
  },0)
let avgAge = (sum / arr.length)
return Math.floor(avgAge)
}
  console.log(userAge(users))

  // 5. Write a function that takes in an array of User objects
  // and returns whether or not all users have an age greater than 18
  console.log("QUESTION 5")

const greaterThan = (arr) => {
  let total = arr.filter((curr) => {
    if( curr.age > 18){
      return true;
    }else{
      return false;
    }
  })
  return total;
}
console.log(greaterThan(users))

// 6. Write an object that represents a Recipe.  It should have a property
// for the recipe's ingredients, name, and how long it will take to make.
console.log("QUESTION 6")
let recipe = {
  "name": "Taco",
  "ingredients": ["ground beef","cheese", "lettuce","taco shell"],
  "time": "1 hour"
}
console.log(recipe)
// // 7. Make 3 different recipe objects and store them in an array.
console.log("QUESTION 7")

let recipes = [
  {
    "name": "Cheeseburger Tomatoes",
    "ingredients": ["Ground Beef", "Yellow Onion", "Garlic", "Cheddar Cheese", "Pickles", "Lettuce", "Ketchup", "Mustard", "Salt", "Pepper"],
    "minutes": 30
  },
  {
    "name": "Mac n' Cheese",
    "ingredients": ["Macaroni", "Milk", "Bacon", "Breadcrumbs", "Unsalted Butter", "Mustard", "Cheddar Cheese", "Flour", "Salt", "Pepper"],
    "minutes": 90
  },
  {
    "name": "Tomato Sauce",
    "ingredients": ["Garlic", "Yellow Onion", "Red Pepper Flakes", "Oregano", "Tomato Paste", "San Marzano Tomatoes", "Basil", "Unsalted Butter", "Salt", "Pepper"],
    "minutes": 120
  }
]
console.log(recipes)

// 8. Write a function that takes in an array of Recipe objects and
// returns the recipe that will take the least amount of time to make.
console.log("QUESTION 8")
const lessTime = (array) => {
  let time = array.reduce((min, elem) => {
      if (elem.minutes < min){
        return elem
      }else{
        return min
      }
    })
  let cookTime = (time)
  return cookTime
}
console.log(lessTime(recipes))

// 9. Write a function that takes in an array of Recipe objects and
// returns an array containing all the ingredients you need to make
// all of the recipes.
console.log("QUESTION 9")

const getAllIngredients = (array) => {
  let allIngredients = [];
    let uniqueIngredients = [];
    array.forEach(recipe => {
    allIngredients = allIngredients.concat(recipe.ingredients)
  });
  for(let crrIngredients of allIngredients){
    if(uniqueIngredients.includes(crrIngredients) === false){
      uniqueIngredients.push(crrIngredients)
    }
  }
    return uniqueIngredients
}
let myIngredients = getAllIngredients(recipes)
console.log(myIngredients)

// 10. Write a function that takes in an array of Recipe objects
// and an array of ingredients and returns all the recipes that
// you are able to make.
console.log("QUESTION 10")

const allIngredientsForRecipe = (recipe, allIngredients) =>{
return recipe.ingredients.every(crrIng => {
return  allIngredients.includes(crrIng)
})
}
const checkMyIngredients = (recipes, ingredients) => {
let filteredRecipes = recipes.filter(recipe => {
  if(allIngredientsForRecipe(recipe, ingredients)) {
    return true
  }else{
    return false
  }
})
return filteredRecipes
}
 console.log(allIngredientsForRecipe(recipes[0], myIngredients))
let answer = checkMyIngredients(recipes, myIngredients)
console.log(answer)
