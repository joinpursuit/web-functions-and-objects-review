// # Mid-Unit-1 Review Lab
// ## Functions
//
// ## 1. Average of two numbers
// Write a function that takes in two numbers as input and returns their average.
console.log("Numner 1")
const getAverageOf2 = (num1, num2) => {
  return (num1 + num2) / 2
}

console.log(getAverageOf2(4, 6));

// ## 2. Average of three numbers
// Write a function that takes in three numbers as input and returns their average.
console.log("Number 2")
const getAverageOf3 = (num1, num2, num3) => {
  return (num1 + num2 + num3) / 3
}

console.log(getAverageOf3(1, 3, 5));

// ## 3. Average of array
// Write a function that takes in an array of numbers as input and returns their average.
console.log("Number 3")
let arr = [1,2,3,4,5,10,10]

const getArrAverage = (arr) => {
  return arr.reduce((sum, elem) => {
    return sum + elem
  }) /arr.length
}

console.log(getArrAverage(arr));

// ## 4. Remove even numbers
// Write a function that returns a new array with all even numbers removed.
console.log("Number 4")
let arr2 = [1, 2, 6, 4, 2, 7, 3, 5, 8, 10]

const removeEven = (arr) => {
  return arr.filter((elem) => {
    return elem %  2 !== 0
  })
}

console.log(removeEven(arr2));

// ## 5. Make sure each number is positive
// Write a function that checks to see whether every number in an array is positive.
console.log("Number 5")
let arr3 = [-1, 3, 5, 7]

const allPositive = (arr) => {
  return arr.every((elem) => {
    return elem > 0
  })
}

console.log(allPositive(arr3));

// ## 6. Lowercase all strings
// Write a function that lowercases all strings in an array of strings.
console.log("Number 6")
let arr4 = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]

const lowerCaseStrings = (arr) => {
  return arr.filter((elem) => {
    return (typeof(elem) === 'string')
  }).map((elem) => {
    return (elem.toLowerCase())
  })
}

console.log(lowerCaseStrings(arr4));

// ## 7. Combine strings
// Write a function that combines an array of strings into a single string separated by spaces.
console.log("Number 7")
let arr5 = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]

const combineArr = (arr) => {
  return arr.reduce((sum, elem) => {
    return `${sum} ` + elem
  })
}

console.log(combineArr(arr5));

// ## 8. Random number
// Write a function that returns a random integer between 1 and n.
console.log("Number 8")

const randomInteger = (n) => {
  return Math.floor(Math.random() * n) + 1;
}

console.log(randomInteger(7));

// ## 9. Sum of absolute values
// Write a function that returns the sum of the absolute values of an array.
console.log("Number 9")
let arr6 = [3,-4,5,-6]

const sumOfAbsolute = (arr) => {
  return arr.map((elem) => {
    return (Math.abs(elem))
  }).reduce((sum, elem) => {
    return sum + elem
  }, 0)
}

console.log(sumOfAbsolute(arr6));

// ## 10. Fahrenheit to Celsius
// Write a function that converts a temperature in Fahrenheit to Celsius.
console.log("Number 10")

const convertFahrenheit = (num) => {
  return ((num - 32) * 5) / 9
}

console.log(convertFahrenheit(212));

//## Objects
// 1. Write an object that represents a User.  It should have a property for the user's name, email address, and age.
console.log("Objects Number 1")

let user = {
  name: "Briany",
  email: "brianytaveras@pursuit.org",
  age: 22
}

console.log(user);

// 2. Make 3 different user objects and store them in an array.
console.log("Objects Number 2")

let objsArr = [
{
 "name": "Giselle",
 "email": "gisellesanchez@pursuit.org",
 "age": 22
},
{
  "name": "Kadijah",
  "email": "kadijahwilson@pursuit.org",
  "age": 25
},
{
  "name": "Maliq",
  "email": "maliqtaylor@pursuit.org",
  "age":23
}
]


// 3. Write a function that takes in an array of User objects, and returns an array with only their email addresses.
console.log("Objects Number 3")

const returnEmail = (arr) => {
  return arr.map((user) => {
    return {
      email: user.email
    }
  })
}

console.log(returnEmail(objsArr));

// 4. Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.
console.log("Objects Number 4")


const ageAverage = (arr) => {
  return Math.floor(arr.map((user) => {
    return user.age
}).reduce((sum, elem) => {
    return sum + elem
  })/arr.length)
}

console.log(ageAverage(objsArr));

// 5. Write a function that takes in an array of User objects
// and returns whether or not all users have an age greater than 18.
console.log("Objects Number 5")

const greaterThan18 = (arr) => {
  return arr.every((user) => {
    return user.age > 18
  })
}

console.log(greaterThan18(objsArr));

// 6. Write an object that represents a Recipe.
// It should have a property for the recipe's ingredients, name, and how long it will take to make.
console.log("Objects Number 6")

let recipe = {
  name:"pasta",
  ingredients:"tortellini, olive oil, cheese",
  duration: "10 mins"
}

// 7. Make 3 different recipe objects and store them in an array.
console.log("Objects Number 7")

let objsArr2 = [
{
  name:"pancakes",
  ingredients:["flour", "water", "eggs"],
  duration: "11 mins"
},
{
  name:"popcorn",
  ingredients:["corn", "butter"],
  duration:"3 mins"
},
{
  name:"rice",
  ingredients:["rice", "water"],
  duration:"15 mins"
}
]

// 8. Write a function that takes in an array of Recipe objects and
// returns the recipe that will take the least amount of time to make.
console.log("Objects Number 8")

const shortestTime = (arr) => {
  return arr.map((recipe) => {
    return recipe.duration
  }).reduce((min, elem) => {
    if (elem < min) {
      return min
    } else {
      return elem
    }
  })
}

console.log(shortestTime(objsArr2));

// 9. Write a function that takes in an array of Recipe objects and returns an array
// containing all the ingredients you need to make all of the recipes.
console.log("Objects Number 9");
//
// will return all the ingredients in their seperate arrays
// const getAllIngredients = (arr) => {
//   return arr.map((recipe) => {
//     return recipe.ingredients
//   })
// }
//
// let allIngredients = getAllIngredients(objsArr2);
// console.log(allIngredients);

// will return all the ingredients in one array, without repeating any of the ingredients
const listIngredients = (array) => {
 allIngredients = [];
 uniqueIngredients = [];
 array.forEach((recipe) => {
 allIngredients = allIngredients.concat(recipe.ingredients)
}); for(let currIngredient of allIngredients) {
 if(uniqueIngredients.includes(currIngredient) === false){
   uniqueIngredients.push(currIngredient)
 }
} return uniqueIngredients
}

console.log(listIngredients(objsArr2));


// 10. Write a function that takes in an array of Recipe objects and
// an array of ingredients and returns all the recipes that you are able to make.
console.log("Objects Number 10");

// const recipeNames = (arr1, arr2) => {
//   if (ingredients === arr2.map((recipe) => {
//     return recipe.ingredients}) {
//       return arr.map((recipe) => {
//         name: recipe.name
//       })
//     }
// }

// const checkMyIngredients = (recipes, ingredients) => {
//
// }

// console.log(recipeNames(objsArr2, ingredients));

const doIHaveAllIngredientsForRecipe = (recipe, allIngredients) => {
  return recipe.ingredients.every(crrIng => {
    return allIngredients.includes(crrIng)
  })
}
console.log(doIHaveAllIngredientsForRecipe(objsArr2[0], allIngredients));

const checkMyIngredients = (recipes, ingredients) => {
  let answer = recipes.every(recipe => {
    if (doIHaveAllIngredientsForRecipe(recipe, ingredients)) {
      return true
    } else {
      return false
    }
  })
  return answer
}

let answer = checkMyIngredients(objsArr2, allIngredients);
console.log(answer);
