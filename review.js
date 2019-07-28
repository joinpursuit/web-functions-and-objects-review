console.log('FUNCTIONS')
console.log('Number 1: Average of 2 numbers')
const average = (num1, num2) => {
  return (num1 + num2)/2
}
console.log(average(5, 10))

console.log('Number 2: Average of 3 numbers')
const average3 = (num1, num2, num3) => {
  return (num1 + num2 + num3)/3
}
console.log(average3(3,5,8))

console.log('Number 3: Average of array')
let array1 = [1,2,3,4,5,10,10]
const averageArray = (array) => {
  return array.reduce((acc, curr) => {
    return acc + curr
  })/array.length
}
 console.log(averageArray(array1))

console.log('Number 4: Remove even numbers')
let array2 = [1,2,3,4,5,6]
const removeEven = (array) => {
  return array.filter((elem) => {
    return elem % 2 !== 0
  })
}
console.log(removeEven(array2))

console.log('Number 5: Check if numbers are positive')
let array3 = [-4, 3, -2, 4]
let array4 = [1, 2 , 3, 4]
const checkPositive = (array) => {
  return array.every((elem) => {
    return elem > 0
  })
}
console.log(checkPositive(array3))
console.log(checkPositive(array4))

console.log('Number 6: Lowercase array')
let array5 = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
let array6 = [1, 'HELLO', {one: 'uno'}]
const lowercaseStrings = (array) => {
  return array.filter((elem) => {
    return typeof elem === 'string'
  }).map((elem) => {
    return elem.toLowerCase()
  })
}
console.log(lowercaseStrings(array5))
console.log(lowercaseStrings(array6))

console.log('Number 7: Combine strings')
let array7 = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
const combineStrings = (array) => {
  return array.reduce((acc, elem) => {
    return `${acc} `+ `${elem}`
  })
}
console.log(combineStrings(array7))

console.log('Number 8: Random integer from 1 and n')
const randomNumber = (num) => {
  return Math.floor(Math.random() * num) + 1
}
console.log(randomNumber(7))

console.log('Number 9 : Sum of Absolute Numbers')
const sumOfAbsolute = (array) => {
  return array.map((elem) => {
    return Math.abs(elem)
  }).reduce((acc, curr) => {
    return acc + curr
  })
}
let array8 = [3,-4,5,-6]
console.log(sumOfAbsolute(array8))

console.log('Number 10: Fahrenheit to Celsius')
const tempConversion = (temp) => {
  return `It is ${(temp - 32)/1.8} degrees in Celsius`
}
console.log(tempConversion(212))

console.log('----------------------------------------------------')
console.log('OBJECTS')


console.log('Number 1')
// 1. Write an object that represents a User.  It should have a property for the user's name, email address, and age.
let user = {
  'Username': 'giselle',
  'Email': 'gisellesanchez@pursuit.org',
  'Age': 23
};
console.log(user)

console.log('Number 2')
// 2. Make 3 different user objects and store them in an array
let users = [
  {
    Username: 'giselle',
    Email: 'gisellesanchez@pursuit.org',
    Age: 23
  }, {
    Username: 'briany',
    Email: 'brianytaveras@pursuit.org',
    Age: 22
  }, {
    Username: 'kadijah',
    Email: 'kadijahwilson@pursuit.org',
    Age: 25
  }];
console.log(users)

console.log('Number 3')
// 3. Write a function that takes in an array of User objects, and returns an array with only their email addresses
// const returnEmails = (array) => {
  // let emailArray = [];
  // for(let i = 0; i < array.length; i ++){
  //   emailArray.push(array[i].Email)
  // } return emailArray
  // }
const returnEmails = (array) => {
  return array.map((user) => {
    return {
      email: user.Email
    }
  })
}
console.log(returnEmails(users))

console.log('Number 4')
// 4. Write a function that takes in an array of User objects,
// and returns the average age of all users. Rounded down.
const averageAge = (array) => {
  let sum = array.reduce((acc, curr) => {
    return curr.Age + acc
  }, 0)
  let average =  sum / array.length
  return Math.floor(average)
}
console.log(averageAge(users))

console.log('Number 5')
// 5. Write a function that takes in an array of User objects and returns
//whether or not all users have an age greater than 18
const ageCheck = (array) => {
  return array.every((user) => {
    return user.Age > 18
  })
}
console.log(ageCheck(users))

console.log('Number 6')
// 6. Write an object that represents a Recipe.  It should have a property
//for the recipe's ingredients, name, and how long it will take to make.
let cookieRecipe = {
  ingredients: 'brown sugar, butter, chocolate chips, baking soda',
  name : 'chocolate chip cookies',
  time: '15 mins'}
console.log(cookieRecipe)
console.log('Number 7')
// 7. Make 3 different recipe objects and store them in an array.
let myRecipes = [
  { name: 'birthday cake',
    ingredients: ['sugar', 'flour', 'milk', 'eggs', 'baking soda', 'sprinkles'],
    time: 35
},{name: 'pasta bolognese',
   ingredients: ['pasta', 'water', 'tomato sauce', 'garlic', 'ground beef', 'cheese'],
   time: 20
}, {name: 'lemonade',
    ingredients: ['lemons', 'sugar', 'water'],
    time: 10}]
console.log(myRecipes)
// 8. Write a function that takes in an array of Recipe objects and
// returns the recipe that will take the least amount of time to make.
console.log('Number 8')
const leastTime = (array) => {
  return array.map((elem) => {
    return elem.time
  }).reduce((acc, curr) => {
    if(curr.time < acc) {
      return acc
    } else {
      return curr.time
    }
  })
}
console.log(leastTime(myRecipes))
console.log('Number 9')
// 9. Write a function that takes in an array of Recipe objects and
// returns an array containing all the ingredients you need to make all of the recipes.
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
console.log(listIngredients(myRecipes))
// Total time complexity is O(n * m) Where n is the length of the recipies
// array (array[i].length) and m is the length of the longest
// list of ingredients
// join returns a string and concat returns an array
console.log('Number 10')
// 10. Write a function that takes in an array of Recipe objects and an array of
// ingredients and returns all the recipes that you are able to make.
const enoughIngredientsCheck = (recipe, myIngredients) => {
  return recipe.ingredients.every((currIngre) => {
    return myIngredients.includes(currIngre)
  })
}
console.log(enoughIngredientsCheck(myRecipes[0],allIngredients))

const checkMyIngredients = (recipes, ingredients) => {
  let filteredRecipes = recipes.filter(recipe => {
    if(enoughIngredientsCheck(recipe, ingredients)) {
      return true
  } else {
    return false
  }
}); return filteredRecipes
}
console.log(checkMyIngredients(myRecipes, allIngredients))
