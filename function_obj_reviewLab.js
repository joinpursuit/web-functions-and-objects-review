console.log('--------FUNCTIONS-----------');

// ## 1. Average of two numbers
//
// Write a function that takes in two numbers as input and returns their average
//
// ```
// Input: 4,6
// Output: 5
// ```
console.log('----Q1----');
const avgTwoNums = (num1, num2) => {
  return (num1 + num2) / 2;
}
console.log(avgTwoNums(4,6));

// ## 2. Average of three numbers
//
// Write a function that takes in three numbers as input and returns their average
//
// ```
// Input: 1,3,5
// Output: 3
// ```
console.log('----Q2----');
const avgThreeNums = (num1, num2, num3) => {
  return (num1 + num2 + num3) / 3;
}
console.log(avgThreeNums(1, 3, 5));

// ## 3. Average of array

// Write a function that takes in an array of numbers as input and returns
//their average
//
// ```
// Input: [1,2,3,4,5,10,10]
// Output: 5

console.log('----Q3----');
let val3 = [1, 2, 3, 4, 5, 10, 10];
const avgArr = (arr) => arr.reduce((acc, el) =>
  acc + el) / arr.length;

console.log(avgArr(val3));

// ## 4. Remove even numbers
//
// Write a function that returns a new array with all even numbers removed.
//
// ```
// Input: [1,2,3,4,5,6]
// Output: [1,3,5]
// ```

// BONUS: If you didn't, rewrite this using an array method with a callback
console.log('----Q4---');
let val4 = [1, 2, 3, 4, 5, 6];
const remEven = (arr) => arr.filter((el) => {
  if (el % 2 !== 0) {
    return el;
  };
});
console.log(remEven(val4));


// ## 5. Make sure each number is positive
//
// Write a function that checks to see whether every number in an array is positive.
//
// ```
// Input: [-4,3,-2,4]
// Output: false

console.log('----Q5----');
let val5 = [-4, 3, -2, 4];
let val5A = [3, 6, 8, 144];
const posNum = (arr) => arr.every((el) => {
  if (el > 0) {
    return true;
  };
});
console.log(posNum(val5));
console.log(posNum(val5A));

// ## 6. Lowercase all strings
//
// Write a function that lowercases all strings in an array of strings.
//
// ```
// Input: ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
// Output: ["hello", "there", "these", "are", "some", "strings"]
// ```
//
// BONUS:
//   - A. If you didn't, rewrite this using an array method with a callback
//
//   - B. Make it work even if the array has mixed types inside so that input
//= `[1, 'HELLO', {one: 'uno'}]` would give output = `['hello']`

console.log('----Q6----');
let val6 = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"];
let val6A = [1, 'HELLO', {one: 'uno'}];

const convertToLower = (arr) => arr.filter((el) => {
  if (typeof el === 'string') {
    return el;
  }
}).map(el => {
  return el.toLowerCase();
});
console.log(convertToLower(val6));
console.log(convertToLower(val6A));

// ## 7. Combine strings
//
// Write a function that combines an array of strings into a single
// string separated by spaces.
//
// ```
// Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
// Output: "It’s not a bug. It’s an undocumented feature!""
// ```

console.log('----Q7----');
let strArr7 = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"];

const combineStr = (arr) => console.log(arr.join(' '));

combineStr(strArr7);


// ## 8. Random number
//
// Write a function that returns a random integer between 1 and n
//
// ```
// Input: 7
// Output: 3
// ```
// Bonus: Your function should return 1 or 7 inclusive
console.log('----Q8----');

const randomNum = (min) => {
  return Math.floor(Math.random() * (1 - min)) + min;
};

console.log(randomNum(7));


// ## 9. Sum of absolute values
//
// Write a function that returns the sum of the absolute values of an array
//
// ```
// Input: [3,-4,5,-6]
// Output: 18
// ```
console.log('----Q9----');

let val9 = [3, -4, 5, -6];
const sumAbsArr = (arr) => arr.reduce((acc, el) => {
  return acc += Math.abs(el);
});

console.log(sumAbsArr(val9));

// ## 10. Fahrenheit to Celsius
// Write a function that converts a temperature in Fahrenheit to Celsius
//
// ```
// Input: 212
// Output: 100
console.log('----Q10----');
const fahrenheitToCelsius = (num) => {
  return (num - 32) / 1.8;
};

console.log(fahrenheitToCelsius(212));
//
//
console.log('--------OBJECTS-------');
// 1. Write an object that represents a User.  It should have a property
// for the user's name, email address, and age.
console.log('----Q1----');
let user1 = {
  name: 'Martin Lawrence',
  email: 'martymar@yougoboy.com',
  age: 52,
};

  // 2. Make 3 different user objects and store them in an array
// console.log('----Q2----');
let user2 = [
 {
   name: 'Will Smith',
   email: 'freshprince@gmail.com',
   age: 50
 }, {
   name: 'Shawn Carter',
   email: 'jigga@tidal.com',
   age: 49
 }, {
   name: 'Sean Comb',
   email: 'pdiddy@badboyent.com',
   age: 49
 },
]
//
// 3. Write a function that takes in an array of User objects, and returns an
// array with only their email addresses
console.log('----Q3----');
let extractEmail = [];
for(let i = 0; i < user2.length; i++) {
   extractEmail.push(user2[i].email);
 }
 console.log(extractEmail)

//
// 4. Write a function that takes in an array of User objects, and returns the
// average age of all users. Rounded down.
console.log('----Q4----');
const avgAge = user2.reduce((total, el) => total + el.age, 0) / user2.length;

console.log(avgAge);

// 5. Write a function that takes in an array of User objects and returns whether
// or not all users have an age greater than 18

console.log('----Q5----');
const overEighteen = user2.every((el) => {
  if (user2.age > 18);
    return true;
});
console.log(overEighteen);


// 6. Write an object that represents a Recipe.  It should have a property for
// the recipe's ingredients, name, and how long it will take to make.
let recipe =
{
  name: "Meatloaf",
  ingredients: "ground turkey, bread crumbs, salt, cayenne peper, \nonion powder, garlic powder",
  duration: '45 minutes',
};

//7. Make 3 different recipe objects and store them in an array.
let recipe2 = [
{
  name: "grill cheese",
  ingredients: "slice cheese, slice bread, butter",
  duration: '5 minutes'
},
{
  name: "grilled teriyaki salmon",
  ingredients: "brown sugar, garlic, ginger, low sodium soy sauce, \nrice wine, olive oil, green onion, king salmon fillets-Wild Caught, cornstarch",
  duration: '60 minutes'
},
]
// 8. Write a function that takes in an array of Recipe objects and returns the recipe that will take the least amount of time to make.
//
// 9. Write a function that takes in an array of Recipe objects and returns an array containing all the ingredients you need to make all of the recipes.
//
// Bonus: Remove duplicate ingredients from the final array
//
// 10. Write a function that takes in an array of Recipe objects and an array of ingredients and returns all the recipes that you are able to make.
