// # Mid-Unit-1 Review Lab

// In this lab, we will review two key topics covered so far: Objects and Functions.  These are two vital topics for understanding JavaScript fundamentals, and will be used heavily as we build web apps in later units.


// ## Functions

// ## 1. Average of two numbers

console.log(`Write a function that takes in two numbers as input and returns their average`)
// ```
// Input: 4,6
// Output: 5
// ```

const funcAverage = (num1,num2) =>(num1 + num2)/2
  console.log(funcAverage(4,6));



// ## 2. Average of three numbers

console.log(`\n # 2. Write a function that takes in three numbers as input and returns their average`);
// ```
// Input: 1,3,5
// Output: 3
// ```
const threeFuncAverage = (num1,num2,num3) => Math.floor((num1 + num2+ num3)/3)
  console.log(threeFuncAverage(4,6,3));


// ## 3. Average of array


console.log(`\n #3. Write a function that takes in an array of numbers as input and returns their average`);

// ```
let input = [1,2,3,4,5,10,10];
// Output: 5
// ```

const arrFunctionAve = (arrAverage) => {
  let counter =0;
  for (i of arrAverage){
     counter +=i
  }
  return (counter/arrAverage.length)
}
console.log((arrFunctionAve(input)));

// ## 4. Remove even numbers

console.log(`\n #4. Write a function that returns a new array with all even numbers removed.`);

// ```
let num4Input = [1,2,3,4,5,6]
// Output: [1,3,5]
// ```
const rmEvenFunction =(inArr) =>{ return inArr.filter(el => el % 2 !== 0)}

console.log(rmEvenFunction(num4Input));

// BONUS: If you didn't, rewrite this using an array method with a callback

// ## 5. Make sure each number is positive

console.log(`\n #5. Write a function that checks to see whether every number in an array is positive.`);

// ```
let num5Input = [-4,3,-2,4];
// Output: false
// ```
const rmPositiveFunction = (arrIn) => arrIn.every( el => el >0);
  console.log(rmPositiveFunction(num5Input));

// BONUS: If you didn't, rewrite this using an array method with a callback

// ## 6. Lowercase all strings
console.log(`\n #6.Write a function that lowercases all strings in an array of strings.`);

// ```
let strInput = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS",1,{}];
// Output: ["hello", "there", "these", "are", "some", "strings"]
// ```
const lowerFunction = (strArr) =>{
  let testing = strArr.filter(el => {
    if ( typeof el === "string") {
     return el;
    } 
  }).map( el => el.toLowerCase());
  return testing;
}
console.log(lowerFunction(strInput));

// BONUS: 
//   - A. If you didn't, rewrite this using an array method with a callback

//   - B. Make it work even if the array has mixed types inside so that input = `[1, 'HELLO', {one: 'uno'}]` would give output = `['hello']` 

// ## 7. Combine strings

console.log(`\n #7.Write a function that combines an array of strings into a single string separated by spaces.`);

// ```
let num7Input= ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"];
// Output: "It’s not a bug. It’s an undocumented feature!""
// ```
const oneStr =(arrStr) => arrStr.join(' ')
 console.log(oneStr(num7Input));

// ## 8. Random number

console.log(`\n #8.Write a function that returns a random integer between 1 and n`);

// ```
// Input: 7
// Output: 3
// ```
// Bonus: Your function should return 1 or 7 inclusive
const nthNumber = (num) => Math.floor(Math.random() * num) + 1;
 console.log(nthNumber(9));

// ## 9. Sum of absolute values
console.log(`\n 9. Write a function that returns the sum of the absolute values of an array`);

// ```
let inputArr = [3,-4,5,-6];
// Output: 18
// ```
const absFunction = (absArr) => absArr.reduce((acc,curel) => acc += Math.abs(curel));
  console.log(absFunction(inputArr));

// ## 10. Fahrenheit to Celsius
console.log(`\n 10.Write a function that converts a temperature in Fahrenheit to Celsius`);

// ```
// Input: 212
// Output: 100
// ```
const fahCel =(fahrenheit) => Math.floor((fahrenheit -32)*(5/9));
  console.log(fahCel(451));
  

// ## Objects

// 1. Write an object that represents a User.  It should have a property for the user's name, email address, and age.
let user = {
  name: 'Voniel Brown',
  email: 'vonielbrown@pursuit.org',
  age: 23
}

// 2. Make 3 different user objects and store them in an array
let arrOfUserObj =[
  {
    name: 'Amos Burton',
    email: 'amos.burton@rocinante.opa',
    age: 32,
  },
  {
    name:'Christian Avaserala',
    email:'christianAverserala@unitednation.org',
    age:54,
  },
  {
    name:'Roberta Draper',
    email:'roberta.draper@mcrn.mars',
    age:30
  },
  {
    name: 'May Meng',
    email: 'maymeng@ganamyde.sol',
    age: 17,
  }
]
console.log(`\n3.Write a function that takes in an array of User objects, and returns an array with only their email addresses`);
const emailFunction =(arrObj) =>{
  let emptyArr=[];
  for(let i=0; i < arrObj.length; i++){ 
    emptyArr.push(arrObj[i].email)
  }
  return emptyArr;
}
console.log(emailFunction(arrOfUserObj));

console.log(`\n4.Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.`);
const aveAge = (inputUser) => {
  return Math.floor(inputUser.reduce((acc,curel) => acc += curel.age, 0 )/inputUser.length)
}
console.log(aveAge(arrOfUserObj));

console.log(`\n#5.Write a function that takes in an array of User objects and returns whether or not all users have an age greater than 18`);

const over18 = (input) => input.every(el => el.age > 18);
  console.log(over18(arrOfUserObj));

// 6. Write an object that represents a Recipe.  It should have a property for the recipe's ingredients, name, and how long it will take to make.
let recipe ={
  name:'Baked Cod',
  ingredients: ['butter', 'white wine','parsley','green onion','lemon','cod','round crackers'],
  time: 35
}

// 7. Make 3 different recipe objects and store them in an array.
let recipes =[
  {
    name:'Baked Cod',
    ingredients: ['butter', 'white wine','parsley','green onion','lemon','cod','round crackers'],
    time: 35
  },
  {
    name: 'Mexican Baked Fish',
    ingredients: ['cod','salsa','sharp cheddar cheese','avacado','corn chips'],
    time: 30
  },
  {
    name:'Marinated Grill Shrimp',
    ingredients: ['garlic','oliver oil', 'salt','cayenne pepper','tomato sauce', 'red wine vinegar','basil'],
    time:55
  }
]
console.log(`\n8.Write a function that takes in an array of Recipe objects and returns the recipe that will take the least amount of time to make.`);
const time =(lessTime) => {
  return lessTime.reduce((acc,curel) => {
    if (acc.time < curel.time){
      return acc;
    } else {
      return curel;
    }
  })
}
console.log(time(recipes));

console.log(`\n 9.Write a function that takes in an array of Recipe objects and returns an array containing all the ingredients you need to make all of the recipes.
`);

const recip =( recipesArr) =>{
  let all =[];
  /*
  Total tim complexity is O(n * m). Where n is the length of the recipes array
  and m is the length of the longest array of ingredients
  */
  recipesArr.forEach(el => 
    all = all.concat(el.ingredients)
  )
  /*
  3 recipes
  3 ingredients per recipe
  (n * m) => (3 * 3) => 9 //  all
  */

  let uniqueIngredients =[];
for (let currIngredients of all){ // O(x) => O(n * m)
  //O(n * m)
  if (!uniqueIngredients.includes(currIngredients)){
    uniqueIngredients.push(currIngredients);
  }
//0(x^2)

}
// return = all.reduce((acc,curel) => {
//   if (!acc.includes(curel)){
//     acc.push(curel)
//   }
//   return acc
// }, [])
return uniqueIngredients;
}
console.log(recip(recipes));

// Bonus: Remove duplicate ingredients from the final array

console.log(`\n10.Write a function that takes in an array of Recipe objects and an array of ingredients and returns all the recipes that you are able to make.`);
let ingredients =[ 'beacon', 'pepper','flour','garlic',
'oliver oil', 'salt','cayenne pepper',
'tomato sauce', 'red wine vinegar','basil','butter', 
'white wine','parsley','green onion',
'lemon','cod','round crackers']

// console.log(Object.values(ingredients));

const doIHaveAllIngredients = (recipe,ingredients) =>{
  return recipe.ingredients.every(elemIng => ingredients.includes(elemIng));
}

console.log(doIHaveAllIngredients(recipes,ingredients));

const makers =( ingredientsArr, recipeObj) => {
  let filteredRecipes = recipes.filter ( recipe => {
    if (doIHaveAllIngredients(recipe,ingredients)){
      return true
    } else {
      return false
    }
  })
return filteredRecipes;
}
// console.log(makers(ingredients,recipes));
