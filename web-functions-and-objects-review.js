// # Mid-Unit-1 Review Lab
//
// In this lab, we will review two key topics covered so far: Objects and Functions.
// These are two vital topics for understanding JavaScript fundamentals, and will be used heavily as we build web apps in later units.
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
console.log('----- Fuctions: Question 1 -----');
const twoNumAverage = (num1, num2) => {
  return (num1 + num2) / 2;
};

console.log(twoNumAverage(4, 6));
console.log('')
// ## 2. Average of three numbers
//
// Write a function that takes in three numbers as input and returns their average
//
// ```
// Input: 1,3,5
// Output: 3
// ```
console.log('----- Fuctions: Question 2 -----');
let threeNumAverage = (num1, num2, num3) => {
  return (num1 + num2 + num3) / 3;
};

console.log(threeNumAverage(1, 3, 5));
console.log('')
// ## 3. Average of array
//
// Write a function that takes in an array of numbers as input and returns their average
//
// ```
// Input: [1,2,3,4,5,10,10]
// Output: 5
// ```
console.log('----- Fuctions: Question 3 -----');
let arr3 = [1, 2, 3, 4, 5, 10, 10];
let sum3 = arr3.reduce((total, currentValue) => {
  return total + currentValue;
});
let total3 = (sum3 / (arr3.length));
console.log(total3);
console.log('')
// ## 4. Remove even numbers
//
// Write a function that returns a new array with all even numbers removed.
//
// ```
// Input: [1,2,3,4,5,6]
// Output: [1,3,5]
// ```
//
// BONUS: If you didn't, rewrite this using an array method with a callback
console.log('----- Fuctions: Question 4 -----');
let arr4 = [1, 2, 3, 4, 5, 6];
let onlyOdds = arr4.filter((currentValue) => {
  return currentValue % 2 !== 0;
})
 console.log(onlyOdds);
console.log('')
console.log('----- Fuctions: Question 4 (Bonus) -----');
// const oddsCheck = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) {
// return i;
//     }
//   }
// }
// let oddsOnly = array4.filter((arr, callback) => {
//   return callback;
// });
// console.log(array4(arr4, oddsCheck));
//console.log('')
// ## 5. Make sure each number is positive
//
// Write a function that checks to see whether every number in an array is positive.
//
// ```
// Input: [-4,3,-2,4]
// Output: false
// ```
//
// BONUS: If you didn't, rewrite this using an array method with a callback

console.log('----- Fuctions: Question 5 -----');
let arr5 = [-4, 3, -2, 4];
let allPositives = arr5.every((currentValue) => {
  if (currentValue > 0) {
    return true;
  }

  return false;
});
console.log(allPositives);
console.log('')

console.log('----- Fuctions: Question 5 (Bonus) -----');

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
//   - B. Make it work even if the array has mixed types inside so that input = `[1, 'HELLO', {one: 'uno'}]` would give output = `['hello']`
console.log('----- Fuctions: Question 6 -----');
let arr6 = ['HELLO', 'THERE', 'THESE', 'ARE', 'SOME', 'STRINGS'];
let lowercaseStrings = arr6.forEach((element) => {
  console.log(element.toLowerCase());
});
console.log('')

console.log('----- Fuctions: Question 6 (Bonus A) -----');
console.log('')

console.log('----- Fuctions: Question 6 (Bonus B) -----');
console.log('')

// ## 7. Combine strings
//
// Write a function that combines an array of strings into a single string separated by spaces.
//
// ```
// Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
// Output: "It’s not a bug. It’s an undocumented feature!""
// ```
console.log('----- Fuctions: Question 7 -----');
let arr7 = ['It\’s', 'not', 'a', 'bug.', 'It\’s', 'an', 'undocumented', 'feature!']
let sentence = arr7.map((element) => {
  return element;
}).join(' ');
console.log(sentence);
console.log('')

// ## 8. Random number
//
// Write a function that returns a random integer between 1 and n
//
// ```
// Input: 7
// Output: 3
// ```
// Bonus: Your function should return 1 or 7 inclusive
console.log('----- Fuctions: Question 8 -----');
let num8 = 3;
let randomIntegers = (max) => {
  return Math.floor(Math.random() * (max - 1)) + 1;
};

console.log(randomIntegers(num8));
console.log('')

console.log('----- Fuctions: Question 8 (Bonus) -----');
let randomInteger = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

console.log(randomInteger(num8));
console.log('')

// ## 9. Sum of absolute values
//
// Write a function that returns the sum of the absolute values of an array
//
// ```
// Input: [3,-4,5,-6]
// Output: 18
// ```
console.log('----- Fuctions: Question 9 -----');
let arr9 = [3, -4, 5, -6];
let absoluteSums = arr9.reduce((total, currentValue) => {
  return Math.abs(total) + Math.abs(currentValue);
});
console.log(absoluteSums);
console.log('')

// ## 10. Fahrenheit to Celsius
//
// Write a function that converts a temperature in Fahrenheit to Celsius
//
// ```
// Input: 212
// Output: 100
// ```
console.log('----- Fuctions: Question 10 -----');
let fTemp = 212;
const tempInC = (tempInF) => {
  return (tempInF - 32) * (5 / 9);
}
let cTemp = tempInC(fTemp);
console.log(cTemp);
console.log('');

// ## Objects
//
// 1. Write an object that represents a User.  It should have a property for the user's name, email address, and age.
console.log('----- Objects: Question 1 -----');
let user = {
  name: 'June',
  email: 'june@gmail.com',
  age: 23,
};
console.log(user);
console.log('');

// 2. Make 3 different user objects and store them in an array
console.log('----- Objects: Question 2 -----');
let users = [
  {
    name: 'June',
    email: 'june@gmail.com',
    age: 23,
  },
  {
    name: 'April',
    email: 'april@gmail.com',
    age: 30,
  },
{
  name: 'May',
  email: 'may@gmail.com',
  age: 13,
}
]
console.log(users);
console.log('');

// 3. Write a function that takes in an array of User objects, and returns an array with only their email addresses
console.log('----- Objects: Question 3 -----');
for (let i = 0; i < users.length; i++) {
  console.log(users[i].email);
}
console.log('');

// 4. Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.
console.log('----- Objects: Question 4 -----');
let ages = [];
for (let i = 0; i < users.length; i++) {
  ages.push(users[i].age);
}
let sum4 = ages.reduce((total, currentValue) => {
  return total + currentValue;
});
let total4 = sum4 / ages.length;
console.log(total4);
console.log(ages)
console.log('');

// 5. Write a function that takes in an array of User objects and returns whether or not all users have an age greater than 18
console.log('----- Objects: Question 5 -----');
let above18 = ages.every(currentValue => {
  if (currentValue > 18) {
    return true;
  }
  return false;
});
console.log(`Are all the users above the age of 18?: ${above18}`)
console.log('');

// 6. Write an object that represents a Recipe.  It should have a property for the recipe's ingredients, name, and how long it will take to make.
console.log('----- Objects: Question 6 -----');
let recipes = [
  {
    name: 'Cheeseburger',
    ingredients: ['Ground Beef', 'Yellow Onion', 'Garlic', 'Cheddar Cheese', 'Pickles', 'Lettuce', 'Ketchup', 'Mustard', 'Salt', 'Pepper'],
    minutes: 30
  },
  {
    name: 'Mac n\' Cheese',
    ingredients: ['Macaroni', 'Milk', 'Bacon', 'Breadcrumbs', 'Unsalted Butter', 'Cheddar Cheese', 'Flour', 'Salt', 'Pepper'],
    minutes: 90
  },
  {
    name: 'Tomato Sauce',
    ingredients: ['Garlic', 'Yellow Onion', 'Red Pepper Flakes', 'Oregano', 'Tomato Paste', 'San Marzano Tomatoes', 'Basil', 'Unsalted Butter', 'Salt', 'Pepper'],
    minutes: 120
  }
];
console.log('');

// 7. Make 3 different recipe objects and store them in an array.
console.log('----- Objects: Question 7 -----');
console.log('');

// 8. Write a function that takes in an array of Recipe objects and returns the recipe that will take the least amount of time to make.
console.log('----- Objects: Question 8 -----');
console.log('');

// 9. Write a function that takes in an array of Recipe objects and
//returns an array containing all the ingredients you need to make all of the recipes.
console.log('----- Objects: Question 9 -----');
const getAllIngredients = (recipes) =>{
//put all ingredients code in here
}

let allIngredients = [];
 recipes.forEach((recipe) => {
  allIngredients = allIngredients.concat(recipe.ingredients);
});
console.log(allIngredients)
console.log('');

// Bonus: Remove duplicate ingredients from the final array
console.log('----- Objects: Question 9 (Bonus) -----');
let uniqueIngredients =[];
for (let ingredient of allIngredients) {
  // if(!uniqueIngredients.includes(currenfIngrediant)    same as below
    if (uniqueIngredients.includes(ingredient) === false) {
        uniqueIngredients.push(ingredient)
  }
}
console.log(uniqueIngredients);
console.log('')
// 10. Write a function that takes in an array of Recipe objects and an array of ingredients and returns all the recipes that you are able to make.
console.log('----- Objects: Question 10 -----');
//helper Functions

const doIHaveAllIngredients = (recipe, allIngredients) => {
  return recipe.ingredients.every(currentIngredient => {
    return allIngredients.includes(currentIngredient)
  })
};

//recipes[0].ingredients.push('Potato');    //check to see you infact get false for this
let result = doIHaveAllIngredients(recipes[0], allIngredients);
console.log(result);


const checkMyIngredients = (recipes, ingredients) => {
let filteredRecipes = recipes.filter(recipe => {
  if (doIHaveAllIngredients(recipe,ingredients)) {
    return true
  } else {
    return false
  }
})
return filteredRecipes;
}

allIngredients.pop();
let answer = checkMyIngredients(recipes, allIngredients);
console.log(answer);
console.log('');
