console.log(`# Mid-Unit-1 Review Lab

In this lab, we will review two key topics covered so far: Objects and Functions.  These are two vital topics for understanding JavaScript fundamentals, and will be used heavily as we build web apps in later units.


## Functions

\n----------------------------------------\n\n`);



// ## Question 1.
console.log(`\n\n\n\n========================================\n## Question 1.\n===============`);
console.log(`\n
Average of two numbers

Write a function that takes in two numbers as input and returns their average

'''
Input: 4,6
Output: 5
'''

\n----------------------------------------\n\n`);

const avg = (x, y) => (x + y) / 2
console.log(avg(4, 6));

// ## Question 2.
console.log(`\n\n\n\n========================================\n## Question 2.\n===============`);
console.log(`\n
Average of three numbers

Write a function that takes in three numbers as input and returns their average

'''
Input: 1,3,5
Output: 3
'''

\n----------------------------------------\n\n`);

const tripleAvg = (x, y, z) => (x + y + z) / 3
console.log(tripleAvg(1, 3, 5));

// ## Question 3.
console.log(`\n\n\n\n========================================\n## Question 3.\n===============`);
console.log(`\n
Average of array

Write a function that takes in an array of numbers as input and returns their average

'''
Input: [1,2,3,4,5,10,10]
Output: 5
'''

\n----------------------------------------\n\n`);

const arrayAvg = (array) => {
  let totalSum = 0
  for (let e of array) totalSum += e
  return totalSum / array.length
}

const arrayAvg2 = (array) => array.reduce((t, e) => t += e) / array.length

console.log(arrayAvg([1,2,3,4,5,10,10]));
console.log(arrayAvg2([1,2,3,4,5,10,10]));

// ## Question 4.
console.log(`\n\n\n\n========================================\n## Question 4.\n===============`);
console.log(`\n
Remove even numbers

Write a function that returns a new array with all even numbers removed.

'''
Input: [1,2,3,4,5,6]
Output: [1,3,5]
'''

BONUS: If you didn't, rewrite this using an array method with a callback

\n----------------------------------------\n\n`);

const removeAllEven = (array) => {
  let evenless = []
  for (let e of array) e % 2 ? evenless.push(e) : null
  return evenless
}

const removeAllEven2 = (array) => array.filter(e => e % 2)

console.log(removeAllEven([1,2,3,4,5,6]));
console.log(removeAllEven2([1,2,3,4,5,6]));

// ## Question 5.
console.log(`\n\n\n\n========================================\n## Question 5.\n===============`);
console.log(`\n
Make sure each number is positive

Write a function that checks to see whether every number in an array is positive.

'''
Input: [-4,3,-2,4]
Output: false
'''

BONUS: If you didn't, rewrite this using an array method with a callback

\n----------------------------------------\n\n`);

const areYouPositive = (array) =>{
  for (let e of array) if (e <= 0) return false
  return true
}

const areYouPositive2 = (array) => array.every(e => e > 0)

console.log(areYouPositive([-4,3,-2,4]));
console.log(areYouPositive2([-4,3,-2,4]));
console.log(areYouPositive([0,3,1,4])); //zero is not positive nor negative
console.log(areYouPositive2([0,3,1,4])); //zero is not positive nor negative
console.log(areYouPositive([2,3,1,4]));
console.log(areYouPositive2([2,3,1,4]));

// ## Question 6.
console.log(`\n\n\n\n========================================\n## Question 6.\n===============`);
console.log(`\n
Lowercase all strings

Write a function that lowercases all strings in an array of strings.

'''
Input: ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
Output: ["hello", "there", "these", "are", "some", "strings"]
'''

BONUS:
  - A. If you didn't, rewrite this using an array method with a callback

  - B. Make it work even if the array has mixed types inside so that input = '[1, 'HELLO', {one: 'uno'}]' would give output = '['hello']'

  \n----------------------------------------\n\n`);

const lowercaseAll = (array) => {
  let lowercased = []
  for (let e of array) typeof e === `string` ? lowercased.push(e.toLowerCase()) : null;
  return lowercased
}

const lowercaseAll2 = (array) => array.filter(e => typeof e === `string`).map(e => e.toLowerCase())

console.log(lowercaseAll(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]));
console.log(lowercaseAll([1, 'HELLO', {one: 'uno'}]));
console.log(lowercaseAll2(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]));
console.log(lowercaseAll2([1, 'HELLO', {one: 'uno'}]));

// n## Question 7.
  console.log(`\n\n\n\n========================================\n## Question 7.\n===============`);
console.log(`\n
Combine strings

Write a function that combines an array of strings into a single string separated by spaces.

'''
Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
Output: "It’s not a bug. It’s an undocumented feature!""
'''

\n----------------------------------------\n\n`);

const makeSentence = (array) => array.join(` `)
console.log(makeSentence(["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]));

// ## Question 8.
console.log(`\n\n\n\n========================================\n## Question 8.\n===============`);
console.log(`\n
Random number

Write a function that returns a random integer between 1 and n

'''
Input: 7
Output: 3
'''
Bonus: Your function should return 1 or 7 inclusive

\n----------------------------------------\n\n`);

const nRandomizer = (n) => Math.floor(Math.random() * n) + 1
console.log(nRandomizer(7));

// ## Question 9.
console.log(`\n\n\n\n========================================\n## Question 9.\n===============`);
console.log(`\n
Sum of absolute values

Write a function that returns the sum of the absolute values of an array

'''
Input: [3,-4,5,-6]
Output: 18
'''

\n----------------------------------------\n\n`);

const absSum = (array) => {
  let total = 0
  for (let e of array) e < 0 ? total += -e : total += e
  return total
}

console.log(absSum([3,-4,5,-6]));

// ## Question 10.
console.log(`\n\n\n\n========================================\n## Question 10.\n===============`);
console.log(`\n
Fahrenheit to Celsius

Write a function that converts a temperature in Fahrenheit to Celsius

'''
Input: 212
Output: 100
'''

\n----------------------------------------\n\n`);

const celsiusIsBetter = (t) => (t - 32) * 5 / 9
console.log(celsiusIsBetter(212));

console.log(`\n\n\n===============## Objects=============`)
// ## Question 1.
console.log(`\n\n\n\n========================================\n## Question 1.\n===============`);
console.log(`\n
Write an object that represents a User.  It should have a property for the user's name, email address, and age.
\n----------------------------------------\n\n`);

let user = {
  name: `Michael`,
  email: `michaelamparo@pursuit.org`,
  age: 23,
}
console.log(user);

// ## Question 2.
console.log(`\n\n\n\n========================================\n## Question 2.\n===============`);
console.log(`\n
Make 3 different user objects and store them in an array
\n----------------------------------------\n\n`);

let user1 = {
  name: `Alejo`,
  email: `alejo@pursuit.org`,
  age: 23,
}
let user2 = {
  name: `JR`,
  email: `jungrae@pursuit.org`,
  age: 18,
}
let user3 = {
  name: `Dessa`,
  email: `dessa@pursuit.org`,
  age: 19,
}
let userArray = [user1, user2, user3]
console.log(userArray);

// ## Question 3.
console.log(`\n\n\n\n========================================\n## Question 3.\n===============`);
console.log(`\n
Write a function that takes in an array of User objects, and returns an array with only their email addresses
\n----------------------------------------\n\n`);

const userEmail = (users) => users.map(e => e.email)
console.log(userEmail(userArray));

// ## Question 4.
console.log(`\n\n\n\n========================================\n## Question 4.\n===============`);
console.log(`\n
Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.
\n----------------------------------------\n\n`);

const userAgesAvg = (users) => Math.floor(users.reduce((i, e) => i += e.age, 0) / users.length)
console.log(userAgesAvg(userArray));

// ## Question 5.
console.log(`\n\n\n\n========================================\n## Question 5.\n===============`);
console.log(`\n
Write a function that takes in an array of User objects and returns whether or not all users have an age greater than 18
\n----------------------------------------\n\n`);

let user4 = {
  name: `Young Whipper Snapper`,
  email: `youngsnaps@pursuit.org`,
  age: 16,
}
let userArray2 = [user4, user1, user2, user3]

const user18OrOlder = (users) => users.every(e => e.age >= 18)

console.log(user18OrOlder(userArray));
console.log(user18OrOlder(userArray2));

// ## Question 6.
console.log(`\n\n\n\n========================================\n## Question 6.\n===============`);
console.log(`\n
Write an object that represents a Recipe.  It should have a property for the recipe's ingredients, name, and how long it will take to make.
\n----------------------------------------\n\n`);

let recipe = {
  name: `Chimi`,
  ingredients: [`beef`, `onions`, `pepper`, `seasoning`, `bread`, `mayo`, `ketchup`, `lettuce`, `tomato`],
  time: 45,
}
console.log(recipe);

// ## Question 7.
console.log(`\n\n\n\n========================================\n## Question 7.\n===============`);
console.log(`\n
Make 3 different recipe objects and store them in an array.
\n----------------------------------------\n\n`);

let recipe1 = {
  name: `Chipotle`,
  ingredients: [`rice`, `beans`, `chicken`, `sour cream`, `corn`, `cheese`, `lettuce`, `flour tortilla`],
  time: 30,
}
let recipe2 = {
  name: `Pizza`,
  ingredients: [`dough`, `marinara`, `cheese`, `garlic powder`, `oregano`, `pepperoni`],
  time: 20,
}
let recipeArray = [recipe, recipe1, recipe2]
console.log(recipeArray);

// ## Question 8.
console.log(`\n\n\n\n========================================\n## Question 8.\n===============`);
console.log(`\n
Write a function that takes in an array of Recipe objects and returns the recipe that will take the least amount of time to make.
\n----------------------------------------\n\n`);

const quickEats = (recipe) => {
  let fastest = recipe.reduce((i, e) => i > e.time ? i = e.time : i, recipe[0].time)
  for (let e of recipe) if (e.time === fastest) return e
}

console.log(quickEats(recipeArray));

// ## Question 9.
console.log(`\n\n\n\n========================================\n## Question 9.\n===============`);
console.log(`\n
Write a function that takes in an array of Recipe objects and returns an array containing all the ingredients you need to make all of the recipes.
\n----------------------------------------\n\n`);

const ingredientsOnly = (recipe) => recipe.map(e => e.ingredients).join(`,`).split(`,`)
console.log(ingredientsOnly(recipeArray));

// ## Bonus
console.log(`\n\n\n\n========================================\n## Bonus\n===============`);
console.log(`\n
Remove duplicate ingredients from the final array
\n----------------------------------------\n\n`);

const ingredientsNoDup = (recipe) => {
  let recipes = recipe.map(e => e.ingredients).join(`,`).split(`,`)
  let noDupes = {}
  let noDupeArr = []
  for (let e of recipes) noDupes[e] === undefined ? noDupes[e] = 1 : noDupes[e] += 1
  for (let e in noDupes) noDupeArr.push(e)
  return noDupeArr
}
console.log(ingredientsNoDup(recipeArray));

// ## Question 10
console.log(`\n\n\n\n========================================\n## Question 10.\n===============`);
console.log(`\n
Write a function that takes in an array of Recipe objects and an array of ingredients and returns all the recipes that you are able to make.
\n----------------------------------------\n\n`);

let incomplete = [
           'beef',         'onions',
         'pepper',           'rice',
          'beans',        'chicken',
     'sour cream',           'corn',
         'cheese', 'flour tortilla',
          'dough',       'marinara',
  'garlic powder',        'oregano',
      'pepperoni'
]

const whatCanYouMake = (arr, obj) => { // O(n*m)
  let arrObj = {}
  let wCYM = []
  for (let e of arr) arrObj[e] = 1 // O(n), This turns the array of given ingredients into an object
  for (let i = 0; i < obj.length; i++) if (obj[i].ingredients.every(e => arrObj[e] !== undefined)) wCYM.push(obj[i])
  /* ^^^O(n*m) n-obj.length m-obj.ingredients.length,
  The for loop(O(n)) goes through all of the objects in the array of recipe objects
  the if statement looks through the .ingredients array of each obj and
    uses .every(O(m)) to check  if EVERY element in the array matchs a key in the obj of ingredients given.
    If they all match then the .every will return true and the if statement will run.
    When the if statement runs it will push the recipe obj
  */
  return wCYM // returns the array of available Recipes
}

console.log(whatCanYouMake(incomplete, recipeArray));
