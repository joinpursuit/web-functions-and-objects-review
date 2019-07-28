console.log('Functions ');
console.log('Question 1');
console.log(' ');

//Write a function that takes in two numbers as input and returns their average

const twoNumAverage = (num1, num2) => {
  return (num1 + num2) / 2;
};

console.log(twoNumAverage(4, 6));

console.log(' ');
console.log('Question 2');
console.log(' ');

//Write a function that takes in three numbers as input and returns their average

const threeNumAverage = (num1, num2, num3) => {
  return (num1 + num2 + num3) / 3;
};

console.log(threeNumAverage(1, 3, 5));

console.log(' ');
console.log('Question 3');
console.log(' ');

//Write a function that takes in an array of numbers as input and returns their average

let someNumbers = [1, 2, 3, 4, 5, 10, 10];

const averageFinder = (array) => {
  let average = 0;
  let sum = 0;

  for (value of array) {
    sum += value;
  }

  average = sum / array.length;
  return average;
};

console.log(averageFinder(someNumbers));

console.log(' ');
console.log('Question 4');
console.log(' ');

//Write a function that returns a new array with all even numbers removed.

let allNumbers = [1, 2, 3, 4, 5, 6];

const filterThis = ((array, callback) => {
  return callback(array);
});

function removeEvenNumbers(array) {
  let filteredArray = [];
  for (let value of array) {
    if (value % 2 !== 0) {
      filteredArray.push(value);
    }
  }

  return filteredArray;
}

console.log(filterThis(allNumbers, removeEvenNumbers));

console.log(' ');
console.log('Question 5');
console.log(' ');

//Write a function that checks to see whether every number in an array is positive.

let theseNumbersHere = [-4, 3, -2, 4];

const isArrayPositive = (array) => {
  return array.every(el => {
    if (el > 0) {
      return true;
    } else {
      return false;
    }
  });
};

console.log(isArrayPositive(theseNumbersHere));


console.log(' ');
console.log('Question 6');
console.log(' ');

//Write a function that lowercases all strings in an array of strings.

let arrOfStrings = ['HELLO', 'THERE', 'THESE', 'ARE', 'SOME', 'STRINGS', 1, { one: 'uno' }];

const lowercaseTheStrings = (array => {
  return array.map(el => {
    if (typeof el === typeof 'string') {
      return el.toLowerCase();
    }
  }).filter(el => {
    return el !== undefined;
  });
});

console.log(lowercaseTheStrings(arrOfStrings));

console.log(' ');
console.log('Question 7');
console.log(' ');

//Write a function that combines an array of strings into a single string separated by spaces.

let someQuote = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"];

const arrayToStringConverter = (array) => {
  return array.join(' ');
}

console.log(arrayToStringConverter(someQuote));

console.log(' ');
console.log('Question 8');
console.log(' ');

//Write a function that returns a random integer between 1 and n

const randomNumber = (num1) => {
  return Math.ceil(Math.random() * (num1));
  // return randomNumber;
};

console.log(randomNumber(7));

console.log(' ');
console.log('Question 9');
console.log(' ');

//Write a function that returns the sum of the absolute values of an array

let boatNumbers = [3, -4, 5, -6];

const absoluteSum = (array) => {
  let sum = 0;
  let currentCalc = 0;
  for (let value of array) {
    if (value < 0) {
      sum += value * -1;
    } else {
      sum += value;
    }
  }

  return sum;
};

console.log(absoluteSum(boatNumbers));

console.log(' ');
console.log('Question 10');
console.log(' ');

//Write a function that converts a temperature in Fahrenheit to Celsius

const fahrenheitToCelsius = (num1) => {
  return (num1 - 32) * 5 / 9;
}

console.log(fahrenheitToCelsius(212));

console.log(' ');
console.log('Objects');
console.log('Question 1');
console.log(' ');

//1. Write an object that represents a User.  It should have a property for the user's name, email address, and age.

let user = {
  name: 'Kameron',
  email: 'kameronmontague@pursuit.org',
  age: 32,
};

console.log(user);

console.log(' ');
console.log('Question 2');
console.log(' ');

//2. Make 3 different user objects and store them in an array

let users = [
  {
    name: 'Arlong',
    email: 'SuperiorBeing@ArlongPark.com',
    age: 41,
  },
  {
    name: 'Charlotte Linlin',
    email: 'SoSweetToEat@WholeCake.com',
    age: 68,
  },
  {
    name: 'Monkey D. Garp',
    email: 'ShouldntHaveSaidThat@NavyHero.com',
    age: 78,
  },
];

console.log(users);

console.log(' ');
console.log('Question 3');
console.log(' ');

//3. Write a function that takes in an array of User objects, and returns an array with only their email addresses

const findUserEmails = (array) => {
  let userEmails = [];
  for (let key in array) {
    userEmails.push(array[key].email);
  }
  return userEmails;
};

console.log(findUserEmails(users));

console.log(' ');
console.log('Question 4');
console.log(' ');

//4. Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.

const averageAgeOfUsers = (array) => {
  let agesCollected = [];
  let average = 0;

  for (let key in array) {
    agesCollected.push(array[key].age);
  };

  let sum = agesCollected.reduce((total, currentElem) => {
    return total + currentElem;
  });

  average += sum / agesCollected.length;
  return Math.floor(average);
};

console.log('Average age of all users is ' + averageAgeOfUsers(users));

console.log(' ');
console.log('Question 5');
console.log(' ');

//5. Write a function that takes in an array of User objects and returns whether or not all users have an age greater than 18

const oldEnoughToSail = (array) => {
  // for (let key in array) {
  let checkIt = array.every(el => {
      if (el.age > 18) {
        return true;
      } else {
        return false;
      }
    });
  return checkIt;
};

console.log('Everyone is over the age of 18: ' + oldEnoughToSail(users));

console.log(' ');
console.log('Question 6');
console.log(' ');

//6. Write an object that represents a Recipe.  It should have a property for the recipe's ingredients, name, and how long it will take to make.

let recipe = {
  ingredients: ['Eggs', 'Milk', 'Dry Bread'],
  name: 'French Toast',
  time: 20,
};

console.log(recipe);

console.log(' ');
console.log('Question 7');
console.log(' ');

//7. Make 3 different recipe objects and store them in an array.

let recipes = [
  {
    ingredients: ['Eggs', 'Milk', 'Dry Bread'],
    name: 'French Toast',
    time: 15,
  },
  {
    ingredients: ['Tuna', 'Cheese', 'Bread'],
    name: 'Tuna Melt',
    time: 5,
  },
  {
    ingredients: ['Chicken Thighs', 'Spices', 'Oil', 'Dry Bread'],
    name: 'Cripsy Chicken Thighs',
    time: 40,
  },
];

console.log(recipes);

console.log(' ');
console.log('Question 8');
console.log(' ');

//8. Write a function that takes in an array of Recipe objects and returns the recipe that will take the least amount of time to make.

const shortestRecipe = (array) => {
  let currentTime = array[0].time;
  for (let key in array) {
    if (array[key].time < currentTime) {
      currentTime = array[key].time;
    }

    return currentTime;
  }
};

console.log(shortestRecipe(recipes));

console.log(' ');
console.log('Question 9');
console.log(' ');

// 9. Write a function that takes in an array of Recipe objects and returns an array containing all the ingredients you need to make all of the recipes.
// Bonus: Remove duplicate ingredients from the final array

const recipeIngredientsNeeded = (array) => {
    let newArray = [];
    let checkIt = array.map(el => {
      for (let i = 0; i < el['ingredients'].length; i++) {
        newArray.push(el['ingredients'][i]);
      }
    });
    return newArray.filter((item, index) => newArray.indexOf(item) === index);
  };

console.log(recipeIngredientsNeeded(recipes));

console.log(' ');
console.log('Question 10');
console.log(' ');

//10. Write a function that takes in an array of Recipe objects and an array of ingredients and returns all the recipes that you are able to make.
let whatIGot = ['apples', 'pears', 'Cheese', 'Bread', 'beer', 'Milk', 'Tuna', 'Eggs', 'Dry Bread'];

const compareIngredients = (array, array2) => {
  let whatIFound = [];
  let recipesICanMake = [];
  let counter = 0;

  for (let key in array2) {
    for (let i = 0; i < array.length; i++) {
      if (array2[key]['ingredients'].indexOf(array[i]) > -1) {
        whatIFound.push(array[i]);
      }
    }

    for (let i = 0; i < whatIFound.length; i++) {
      if (array2[key]['ingredients'].indexOf(whatIFound[i]) > -1) {
        counter++;
      }
    }

    if (array2[key]['ingredients'].length === counter) {
      recipesICanMake.push(array2[key]['name']);
    }

    whatIFound = [];
    counter = 0;
  }

  return recipesICanMake;
};

console.log(compareIngredients(whatIGot, recipes));
// console.log(recipes[1]['ingredients'].indexOf(whatIGot[3]));
