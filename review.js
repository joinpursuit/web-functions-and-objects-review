console.clear();
// # Mid-Unit-1 Review Lab

// In this lab, we will review two key topics covered so far: Objects and Functions.  
// These are two vital topics for understanding JavaScript fundamentals, and will be used heavily as we build web apps in later units.


// ## Functions

// ## 1. Average of two numbers

// Write a function that takes in two numbers as input and returns their average

// ```
// Input: 4,6
// Output: 5
// ```

const avgTwoNums = (num1, num2) => (num1 + num2) / 2;
console.log("1) ", avgTwoNums(4,6), "Constant");

// ## 2. Average of three numbers

// Write a function that takes in three numbers as input and returns their average

// ```
// Input: 1,3,5
// Output: 3
// ```

const avgThreeNums = (num1, num2, num3) => (num1 + num2 + num3) / 3;
console.log("2) ", avgThreeNums(1,3,5), "Constant");

// ## 3. Average of array

// Write a function that takes in an array of numbers as input and returns their average

// ```
// Input: [1,2,3,4,5,10,10]
// Output: 5
// ```

const arr = [1,2,3,4,5,10,10];
const avgArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += i;
    }
    return sum / arr.length;
}
console.log("3) ", avgArray(arr), "Linear");
// ## 4. Remove even numbers

// Write a function that returns a new array with all even numbers removed.

// ```
// Input: [1,2,3,4,5,6]
// Output: [1,3,5]
// ```

const arr4 = [1,2,3,4,5,6];
const removeEvenNum = (arr) => {
    return arr.filter( num => num % 2 === 1);
}
console.log("4) ", removeEvenNum(arr4), "<-- .filter |", "Linear");
const removeEvenNumLoop = (arr) => {
    let returnArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            returnArr.push(arr[i]);
        }
    }
    return returnArr;
}
console.log("4) ", removeEvenNumLoop(arr4), "<--  forLoop w/ if |", "linear");

// BONUS: If you didn't, rewrite this using an array method with a callback

// ## 5. Make sure each number is positive

// Write a function that checks to see whether every number in an array is positive.

// ```
// Input: [-4,3,-2,4]
// Output: false
// ```

const arr5 = [-4, 3, -2, 4];
const checkIfNumsPositive = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            return false;
        }
    }
}
console.log("5) ", checkIfNumsPositive(arr5), "forLoop w/ if |", "Linear");

// BONUS: If you didn't, rewrite this using an array method with a callback

// ## 6. Lowercase all strings

// Write a function that lowercases all strings in an array of strings.

// ```
// Input: ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
// Output: ["hello", "there", "these", "are", "some", "strings"]
// ```

const arr6 = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"];
const lowerCaseStrings = (arr) => {
    let returnArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            returnArr.push(arr[i].toLowerCase());
        }
    }
    return returnArr;
}
console.log("6) ", lowerCaseStrings(arr6), "forLoop w/ if |", "Linear");

// BONUS: 
//   - A. If you didn't, rewrite this using an array method with a callback

//   - B. Make it work even if the array has mixed types inside so that input = `[1, 'HELLO', {one: 'uno'}]` would give output = `['hello']` 

// ## 7. Combine strings

// Write a function that combines an array of strings into a single string separated by spaces.

// ```
// Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
// Output: "It’s not a bug. It’s an undocumented feature!""
// ```

const arr7 = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"];
const combineStrings = (arr) => {
    return arr.join(" ");
}
console.log("7) ", combineStrings(arr7), "Linear");
// ## 8. Random number

// Write a function that returns a random integer between 1 and n

// ```
// Input: 7
// Output: 3
// ```
// Bonus: Your function should return 1 or 7 inclusive
const randomNum = (num) => {
    return Math.random() > .5 ? 1 : 7;
}
console.log("8 )", randomNum(4000), "Constant");
// ## 9. Sum of absolute values

// Write a function that returns the sum of the absolute values of an array

// ```
// Input: [3,-4,5,-6]
// Output: 18
// ```

const arr9 = [3, -4, 5, -6];
const sumAbsValues = (arr) => {
    return arr.reduce( (acc, num) => acc + Math.abs(num), 0);
}
console.log("9) ", sumAbsValues(arr9), "Linear");

// ## 10. Fahrenheit to Celsius

// Write a function that converts a temperature in Fahrenheit to Celsius

// ```
// Input: 212
// Output: 100
// ```

const temp = 212;
const fahrToCel = (fahrenheit) => (fahrenheit - 32) * (5/9);
console.log("10) ", fahrToCel(temp), "Constant");

// ## Objects
console.log("<- - - - - - - - - - Objects - - - - - - - - - - ->")
// 1. Write an object that represents a User.  It should have a property for the user's name, email address, and age.
let user = {
    name: "Steve Jobs",
    email: "stevejobs@microsoft.com",
    age: 20
};
console.log("1) ", user);
// 2. Make 3 different user objects and store them in an array
let userArr = [
    {
        user: "Donald",
        email: "donald@trump.com",
        age: 50
    },{
        user: "J",
        email: "j@trump.com",
        age: 80
    },{
        user: "Trump",
        email: "trump@trump.com",
        age: 65
    }
];
console.log("2) ", userArr);
// 3. Write a function that takes in an array of User objects, and returns an array with only their email addresses
const userEmailFromArr = (arr) => arr.map( ele => ele["email"]);
console.log("3) ", userEmailFromArr(userArr));
// 4. Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.
const avgUserAge = (arr) => arr.reduce( (acc, num) => acc + num["age"], 0) / arr.length;
console.log("4) ", avgUserAge(userArr));
// 5. Write a function that takes in an array of User objects and returns whether or not all users have an age greater than 18
const userAgeCheck = (arr) => arr.every(num => num["age"] > 18);
console.log("5) ", userAgeCheck(userArr));
// 6. Write an object that represents a Recipe.  It should have a property for the recipe's ingredients, name, and how long it will take to make.
const recipe = {
    ingredients: "water",
    name: "water",
    time: 1
}
// 7. Make 3 different recipe objects and store them in an array.
const recipeObj = [
    {
        name: "taco",
        ingredients: ["cheese", "beef"],
        time: 15
    },{
        name: "pizza",
        ingredients: ["cheese", "tomato", "dough"],
        time: 45
    },{
        name: "burger",
        ingredients: ["cheese", "tomato", "beef", "bread"],
        time: 20
    },
    {
        name: "burger",
        ingredients: ["tomato", "beef", "bread"],
        time: 20
    },

]
// 8. Write a function that takes in an array of Recipe objects and returns the recipe that will take the least amount of time to make.
const recipeLeastTime = (arr) => {
    let min = Infinity;
    let returnMe;
    for (let obj of arr) {
        if (obj.time < min) {
            min = obj.time;
            returnMe = obj;
        }
    }
    return returnMe;
}
console.log("8) ", recipeLeastTime(recipeObj));
// 9. Write a function that takes in an array of Recipe objects and returns an array containing all the 
// ingredients you need to make all of the recipes.
const allIngredients = (arr) => {
    let returnMe = [];
    let noDupes = [];
    for (let obj of arr) {
        returnMe = returnMe.concat(obj["ingredients"]);
    }
    for (let str of returnMe) {
        if (!noDupes.includes(str)) {
            noDupes.push(str);
        }
    }
    return noDupes;
}
console.log("9) ", allIngredients(recipeObj));
// Bonus: Remove duplicate ingredients from the final array

// 10. Write a function that takes in an array of Recipe objects and an array of ingredients and returns all the 
// recipes that you are able to make.
let ingredients = ["cheese", "tomato", "dough", "beef"];

const allRecipes = (rec, ing) => {
    let ingObj = {};
    let result = [];
    for (let key of ing) {
        ingObj[key] = 1;
    }
    for (let i = 0; i < rec.length; i++) {
        for (let key in ingObj) {
            let curObj = rec[i]["ingredients"];
            if (curObj.every(item => ingObj[item] !== undefined)) {
                result.push(rec[i]);
                break;
            }
        }
    }
    return result;
}

console.log("10) ", allRecipes(recipeObj, ingredients));

// let testObj = [
//     {
//         ing: ["a","b"]
//     },
//     {
//         ing: ["a"]
//     }
// ]

// let check = ["a", "b"];

// function call(obj, check) {
//     let outObj = {};
//     let outArr = [];
//     for(let key of check) {
//         outObj[key] = 1;
//     }
//     console.log(outObj);
//     for(let i = 0; i < obj.length; i++) {
//         for(let key in outObj) {
//             console.log(obj[0].ing)
//             if(obj[i].ing.every(item => outObj[item] !== undefined)) {
//                 outArr.push(obj[i]);
//                 break
//             }
//         }
//     }
//     return outArr;
// }
// console.log(call(testObj, check));