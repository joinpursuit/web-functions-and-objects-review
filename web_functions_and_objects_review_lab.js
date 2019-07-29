// JOSEPH P. PASAOA
//



// non-question-specific function declarations
const print = function(forDisplay, bool) {
  bool
    ? console.log(forDisplay,'\n') // for outputs
    : console.log(`Input: ${forDisplay}`); // for inputs
}



// FUNCTIONS //
console.log("=== FUNCTIONS ===\n")


// f1 //
console.log("f1 // Write a function that takes in two numbers as input and returns their average");
let input_f1a = 11;
let input_f1b = -11;
console.log(`Inputs: ${input_f1a} and ${input_f1b}`);

const averageTwo = (num1, num2) => {
  return (num1 + num2) / 2;
}
let result_f1 = averageTwo(input_f1a, input_f1b);
print(result_f1, 1);
//


// f2 //
console.log("f2 // Write a function that takes in three numbers as input and returns their average");
let input_f2a = 3;
let input_f2b = 6;
let input_f2c = 10;
console.log(`Inputs: ${input_f2a}, ${input_f2b}, and ${input_f2c}`);

const averageThree = (num1, num2, num3) => {
  return (num1 + num2 + num3) / 3;
}
let result_f2 = averageThree(input_f2a, input_f2b, input_f2c);
print(result_f2, 1);
//


// f3 //
console.log("f3 // Write a function that takes in an array of numbers as input and returns their average");
let input_f3 = [1,2,3,4,5,10,10];
print(`[${input_f3}]`);

const averageAnArray = function(input_Arr) {
  let outputSum = 0;
  for (let i of input_Arr) {
    outputSum += i;
  }
  return outputSum / input_Arr.length;
}
let result_f3 = averageAnArray(input_f3);
print(result_f3, 1);
//


// f4 //
console.log("f4 // Write a function that returns a new array with all even numbers removed.");
let input_f4 = [1,2,3,4,5,6];
print(`[${input_f4}]`);

const toArrayNoEvens = function(input_Arr) {
  return input_Arr.filter( el => el % 2 );
}
let result_f4 = toArrayNoEvens(input_f4);
print(result_f4, 1);
//


// f5 //
console.log("f5 // Write a function that checks to see whether every number in an array is positive.");
let input_f5 = [4,3,2,-4];
print(`[${input_f5}]`);

const areAllPositive = function(input_Arr) {
  return input_Arr.every( el => el > 0 );
}
let result_f5 = areAllPositive(input_f5);
print(result_f5, 1);
//


// f6 //
console.log("f6 // Write a function that lowercases all strings in an array of strings.");
let input_f6 = [1, 'HELLO', {one: "uno"}, "THERE", "THESE", "ARE", "SOME", "STRINGS"];
print(`[1, 'HELLO', {one: "uno"}, "THERE", "THESE", "ARE", "SOME", "STRINGS"]`);

const lowerTheStrings = (input_Arr) => {
  return input_Arr.filter( el => typeof el === 'string' )
    .map( el => el.toLowerCase() );
}
let result_f6 = lowerTheStrings(input_f6);
print(result_f6, 1);
//


// f7 //
console.log("f7 // Write a function that combines an array of strings into a single string separated by spaces.");
let input_f7 = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"];
console.log('Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]');

const toOneString = (input_Arr) => {
  return input_Arr.join(' ');
}
let result_f7 = toOneString(input_f7);
print(result_f7, 1);
//


// f8 //
console.log("f8 // Write a function that returns a random integer between 1 and n");
let input_f8 = 9;
print(input_f8);

const pickRandomlyFromOneToMe = (max) => {
  max = Math.floor(max);
  return Math.floor((Math.random() * max) + 1);
}
let result_f8 = pickRandomlyFromOneToMe(input_f8);
print(result_f8, 1);
//


// f9 //
console.log("f9 // Write a function that returns the sum of the absolute values of an array");
let input_f9 = [3,-4,0,5,-6];
print(`[${input_f9}]`)

const sumTheAbsolutes = function(input_Arr) {
  return input_Arr.reduce( (outputSum, num) => {
    return outputSum += Math.abs(num);
  }, 0);
}
let result_f9 = sumTheAbsolutes(input_f9);
print(result_f9, 1);
//


// f10 //
console.log("f10 // Write a function that converts a temperature in Fahrenheit to Celsius");
let input_f10 = 212;
print(input_f10);

const toCelsius = function(fahrTemp) {
  return (fahrTemp - 32) * 5 / 9;
}
let result_f10 = toCelsius(input_f10);
print(result_f10, 1);//


// OBJECTS //
console.log("\n=== OBJECTS ===\n")


// o1 //
console.log("o1 // Write an object that represents a User.  It should have a property for the user's name, email address, and age.");
let input_o1 = { name: 'James Howlett', email: 'wolverine@xmen.org', age: 197 };
print("{ name: 'James Howlett', email: 'wolverine@xmen.org', age: 197 }", 1);
//


// o2 //
console.log('o2 // Make 3 different user objects and store them in an array');
let input_o2 = [ input_o1,
  { name: 'Remy Etienne LeBeau', email: 'gambit@xmen.org', age: 27 },
  { name: 'Anna Marie', email: 'rogue@xmen.org', age: 29 }
];
print(`[
  { name: 'James Howlett', email: 'wolverine@xmen.org', age: 197 },
  { name: 'Remy Etienne LeBeau', email: 'gambit@xmen.org', age: 27 },
  { name: 'Anna Marie', email: 'rogue@xmen.org', age: 29 }
]`, 1);
//


// o3 //
console.log("o3 // Write a function that takes in an array of User objects, and returns an array with only their email addresses");
print(`[
  { name: 'James Howlett', email: 'wolverine@xmen.org', age: 197 },
  { name: 'Remy Etienne LeBeau', email: 'gambit@xmen.org', age: 27 },
  { name: 'Anna Marie', email: 'rogue@xmen.org', age: 29 }
]`);

const makeEmailsArray = function(users) {
  let outputArray = [];
  for (let userObj of users) {
    outputArray.push(userObj.email);
  }
  return outputArray;
}
let result_o3 = makeEmailsArray(input_o2);
print(result_o3, 1);
//


// o4 //
console.log("o4 // Write a function that takes in an array of User objects, and returns the average age of all users.");
console.log("Rounded down.");
print(`[
  { name: 'James Howlett', email: 'wolverine@xmen.org', age: 197 },
  { name: 'Remy Etienne LeBeau', email: 'gambit@xmen.org', age: 27 },
  { name: 'Anna Marie', email: 'rogue@xmen.org', age: 29 }
]`);

const getAvgAge = function(users) {
  return Math.floor((       // // METHOD 1, using array.reduce()
    users.reduce( (userAcc, userCurr) => {
        return userAcc += userCurr.age;
    }, 0)
  ) / users.length);
  // let sumAges = 0;       // // METHOD 2, using for loop
  //   for (let userObj of users) {
  //     sumAges += userObj.age;
  //   }
  //   return Math.floor(sumAges / users.length);
}
let result_o4 = getAvgAge(input_o2);
print(result_o4, 1);
//


// o5 //
console.log("o5 // Write a function that takes in an array of User objects and returns whether or not all users have");
console.log("an age greater than 18");
print(`[
  { name: 'James Howlett', email: 'wolverine@xmen.org', age: 197 },
  { name: 'Remy Etienne LeBeau', email: 'gambit@xmen.org', age: 27 },
  { name: 'Anna Marie', email: 'rogue@xmen.org', age: 29 }
]`);

const areAllAgesOver18 = (users) => {
  return users.every( userObj => userObj.age > 18);
}
let result_o5 = areAllAgesOver18(input_o2);
print(result_o5, 1);
//


// o6 //
console.log("o6 // Write an object that represents a Recipe.  It should have a property for the recipe's ingredients, name, and");
console.log("how long it will take to make.");
let input_o6 = { name: 'Whiskey Sour', ingredients: ['whiskey', 'sour mix', 'cherry'], time: 2 };
print(`{ name: 'Whiskey Sour', ingredients: ['whiskey', 'sour mix', 'cherry'], time: 2 }`, 1);


// o7 //
console.log("o7 // Make 3 different recipe objects and store them in an array.");
let input_o7 = [
  { name: 'Whiskey Sour', ingredients: ['whiskey', 'sour mix', 'cherry'], time: 3 },
  { name: 'Whiskey Straight', ingredients: ['whiskey'], time: 1 },
  { name: 'Gin & Tonic', ingredients: ['gin', 'tonic', 'cherry'], time: 4 }
];
print(`[
  { name: 'Whiskey Sour', ingredients: ['whiskey', 'sour mix', 'cherry'], time: 3 },
  { name: 'Whiskey Straight', ingredients: ['whiskey'], time: 1 },
  { name: 'Gin & Tonic', ingredients: ['gin', 'tonic', 'cherry'], time: 4 }
]`, 1);


// o8 //
console.log("o8 // Write a function that takes in an array of Recipe objects and returns the recipe that will take");
console.log("the least amount of time to make.");
print(`[
  { name: 'Whiskey Sour', ingredients: ['whiskey', 'sour mix', 'cherry'], time: 3 },
  { name: 'Whiskey Straight', ingredients: ['whiskey'], time: 1 },
  { name: 'Gin & Tonic', ingredients: ['gin', 'tonic', 'cherry'], time: 4 }
]`);

const findQuickestRecipe = (recipes) => {
  return recipes.reduce( (recipeAcc, recipeCurr) => {
      if (recipeCurr.time < recipeAcc.time) {
        return recipeCurr
      }
      return recipeAcc
  } );
}
let result_o8 = findQuickestRecipe(input_o7);
print(result_o8, 1);
//


// o9 //
console.log("o9 // Write a function that takes in an array of Recipe objects and returns an array containing");
console.log("all the ingredients you need to make all of the recipes.");
print(`[
  { name: 'Whiskey Sour', ingredients: ['whiskey', 'sour mix', 'cherry'], time: 3 },
  { name: 'Whiskey Straight', ingredients: ['whiskey'], time: 1 },
  { name: 'Gin & Tonic', ingredients: ['gin', 'tonic', 'cherry'], time: 4 }
]`);

const listAllIngreds = function(recipes) {
  let xIngredsObj = {};
  for (let recipeObj of recipes) {
    for (let ingredient of recipeObj.ingredients) {
      xIngredsObj[ingredient] = true;
    }
  }
  return Object.keys(xIngredsObj);
}
let result_o9 = listAllIngreds(input_o7);
print(result_o9, 1);
//


// o10 //
console.log("o10 // Write a function that takes in an array of Recipe objects and an array of ingredients and");
console.log("returns all the recipes that you are able to make.");
let ingredsToUse = ['cherry', 'whiskey', 'sour mix'];
print(`Recipes: [
  { name: 'Whiskey Sour', ingredients: ['whiskey', 'sour mix', 'cherry'], time: 3 },
  { name: 'Whiskey Straight', ingredients: ['whiskey'], time: 1 },
  { name: 'Gin & Tonic', ingredients: ['gin', 'tonic', 'cherry'], time: 4 }
]\nWhat can be made with [${ingredsToUse}]?`);

const arePossibleRecipes = function(recipesList, askedIngreds) {
  let askedIngredsObj = {};
  for (let ingredient of askedIngreds) {
    askedIngredsObj[ingredient] = true;
  }
  return recipesList.filter( (recipe) => {
      return recipe.ingredients.every( (ingredNeeded) => {
          return askedIngredsObj[ingredNeeded]
      } )
  } );
}
let result_o10 = arePossibleRecipes(input_o7, ingredsToUse);
print(result_o10, 1);
//
