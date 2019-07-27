
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
console.log("Functions. \n1._______________________________________");
function average(num1, num2) {
  return (num1 + num2) / 2;
}

console.log(average(15, 5));


// ## 2. Average of three numbers
//
// Write a function that takes in three numbers as input and returns their average
//
// ```
// Input: 1,3,5
// Output: 3
// ```

console.log("2._______________________________________");

function averageOfThree (num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

console.log(averageOfThree(1,3,5))

// ## 3. Average of array
//
// Write a function that takes in an array of numbers as input and returns their average
//
// ```
// Input: [1,2,3,4,5,10,10]
// Output: 5
// ```

console.log("3._______________________________________");

let array = [1,2,3,4,5,10,10]

function averageOfArray (arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i
  }
  return sum / arr.length
}

console.log(averageOfArray(array));

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

console.log("4._______________________________________");

let inputArray = [1,2,3,4,5,6]

function removeEven (arr) {
  return arr.filter(i => i % 2 !== 0)
}


console.log(removeEven(inputArray));

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

console.log("5._______________________________________");

let someNegatives = [-4,3,-2,4]
let allPositive = [3, 5, 6, 78]

function areTheyPosi (arr) {
  return arr.every(i => i > 0);
}

console.log(areTheyPosi(someNegatives));
console.log(areTheyPosi(allPositive));

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

console.log("6._______________________________________");

let strArr = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"];
let manyThings = [1, 'HELLO', {one: 'uno'}];

function makeThemSmall (arr) {
  let newArr = []
  let smllArr = []
  arr.filter(i => {
    if (typeof i === "string") {
      newArr.push(i)
    }
  })
    for (let element of newArr) {
      smllArr.push(element.toLowerCase())
    }
    return smllArr;
  }

  console.log(makeThemSmall(strArr));
  console.log(makeThemSmall(manyThings));

  // ## 7. Combine strings
  //
  // Write a function that combines an array of strings into a single string separated by spaces.
  //
  // ```
  // Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
  // Output: "It’s not a bug. It’s an undocumented feature!""
  // ```

console.log("7._______________________________________");

let strwy2Hvn = ["There's", "a", "lady", "who's", "sure", "all", "that", "glitters", "is", "gold", "and", "she's", "buying", "a", "stairway", "to", "Heaven"];

function stringsTogether (arr) {
  let newStr = ""
  arr.forEach(i => {
    newStr += (i + " ")
  })
  return newStr;
}

console.log(stringsTogether(strwy2Hvn));

// ## 8. Random number
//
// Write a function that returns a random integer between 1 and n
//
// ```
// Input: 7
// Output: 3
// ```
// Bonus: Your function should return 1 or 7 inclusive

console.log("8._______________________________________");

function randomNumber (n) {
  return Math.floor((Math.random()) * n) + 1;
}

console.log(randomNumber(7))

// ## 9. Sum of absolute values
//
// Write a function that returns the sum of the absolute values of an array
//
// ```
// Input: [3,-4,5,-6]
// Output: 18
// ```

console.log("9._______________________________________");

posiNegiArr = [-3,-4,5,-6]

function absVal (arr) {
  let newArr = [];
  arr.forEach(i => newArr.push(Math.abs(i)));
  return newArr.reduce((acc, i) => {
    return acc + i
  })
}

console.log(absVal(posiNegiArr));

// ## 10. Fahrenheit to Celsius

// Write a function that converts a temperature in Fahrenheit to Celsius
//
// ```
// Input: 212
// Output: 100
// ```

console.log("10._______________________________________");

function farToCel (tempF) {
  let tempC = (tempF - 32) * (5/9);
  return tempC;
}

console.log(farToCel(212));

// ## Objects
//
// 1. Write an object that represents a User.  It should have a property for the user's name, email address, and age.

console.log("\n Objects \n1._______________________________________");

let user = {
  name: "Peter",
  email: "peterfiorentino@pursuit.org",
  age: 25
}

console.log(user);

// 2. Make 3 different user objects and store them in an array

console.log("2._______________________________________");

let newUsers = [
  {
   name: "John",
   email: "johnmayer@musicilike.com",
   age: 41
 },
  {
   name: "Phoebe",
   email: "phoebebridgers@musicilike.com",
   age: 16
 },
  {
   name: "Julien",
   email: "julienbaker@musicilike.com",
   age: 23
  }
]

console.log(newUsers)

// 3. Write a function that takes in an array of User objects, and returns an array with only their email addresses

console.log("3._______________________________________");

function userEmails (arr) {
  let emailArr = []
  for (let i of arr) {
    emailArr.push(i.email);
  }
  return emailArr
}

console.log(userEmails(newUsers))

// 4. Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.

console.log("4._______________________________________");

function averageAge (arr) {
  let ages = [];
  for (let i of arr) {
    ages.push(i.age)
  }
  let ave = ages.reduce((acc, i) => acc + i)
  return ave / arr.length
}

console.log(averageAge(newUsers));

// 5. Write a function that takes in an array of User objects and returns whether or not all users have an age greater than 18

console.log("5._______________________________________");

function over18 (arr) {
  let trueOrFalse = arr.every(i => {
    if (i.age > 18) {
      return true;
    } else {
      return false;
    }
  })
  return trueOrFalse
}

console.log(over18(newUsers))

// 6. Write an object that represents a Recipe.  It should have a property for the recipe's ingredients, name, and how long it will take to make.


console.log("6._______________________________________");

let recipes =
  {
    name: "Grilled Cheese",
    ingredients: "bread, butter, cheese",
    timeInMinutes: 7
  }

console.log(recipes)

// 7. Make 3 different recipe objects and store them in an array.

console.log("7._______________________________________");

let moreRecipes = [
  {
    name: "Burrito",
    ingredients: ["tortilla", "rice", "chicken", "avocado", "lettuce", "beans", "cheese"],
    timeInMinutes: 20
  },
  {
    name: "Chicken Cutlets",
    ingredients: ["chicken", "bread crumbs", "oil", "eggs"],
    timeInMinutes: 15
  },
  {
    name: "Garlic Bread",
    ingredients: ["bread", "garlic", "oil"],
    timeInMinutes: 10
  }
]

console.log(moreRecipes);

// 8. Write a function that takes in an array of Recipe objects and returns the recipe that will take the least amount of time to make.

console.log("8._______________________________________");

function quickestMeal (arr) {
  let times = arr.map(i => {
    return i.timeInMinutes
  })
  let qTime = Math.min.apply(Math, times)
  for (let o of arr) {
  if (qTime === o.timeInMinutes){
    return o
  }
  }
}

console.log(quickestMeal(moreRecipes));

// 9. Write a function that takes in an array of Recipe objects and returns an array containing all the ingredients you need to make all of the recipes.
//
// Bonus: Remove duplicate ingredients from the final array

console.log("9._______________________________________");

function allTheIngredients (arr) {
  let noDuplicates = [];
  let allMealsIngredients = arr.map(i => {
    return i.ingredients
  })
  // console.log(allMealsIngredients)
  for (let thingsYouNeed of allMealsIngredients) {
    for (let insideArr of thingsYouNeed) {
    if (noDuplicates.indexOf(insideArr) === -1) {
      noDuplicates.push(insideArr)
    }
  }
  }
    return noDuplicates;
}

console.log(allTheIngredients(moreRecipes));

// 10. Write a function that takes in an array of Recipe objects and an array of ingredients and returns all the recipes that you are able to make.

console.log("10._______________________________________");

let ingredientsIHave = ["oil", "garlic", "bread", "cheese", "lamb"]
let ingredientsIHave2 = ["chicken", "bread crumbs", "rice", "tortilla", "yogurt", "oil", "beer", "strawberries", "eggs"]

function whatCanIMake (iHave, food) {
  let meals = food.map(i => {
    return i.ingredients
  })
  // console.log(mealIngredients)
  let ingredientsICanUse;
  for (ingredients of meals) {
    if (ingredients.every(i => iHave.includes(i))){
      ingredientsICanUse = ingredients
      }
    }
    // console.log(ingredientsICanUse)
    for (let m of food) {
      if (m.ingredients === ingredientsICanUse){
        return m
      }
    }
  }

console.log(whatCanIMake(ingredientsIHave, moreRecipes));
console.log(whatCanIMake(ingredientsIHave2, moreRecipes));
