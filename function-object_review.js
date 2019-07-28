// ## Functions
//
const lineBreak = '--------------------------------'

// ## 1. Average of two numbers
//
// Write a function that takes in two numbers as input and returns their average
//
// ```
// Input: 4,6
// Output: 5
// ```
const avgTwoNums = (num1, num2) => {
  return (num1 + num2) / 2;
};

console.log(avgTwoNums(4,6));

console.log(lineBreak);
//
// ## 2. Average of three numbers
//
// Write a function that takes in three numbers as input and returns their average
//
// ```
// Input: 1,3,5
// Output: 3
// ```
const avgThreeNums = (num1, num2, num3) => {
  return (num1 + num2 + num3) / 3;
};

console.log(avgThreeNums(1, 3, 5));

console.log(lineBreak);
//
// ## 3. Average of array
//
// Write a function that takes in an array of numbers as input and returns their average
//
// ```
// Input: [1,2,3,4,5,10,10]
// Output: 5
// ```
let input = [1, 2, 3, 4, 5, 10, 10];

const avgArrayOfNums = (arr) => {
  let divisor = arr.length;
  let reduceThem = arr.reduce((acc, num) => {
    return acc + num;
  });
  return (reduceThem / divisor);
};

console.log(avgArrayOfNums(input));

console.log(lineBreak);
//
// ## 4. Remove even numbers
//
// Write a function that returns a new array with all even numbers removed.
//
// ```
// Input: [1,2,3,4,5,6]
// Output: [1,3,5]
// ```
let anArray = [1, 2, 3, 4, 5, 6];

const noEvenNums = (arr) => {
  let filterThat = arr.filter (num => {
    return num % 2 !== 0
  })
  return filterThat
}

console.log(noEvenNums(anArray))

//
// BONUS: If you didn't, rewrite this using an array method with a callback
// Did it without a callback since I did that originally

let bonusArr = [1, 2, 3, 4, 5, 6];

const onlyOddNums = (arr) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 !== 0) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(onlyOddNums(bonusArr))

console.log(lineBreak)

// ## 5. Make sure each number is positive
//
// Write a function that checks to see whether every number in an array is positive.
//
// ```
// Input: [-4,3,-2,4]
// Output: false
// ```
let numberArray = [-4, 3, -2, 4];

const positiveChecker = (arr) => {
  let everyFunct = arr.every(num => {
    return num > 0;
  });
  return everyFunct
}
console.log(positiveChecker(numberArray))

console.log(lineBreak);
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
// ```
let stringArray = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]

const lowerCaseTheStrings = (arr) => {
  let changeCase = arr
  let changeCase2 = changeCase.map(elem =>{
    return elem.toLowerCase()
  })
  return changeCase2;
}

console.log(lowerCaseTheStrings(stringArray));
//
// BONUS:
//   - A. If you didn't, rewrite this using an array method with a callback
//
//   - B. Make it work even if the array has mixed types inside so that input = `[1, 'HELLO', {one: 'uno'}]` would give output = `['hello']`
//
let mixedArray = [1, 'HELLO', {one: 'uno'}]

const lowerCaseStr = (arr) => {
  let changeElem = arr.filter(num => {
    if (typeof num === typeof 'efwfdwrf'){
      return num
    }
  })
  let changeElem2 = changeElem.map(num => {
    return num.toLowerCase();
  })
  return changeElem2
}

console.log(lowerCaseStr(mixedArray))

console.log(lineBreak)
// ## 7. Combine strings
//
// Write a function that combines an array of strings into a single string separated by spaces.
//
// ```
// Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
// Output: "It’s not a bug. It’s an undocumented feature!""
// ```
let inputA = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]

const combineStringArray = (arr) => {
  let placeHolder = arr
  let combineArr = placeHolder.map(word => {
    return word
  })
  return combineArr.join(' ')
}

console.log(combineStringArray(inputA))

console.log(lineBreak)
//
// ## 8. Random number
//
// Write a function that returns a random integer between 1 and n
//
// ```
// Input: 7
// Output: 3
// ```
const randomizeNumber = (num) => {
  return Math.floor (Math.random() * num + 1)
};
console.log(randomizeNumber(7));

console.log(lineBreak)

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
let inputB = [3, -4, 5, -6];

const absoluteValueOfArray = (arr) => {
  let changeArray = arr.map(elem => {
    return Math.abs(elem)
  });
  let sumUpArray = changeArray.reduce((acc, num) => {
    return acc + num
  });
  return sumUpArray
}

console.log(absoluteValueOfArray(inputB))

console.log(lineBreak)
//
// ## 10. Fahrenheit to Celsius
//
// Write a function that converts a temperature in Fahrenheit to Celsius
//
// ```
// Input: 212
// Output: 100
// ```
const temperatureConverter = (input) => {
  return (input - 32) * 5/9
}
console.log(temperatureConverter(212))

console.log(lineBreak)
//
// ## Objects
//
// 1. Write an object that represents a User.  It should have a property for the user's name, email address, and age.
//
let user = {
  name: 'Owen',
  email: 'owenjones@pursuit.org',
  age: 25,
};

console.log(user)
// 2. Make 3 different user objects and store them in an array
//
let movies = [
  {
    name: 'Titanic',
  director: 'James Cameron'
  },
  {
    name: 'Lord of the Rings',
    director: 'Peter Jackson'
  },
  {
    name: 'Goodfellas',
    director: 'Martin Scorsese'
  }
]

console.log(movies)

console.log(lineBreak)

// 3. Write a function that takes in an array of User objects, and returns an array with only their email addresses
//
let userObj = [
  {
    name: 'Matt',
    age: 23,
  email: 'mattlong@pursuit.org'
  },
  {
    name: 'Jim',
    age: 19,
    email: 'jimdean@pursuit.org'
  },
  {
    name: 'Erica',
    age: 26,
    email: 'ericabrown@pursuit.org'
  }
]

const objectNavigator = (arr) => {
  let newArr = []
  for (let i = 0; i < arr.length; i ++){
    newArr.push (arr[i].email)
  }
  return newArr;
}

console.log(objectNavigator(userObj))

console.log(lineBreak)

// 4. Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.
//

let ageArray = []

const avgAge = (arr) => {

  for (let i = 0; i < arr.length; i ++){
    ageArray.push(arr[i].age)
  };

  let divisor = arr.length
  let addUpAll = ageArray.reduce((acc, num) => {
    return acc + num
  });

  return Math.floor (addUpAll / divisor)
};

console.log(avgAge(userObj))

console.log(lineBreak)

// 5. Write a function that takes in an array of User objects and returns whether or not all users have an age greater than 18
//
const ageLessThanEighteen = (arr) => {
  // let ageArrayB = []
  // for (let i = 0; i < arr.length; i ++){
  //   ageArrayB.push(arr[i].age)
  // };
  let isAgeLessThanEighteen = ageArray.every(num => {
    return num > 18;
  })
  return isAgeLessThanEighteen;
}
console.log(ageLessThanEighteen(userObj));

console.log(lineBreak);

// 6. Write an object that represents a Recipe.  It should have a property for the recipe's ingredients, name, and how long it will take to make.
//
let omelette = {
  ingredients: ['eggs', 'butter', 'ham', 'spinach', 'tomatoes'],
  name: 'Meat Lover omelette',
  duration: 20
}
console.log(omelette)
console.log(lineBreak)
// 7. Make 3 different recipe objects and store them in an array.
//
recipes = [
  {
    ingredients: ['flour', 'chicken', 'seasoning'],
    name: 'fried chicken',
    duration: 30
  },
  {
    ingredients: ['chicken broth', 'vegetables', 'rice', 'potatoes'],
    name: 'Chicken soup with rice',
    duration: 25
  },
  {
    ingredients: ['peppers', 'ground beef','swiss', 'quinoa'],
    name: 'Stuffed Bell Peppers',
    duration: 60
  }
]
console.log(recipes)
console.log(lineBreak)
// 8. Write a function that takes in an array of Recipe objects and returns the recipe that will take the least amount of time to make.
//
const fastestRecipe = (arr) => {
  let shortestTime = []
  for (let i = 0; i < arr.length; i++){
    shortestTime.push(arr[i].duration)
  }
  let reduction = shortestTime.reduce((acc, elem) => {
    if (acc < elem){
      return acc
    } else {
      return elem
    }
  })
  return reduction
}
console.log(fastestRecipe(recipes))
console.log(lineBreak)
// 9. Write a function that takes in an array of Recipe objects and returns an array containing all the ingredients you need to make all of the recipes.
//
const ingredientList = (arr) => {
  let ingredientArray = []
  for (let i = 0; i < arr.length; i++){
     ingredientArray.push(arr[i].ingredients)
  }
  let newIngredientList = ingredientArray.map(elem => {
    return elem.join()
  })
  return newIngredientList
}
console.log(ingredientList(recipes))

console.log(lineBreak)
// Bonus: Remove duplicate ingredients from the final array
//
// 10. Write a function that takes in an array of Recipe objects and an array of ingredients and returns all the recipes that you are able to make.

let ingredients = ['chicken broth', 'vegetables', 'rice', 'potatoes', 'milk', 'eggs','flour', 'chicken', 'seasoning' ]

const recipesThatCanBeMade = (recipes, arr) => {

}
