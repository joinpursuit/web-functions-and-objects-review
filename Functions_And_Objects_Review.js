/*1. Average of two numbers
Write a function that takes in two numbers as input and returns their average
Input: 4,6
Output: 5
*/

console.log(`Question 1: Average of two numbers`);
const averageTwoNumbers = (num1, num2) => {
  if (!typeof num1 === 'number' && !typeof num2 === 'number'){
    return;
  }

  return (num1 + num2) / 2;
}

let n1 = 4, n2 = 6;
console.log(`The average of `,n1, `, `, n2,  `is `, averageTwoNumbers(n1, n2));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);

/* 2. Average of three numbers
Write a function that takes in three numbers as input and returns their average
Input: 1,3,5
Output: 3
*/

console.log(`Question 2: Average of three numbers`);
const averageThreeNumbers = (num1, num2, num3) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number'){
    return NaN;
  }

  return (num1 + num2 + num3) / 3;
}

let n3 = 'a';
console.log(`The average of `,n1, `, `, n2, `, `, n3, `is `, averageThreeNumbers(n1, n2, n3));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* 3. Average of array
Write a function that takes in an array of numbers as input and returns their average
Input: [1,2,3,4,5,10,10]
Output: 5
*/

console.log(`Question 3: Average of array of numbers`);
const averageArrayNumbers = (array) => {
  let average = 0;

  for (let element of array) {
    if (typeof element !== 'number'){
      return NaN;
    }
    average += element;
  }
  return average / array.length;
}

let array = [1,2,3,4,'a'];
console.log(`The average of the array `, array, ` elements is : `, averageArrayNumbers(array));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* 4. Remove even numbers
Write a function that returns a new array with all even numbers removed.
Input: [1,2,3,4,5,6]
Output: [1,3,5]
*/

console.log(`Question 4: Remove even numbers from an array`);
const oddArrayNumbers = (array) => {
  let output = [];

  for (let element of array) {
    if (typeof element !== 'number'){
      return NaN;
    }
    if (element % 2 === 1){
      output.push(element);
    }
  }
  return output;
}

let array4 = [1,2,3,4,5,6];
console.log(`Array `, array4, ` with all even numbers removed`, oddArrayNumbers(array4));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);

console.log(`Question 4 BONUS: using array methods`);

const oddArray = (array) => {
  return array.filter(element => {
    if (typeof element !== 'number'){
      return NaN;
    }
    if (element % 2 === 1) {
      return element;
    }
  })
}
console.log(`Array Filter : Array `, array4, ` with all even numbers removed `, oddArray(array4));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* 5. Make sure each number is positive
Write a function that checks to see whether every number in an array is positive.

Input: [-4,3,-2,4]
Output: false;
*/

const arrayElementPositive = (array) => {
  return array.every(element => {
    if (typeof element !== 'number'){
      return NaN;
    }
    if (element >= 0) {
      return true;
    }
  })
}

let array5 = [0,-4,3,2,4]
console.log(`All elements of the array `, array5, ` are positive `, arrayElementPositive(array5));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* 6. Lowercase all strings
Write a function that lowercases all strings in an array of strings.

Input: ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
Output: ["hello", "there", "these", "are", "some", "strings"]
*/

const lowerCasing = (array) => {
  let filteredArray = array.filter(element => {
    let outputArray = [];
    if (typeof element === 'string') {
      return true;
    }
  })
  return filteredArray.map(element => {return element.toLowerCase()})
}

let array6 = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
//console.log(`The array`, array6, ` to lower case : `, lowerCasing(array6));

let array6Bonus = [1, 'HELLO', {one: 'uno'}];
console.log(`The array`, array6Bonus, ` to lower case : `, lowerCasing(array6Bonus));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* 7. Combine strings
Write a function that combines an array of strings into a single string separated by spaces.

Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
Output: "It’s not a bug. It’s an undocumented feature!""
*/

console.log('7. Combine strings :');

const combinedArray = (array) => {
  return array.reduce((acc, element) => {return acc + element + ' '}, '')
}

let array7 = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"];
console.log(`Combined striengs of an array of trings : `, combinedArray(array7));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* 8. Random number
Write a function that returns a random integer between 1 and n

Input: 7
Output: 3
*/

console.log(`8. Random number :`);
const randomNumber = (n) => {
  return Math.floor(1 + Math.random()*(n-1));
}

let number7 = 3;
console.log(`A randome number between `, 1, ` and `, number7, `with `, number7, ` not uncluded : `, randomNumber(number7));

const randomNumber2 = (n) => {
  return Math.floor(1 + Math.random()*n);
}

let number7B = 3;
console.log(`A randome number to be even `, 1, ` and `, number7B, `with `, number7, ` uncluded : `, randomNumber2(number7B));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* 9. Sum of absolute values
Write a function that returns the sum of the absolute values of an array

Input: [3,-4,5,-6]
Output: 18
*/

console.log(`9. Sum of absolute values : `);
const sumAbsoluteValuesOfArray = (array) => {
  return array.reduce((acc, element) => {
    if (element < 0) {
      acc -= element
    } else {
      acc += element
    }
    return acc;
  }, 0)
}

let array9 = [3,-4,5,-6];
console.log(`The sum of the absolute values of the array `, array9, ' is : ', sumAbsoluteValuesOfArray(array9));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);



/*  10. Fahrenheit to Celsius
Write a function that converts a temperature in Fahrenheit to Celsius

Input: 212
Output: 100
*/

console.log(`10. Fahrenheit to Celsius`);

const FahrenheitToCelsius = (temp) => {
  return (temp - 32) * 5/9;
}

let tempF = 212;
console.log(tempF, `°F = `, FahrenheitToCelsius(tempF), `°C` );
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);



//======================================================================================
//======================================================================================
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);
console.log(`======================================= OBJECTS =======================================`)
//======================================================================================
//======================================================================================


/* 1. Write an object that represents a User. 
It should have a property for the user's name, email address, and age.
*/

let user1 = {
  name : 'name_1',
  email : 'email_1',
  age : 27 
};

/* 2. Make 3 different user objects and store them in an array
*/ 
console.log(`QUESTION 2 : `)
let user2 = {
  name : 'name_2',
  email : 'email_2',
  age : 23 };

let user3 = { 
  name : 'name_3',
  email : 'email_3',
  age : 20 };

let user4 = { 
    name : 'name_4',
    email : 'email_4',
    age : 18 };

let arrayOfUsers = [user1, user2, user3, user4];
console.log(arrayOfUsers);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* 3. Write a function that takes in an array of User objects, 
and returns an array with only their email addresses
*/
console.log(`QUESTION 3 : `)
const emailsFilter = (array) => {
  return array.map(object => object.email)
}

let emailsArray = emailsFilter(arrayOfUsers);
console.log(`Array with only the email addresses : `, emailsArray);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* 4. Write a function that takes in an array of User objects, 
and returns the average age of all users. Rounded down.
*/

console.log(`QUESTION 4 : `);
const usersAverageAgeRoundedDown = (array) => {
  let sum = array.reduce((acc, object) => {
    console.log(object.age);
    return acc += object.age;
  }, 0)
  console.log(`reduce`, sum)
  return Math.floor(sum / array.length);
}

console.log(`The average age of users is : `, usersAverageAgeRoundedDown(arrayOfUsers));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* 5. Write a function that takes in an array of User objects and returns whether or not 
all users have an age greater than 18
*/

console.log(`QUESTION 5 : `);
const testOnUsersAge = (array) => {
  return array.every(object => {
    if (object.age > 18) {
      return true;
    }
  })
}

console.log(`All users are older then 18 :`, testOnUsersAge(arrayOfUsers));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* 6. Write an object that represents a Recipe. 
It should have a property for the recipe's ingredients, name, and how long it will take to make.
*/

console.log(`QUESTION 6 : `);
let recipe1 = {
    ingredients: ['a','b','c','d'], 
    name: 'recipe1',
    prepTime: 10 };

console.log(recipe1);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);

/* 7. Make 3 different recipe objects and store them in an array.
*/

console.log(`QUESTION 7 : `);
let recipe2 = {
  ingredients: ['a','b','f','d'], 
  name: 'recipe2',
  prepTime: 110 };

let recipe3 = {
  ingredients: ['a','g','c','h'], 
  name: 'recipe3',
  prepTime: 40 };

let recipe4 = {
  ingredients: ['h','j','k','l'], 
  name: 'recipe4',
  prepTime: 75 };

let recipes = [recipe1, recipe2, recipe3, recipe4];

console.log(recipes)
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* 8. Write a function that takes in an array of Recipe objects 
and returns the recipe that will take the least amount of time to make.
*/

console.log(`QUESTION 8 : `);
const fastestRecipe = (array) => {
  let shortestTime = Infinity;

  array.forEach(recipe => {
    if (recipe.prepTime < shortestTime){
      shortestTime = recipe.prepTime;
    }
  });

  return array.filter(recipe => {
    return (recipe.prepTime === shortestTime) 
  })
}
console.log(fastestRecipe(recipes));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Write a function that takes in an array of Recipe objects 
and returns an array containing all the ingredients you need to make all of the recipes.
*/

console.log(`QUESTION 9 With its Bonus : `);
const recipeIngrediants = (array) => {
  let ingrediants = array.map(recipe => {
    return recipe.ingredients;
  }) 
  
  let outputIngrediants =[];
  ingrediants.forEach(array => {
    for (element of array) {
      if (!outputIngrediants.includes(element)) {
        outputIngrediants.push(element);
      }
    }
  })
  return outputIngrediants;
}
console.log(`Ingridiants to make all recipes : `, recipeIngrediants(recipes));