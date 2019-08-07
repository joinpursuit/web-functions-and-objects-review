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

const captureAverage = (num1, num2)=> {
let meanOne = ((num1 + num2)/ 2)
    return meanOne
}
console.log(captureAverage(7,9));
//
// ## 2. Average of three numbers
//
// Write a function that takes in three numbers as input and returns their average
//
// ```
// Input: 1,3,5
// Output: 3
// ```
// let numSet= 1,3,5
const captureAverageTwo = (numA, numB, numC) => Math.floor((numA + numB + numC) / 3)

console.log(captureAverageTwo(1,3,5));

// ## 3. Average of array
//
// Write a function that takes in an array of numbers as input and returns their average
//
// ```
// Input: [1,2,3,4,5,10,10]
// Output: 5
// ```
const arrThree = [1,2,3,4,5,10,10]

// const captureAverage3 = (arrayThree) =>{
//   let answer3 = 0
// for(i = 0; i < arrThree.length; i++){
// }
//   answer3 += arrayThree[i]
//   answer3.push(arrThree)
// }
// return answer / arrThree.length
 // console.log( captureAverage)
//



const captureAverage3 = (arrayThree) => {
  return arrayThree.reduce((accumulator,currentValue) => {
  return accumulator += currentValue
}) / arrayThree.length
}
console.log("answer", captureAverage3(arrThree));


// ## 4. Remove even numbers
//
// Write a function that returns a new array with all even numbers removed.
//
// ```
// Input: [1,2,3,4,5,6]
// Output: [1,3,5]
// ```
let inputFour = [1,2,3,4,5,6]

const allNum = (arrFour) => {
  if(evenNumOnly = arrFour % 2)
    return evenNumOnly
}
let answer4 = inputFour.filter(allNum);
console.log(answer4)


// array method with callback
const allNum1 = (arrFour1) => { return arrFour1.filter( el => { return 0 !== el % 2 })}
console.log(allNum1(inputFour))

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
let inputFive = [-4,3,-2,4]
//
const capturePositveInterger= (arrFive)=> {
  if(positiveNum = arrFive > 0)
  return positiveNum
}
let answerFive = inputFive.every(capturePositveInterger)
console.log(answerFive)


// array method with callback
const capturePositveInterger1 = (arrFive1)=> {
  return arrFive1.every(el => { return el > 0})
}
console.log(capturePositveInterger1(inputFive))

// BONUS: If you didn't, rewrite this using an array method with a callback
//
// ## 6. Lowercase all strings
//
// Write a function that lowercases all strings in an array of strings.
// ```
// Input: ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
// Output: ["hello", "there", "these", "are", "some", "strings"]
// ``
// BONUS:
//   - A. If you didn't, rewrite this using an array method with a callback
//
//   - B. Make it work even if the array has mixed types inside so that input = `[1, 'HELLO', {one: 'uno'}]` would give output = `['hello']`
//use filter on a string then map lowercase callback type of el = string

let inputSix = ["HELLO",2, "THERE", "THESE", "ARE", "SOME", "STRINGS"]

const allString = (arrayOfString)=> {
return arrayOfString.filter ( el => {
  if( typeof el === "string"){
    return el//.map(el => el.toLowerCase()) }
}
}).map(el => el.toLowerCase())
}
console.log(allString(inputSix));

// ## 7. Combine strings
//
// Write a function that combines an array of strings into a single string separated by spaces.
//
// ```
// Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
// Output: "It’s not a bug. It’s an undocumented feature!""
// ```
let input7 = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]

const combineStr = (array7)=> {
  return array.join(' ')
}
console.log(combineStr(input7))


/* function combineStr(arr {
  let answer = " "
  for(let word in arr) {
    answer += " " + arr[word]
  }
  return answer
}

    console.log(arr[word])

    //
    function
/* const combineStr = (array7)=> {
let answer = " "
array7.forEach(el=>
)
//
// ## 8. Random number
//
// Write a function that returns a random integer between 1 and n
//
// ```
 Input: 7
// Output: 3

let input8 = 7

const captureRandomInterger = (num) => {
//   let random = Math.floor(Math.random() * num) + 1;
//   return random
// }
// console.log(captureRandomInterger(input8));


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
const noAbs =(array9)=> {
  return array.reduce ((acc, currEl))=> {
    return acc += Math.abs(currEl)
  })
}
console.log(noAbs(array9))
//
// ## 10. Fahrenheit to Celsius
//
// Write a function that converts a temperature in Fahrenheit to Celsius
//
// ```
// Input: 212
// Output: 100
// ```

const convertFtoC= (num10) => {
return (num - 32) * ( 5/9))
}
console.log(convertFToC( 212))





const convertTemp= (num10)=> {
// if( )
// ## Objects
//
// 1. Write an object that represents a User.  It should have a property for the user's name, email address, and age.
//
// 2. Make 3 different user objects and store them in an array
//
// 3. Write a function that takes in an array of User objects, and returns an array with only their email addresses
//
// 4. Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.

let user = [{
  {user1 : {
  name: " johanne ",
  age: 25 ,
}},

  {user2: {
  name: "Stephanie" ,
  age: 23
}},

  {user3: {
  name: "sihame"
  age: 22
  },
}
]
Answer====

function getAverage (arr4) {
  let sum =0
    for(let item of users) {
// console.log( item);
     for (let key in item) {
 // console.log( item[key].age);
      sum += item [key].age
    }
      }
      return sum / arr.length
    }
console.log(getAverage(users))
===========================


practice =========
console.log( user[0].user1.name) printing name
console.log(user[0].user1.name, user[0].user1.age); prints name and age
console.log(item [key].age) // prints age only


for(let iteam in users)
console.log(user[item])// get user1, user2 ---keys within the oibjects

change to 'of'

for(let item of users){
  console.log(item) //
printed user1 with keys and values

for( let element in item){
  console.log(element) //
prints only the key

console.log( item ([element]})
// prints the userr1 key , name key with values, age keys with values
}
}

console.log( )




//
// 5. Write a function that takes in an array of User objects and returns whether or not all users have an age greater than 18
//
// 6. Write an object that represents a Recipe.  It should have a property for the recipe's ingredients, name, and how long it will take to make.
//
// 7. Make 3 different recipe objects and store them in an array.
//
// 8. Write a function that takes in an array of Recipe objects and returns the recipe that will take the least amount of time to make.

let recipes =[
{ name: "Tacos",
  time: 10 },
{  name: "Grilled cheese" }
   time: 3 },
{  name: " Grilled teri Yaki "},
   time: 55 },
]
 answer **
function cooktime (array) {
let smallest = infinity
let smallest recipe =[]
for (let food of array8){
if(food.time > smallest){
smallest = food.time
smallest recipe= food.named
}
return obj.values(recipes)
}
console.log(cooktime (smallest))


// 9. Write a function that takes in an array of Recipe objects and returns an array containing all the ingredients you need to make all of the recipes.
let recipes =[
  { name: bread
 ingriendents:[ butter, jelly jam, grape jam, orange jam]
 minute: 30
}

  }
]
//loop throu the ingredients
const getAllIngriendts = (recipe)=> {
let allIngridients = []
/* total time complexity is 0(n (ingridients) * m (recipes)). where n is the length of the recipes array and m is the
length of the longest array of ingridients */
recipes.forEach(recipe=> { // sideeffect all ingriendents are outside the array
  //loop as many time as elements in recipes// o(n)
allIngridients= allIngridients.concat(recipe.ingredients)})
//(0) m represent how many (length)ingriedientsis is in the receipe not recipe
//another loop for concat pushing to add all ingriedients
//under the hook loop
})
/* /* 3 recipes
3 ingriedients per recipes
(n * m)=> (3 * 3)=> 9 //allIngridients
x =(n * m)
*/
let uniqueIngriedients = []
for(let crrIngriendt of allIngridients) { // 0(x => 0(n * m))// 0(n) loop
// if(!uniqueIngriedients. includes(crrIngriendt)) {
// 0()
if( uniqueIngriedients.includes(crrIngredient) === false) { /* another 0(n) under the hook loop */
  uniqueIngriedients.push(crrIngredient)
    }
  }
  /* (n * m) (n * m)=> 0(n ^ 2 * m ^ 2)
  0(x^2)
  0(x ** 2)
diff answer for time complexity */
return uniqueIngriedients
}
let myIngridients = getAllIngriendts(recipes)
console.log(crrIngriendts)


// let uniqueIngriedients = []
// for(let crrIngriendt of allIngridients)
// // if(!uniqueIngriedients. includes(crrIngriendt)) {
// if( uniqueIngriedients.includes(crrIngriendt) === false) {
//   uniqueIngriedients.push(crrIngriendt)
//   }
// }
// Bonus: Remove duplicate ingredients from the final array
//
// 10. Write a function that takes in an array of Recipe objects and an array of ingredients and returns all the recipes that you are able to make.
// fFrom the class examples
const doIHaveAllIngridientsForRecipe = (recipe,allIngredients) => {
  return recipe.ingredients.every(crrIng => {
    return allIngredients.includes(crrIng))
  })
}
// recipe[0]. ingredient.push('Potato')
// let answer10 = doIHaveAllIngridientsForRecipe(recipe[0], myIngredients)
// //doIHaveAllIngridientsForRecipe(recipe[0], myIngredients)
// console.log(answer10)
// }
//return doIHaveAllIngridientsForRecipe(recipe, ingredients)
const checkMyIngredients = (recipes, ingridents) => {
  let filteredRecipes= recipes.filter(recipe => {
    if(doIHaveAllIngridientsForRecipe(recipe, ingredients)) {
      // 0 (m * (n * m))=> 0( (nm * m ^ 2)) time complexity
      return true
    }else{
     return false
  }
})
    return filteredRecipes
}
myIngredients.pop()
let answer10 = checkMyIngredients(recipes, myIngridients)
//recipes[0].ingredients.push
console.log(answer10);
///////////
let recipes = [
  {
    name: "Cheeseburger Tomatoes",
    ingredients: ["Ground Beef", "Yellow Onion", "Garlic", "Cheddar Cheese", "Pickles", "Lettuce", "Ketchup", "Mustard", "Salt", "Pepper"],
    minutes: 30
  },
  {
    name: "Mac n' Cheese",
    ingredients: ["Macaroni", "Milk", "Bacon", "Breadcrumbs", "Unsalted Butter", "Mustard", "Cheddar Cheese", "Flour", "Salt", "Pepper"],
    minutes: 90
  },
  {
    name: "Tomato Sauce",
    ingredients: ["Garlic", "Yellow Onion", "Red Pepper Flakes", "Oregano", "Tomato Paste", "San Marzano Tomatoes", "Basil", "Unsalted Butter", "Salt", "Pepper"],
    minutes: 120
  }
]

const getAllIngredients = (recipes) => {
 let allIngredients = []

  // Loop as many time as elements in recipes

  // Total time complexity is O(n * m). Where n is the length of the
  // recipes array and m is the length of the the longest array of
  // ingredients
  recipes.forEach(recipe => { // O(n)
    allIngredients = allIngredients.concat(recipe.ingredients) // O(m)
  })

  // 3 recipes
  // 3 ingredients per recipe
  // (n * m) => (3 * 3) => 9 // allIngredients
  // x = (n * m)
  let uniqueIngredients = []
  for(let crrIngredient of allIngredients) { // O(x) => O(n * m)
  // if(!uniqueIngredients.includes(crrIngredient)) { //Check if ingredient is already in uniqueIngredients
    // O(n * m)
    if(uniqueIngredients.includes(crrIngredient) === false) { //Check if ingredient is already in uniqueIngredients
      uniqueIngredients.push(crrIngredient)
    }
  }
  // (n * m) * (n * m) => O(n^2 * m^2)
  // O(x^2)
  // O(x**2)
  return uniqueIngredients
}


let myIngredients = getAllIngredients(recipes)
// console.log(myIngredients)
// Remove duplicate ingredients from the final array

// 10. Write a function that takes in an array
// of Recipe objects and an array of ingredients
// and returns all the recipes that you are able
// to make.

const doIHaveAllIngredientsForRecipe = (recipe, allIngredients) => {
  return recipe.ingredients.every(crrIng => {
    return allIngredients.includes(crrIng)
  })
}

//doIHaveAllIngredientsForRecipe(recipes[0], myIngredients)

const checkMyIngredients = (recipes, ingredients) => {
   let filteredRecipes = recipes.filter(recipe => { // O(n)

    // O(m * (n * m)) => O(nm * m^2)
     if(doIHaveAllIngredientsForRecipe(recipe, ingredients)) {
       return true
     } else {
       return false
     }
   })
   return filteredRecipes
}

myIngredients.pop()
let answer = checkMyIngredients(recipes, myIngredients)
console.log(answer)
