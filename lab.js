// # Mid-Unit-1 Review Lab

// In this lab, we will review two key topics covered so far: Objects and Functions.  These are two vital topics for understanding JavaScript fundamentals, and will be used heavily as we build web apps in later units.


// ## Functions

// ## 1. Average of two numbers

// Write a function that takes in two numbers as input and returns their average

// ```
// Input: 4,6
// Output: 5
// ```
console.log("Question 1:")
const function1 = (num1, num2) => {
    console.log( (num1 + num2) / 2); 
    return ( (num1 + num2) / 2)
}
function1(5, 7);
console.log("-----------------------------------------------");
// ## 2. Average of three numbers

// Write a function that takes in three numbers as input and returns their average

// ```
// Input: 1,3,5
// Output: 3
// ```
console.log("Question 2:")
const function2 = (num1, num2, num3) => {
    console.log( (num1 + num2 + num3) / 3); 
    return ( (num1 + num2 + num3) / 3)
}
function2(1, 2, 3);
// ## 3. Average of array

// Write a function that takes in an array of numbers as input and returns their average

// ```
// Input: [1,2,3,4,5,10,10]
// Output: 5
// ```
console.log("Question 3:")
let array3 = [1, 2, 3, 4, 5, 10, 10];
const function3 = (inputArray) => {
    let output = inputArray.reduce( (total, currentValue ) => { 
         return total += currentValue; //this return will equal the final output var
    });
    console.log(output / inputArray.length)
    return output / inputArray.length;
}
function3(array3);
("-----------------------------------------------");
// ## 4. Remove even numbers

// Write a function that returns a new array with all even numbers removed.

// ```
// Input: [1,2,3,4,5,6]
// Output: [1,3,5]
// ```

// BONUS: If you didn't, rewrite this using an array method with a callback
console.log("Question 4:")
let array4 = [1, 2, 3, 4, 5, 6];
const function4 = (inputArray) => {
    let output =  inputArray.filter(isOdd);
    console.log(output);
}
function4(array4, isOdd = (element) => {
    return element % 2 === 1
})
console.log("-----------------------------------------------");
// ## 5. Make sure each number is positive

// Write a function that checks to see whether every number in an array is positive.

// ```
// Input: [-4,3,-2,4]
// Output: false
// ```
console.log("Question 5:")
let array5 = [-4, 3, -2, 4];
const function5 = (inputArray) => {
    let newArray = [];
    if(inputArray[0] > 0) {
        newArray.push(inputArray[0])
    }
    let output = inputArray.reduce( (total, currentValue)  => {
        if(currentValue > 0) {
            newArray.push(currentValue);
        }
});
console.log(newArray);
if(newArray.length !== inputArray.length) {
    console.log(" Not all the values in the array are positive")
} else if(newArray.length === inputArray.length){
    console.log("All the values in the array are positive")
}

}
function5(array5);
console.log("-----------------------------------------------");
// BONUS: If you didn't, rewrite this using an array method with a callback

// ## 6. Lowercase all strings

// Write a function that lowercases all strings in an array of strings.

// ```
// Input: ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
// Output: ["hello", "there", "these", "are", "some", "strings"]
// ```

// BONUS: 
//   - A. If you didn't, rewrite this using an array method with a callback

//   - B. Make it work even if the array has mixed types inside so that input = `[1, 'HELLO', {one: 'uno'}]` would give output = `['hello']` 
console.log("Question 6:");
let array6 = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"];
const function6 = (inputArray) => {
    let newArr = [];
    inputArray.forEach(element => {
          newArr.push(element.toLowerCase());
    })
    console.log(newArr);
}
function6(array6);
console.log("-----------------------------------------------");
// ## 7. Combine strings

// Write a function that combines an array of strings into a single string separated by spaces.

// ```
// Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
// Output: "It’s not a bug. It’s an undocumented feature!""
// ```
console.log("Question 7:");
let array7 = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
const function7 = (inputArray) => {
    let finalString = "";
    for(let i = 0; i < inputArray.length; i++) {
        finalString += inputArray[i];
        finalString += " ";
    }
    console.log(finalString);
}
function7(array7);
console.log("-----------------------------------------------");
// ## 8. Random number

// Write a function that returns a random integer between 1 and n

// ```
// Input: 7
// Output: 3
// ```
// Bonus: Your function should return 1 or 7 inclusive
console.log("Question 8:");
const returningARandomNumber = (number) => {
    let temp = Math.floor( (Math.random() * (number - 1) ) + 1);
    console.log(temp);
}
returningARandomNumber(7);
console.log("-----------------------------------------------");
// ## 9. Sum of absolute values

// Write a function that returns the sum of the absolute values of an array

// ```
// Input: [3,-4,5,-6]
// Output: 18
// ```
console.log("Question 9:")
let array8 = [3, -4, 5, -6];
const absoluteValueFunction = (inputArray) => {
    let total = 0;
    for(let i = 0; i < inputArray.length; i++) {
        total += Math.abs(inputArray[i]);
    }
    console.log(total);
}
absoluteValueFunction(array8);
console.log("-----------------------------------------------");
// ## 10. Fahrenheit to Celsius

// Write a function that converts a temperature in Fahrenheit to Celsius

// ```
// Input: 212
// Output: 100
// ```

// ## Objects

// 1. Write an object that represents a User.  It should have a property for the user's name, email address, and age.
console.log("Question 1:")
let obj1 = {
    name: "Sharrar",
    email: "SharrarKhan@pursuit.org",
    age: 50
}
console.log("-----------------------------------------------");
// 2. Make 3 different user objects and store them in an array
let obj2_1 = {
    name: "Sharrar",
    email: "Sharrar@pursuit.org",
    age: 50
}
let obj2_2 = {
    name: "Abdula",
    email: "Abdula@pursuit.org",
    age: 40
}
let obj2_3 = {
    name: "Khan",
    email: "Khan@pursuit.org",
    age: 30
}
let array2 = [];
array2.push(obj2_1, obj2_2, obj2_3);
console.log(array2);
console.log("-----------------------------------------------");
// 3. Write a function that takes in an array of User objects, and returns an array with only their email addresses
console.log("Question 3:");
// for (let i = 0; i < array2.length; i++) {
//     console.log(array2[i].email);
// }
const function3part2 = (inputArray) => {
    for (let i = 0; i < inputArray.length; i++) {
        console.log(inputArray[i].email);
    }
}
function3part2(array2);
console.log("-----------------------------------------------");
// 4. Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.
console.log("Question 4:");
const function4part2 = (inputArray) => {
    let ageCounter = 0;
    for (let i = 0; i < array2.length; i++) {
        ageCounter += (array2[i].age);
    }
    console.log(`The average user age is: ${Math.ceil(ageCounter / array2.length)}`);
}
function4part2(array2);
console.log("-----------------------------------------------");
// 5. Write a function that takes in an array of User objects and returns whether or not all users have an age greater than 18
console.log("Question5:");
const function5part2 = (inputArray) => {
    let checkAgeArray = [];
    let oldInputArraySize = inputArray.length;
    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i].age > 18) {
            checkAgeArray.push(inputArray[i])
        }
    }
    if(oldInputArraySize === checkAgeArray.length) {
        console.log("All the users are older than 18 years old");
    } else {
        console.log("Not all the users are above 18 years old")
    }
}
function5part2(array2);
console.log("-----------------------------------------------");
// 6. Write an object that represents a Recipe.  It should have a property for the recipe's ingredients, name, and how long it will take to make.
let riceRecipe = {
    name: "rice",
    minutesToMake: 30,
    recipeIngredients: ["rice", "water"]
}
// 7. Make 3 different recipe objects and store them in an array.
let curryRecipe = {
    name: "Curry",
    minutesToMake: 60,
    recipeIngredients: ["spices", "water", "meat"]
}
let kabobRecipe = {
    name: "Kabobs",
    minutesToMake: 75,
    recipeIngredients: ["spices", "meat", "oil"]
}
let parathaRecipe = {
    name: "paratha",
    minutesToMake: 20,
    recipeIngredients:  ["flour", "water"]
}
let array7Part2 = [];
array7Part2.push(curryRecipe, kabobRecipe, parathaRecipe);
// 8. Write a function that takes in an array of Recipe objects and returns the recipe that will take the least amount of time to make.
const function8Part2 = (inputArray) => {
    let resultArray = [];
    resultArray.push(inputArray[0]);
    for(let i = 1; i < inputArray.length; i++) {
        if(resultArray[0].minutesToMake > inputArray[i].minutesToMake) {
            resultArray[0] = inputArray[i]
        }
    }
    console.log(`The recipe that's takes the least time to make is: ${resultArray[0].name}, which only takes ${resultArray[0].minutesToMake} mintues to make`);
}
function8Part2(array7Part2);
console.log("-----------------------------------------------");
// 9. Write a function that takes in an array of Recipe objects and returns an array containing all the ingredients you need to make all of the recipes.
const function9Part2 = (inputArray) => {
    let resultArray = [];
    for(let i = 0; i < inputArray.length; i++) {
        resultArray.push(inputArray[i].recipeIngredients);
    }
    return resultArray;
}
function9Part2(array7Part2);
let quetion9Results = function9Part2(array7Part2);
// Bonus: Remove duplicate ingredients from the final array

// 10. Write a function that takes in an array of Recipe objects and an array of ingredients and returns all the recipes that you are able to make.
console.log("Question 10:");
const function10Part2 = (inputArray, ingredientsArray) => {
    let resultArray = [];
    for(let i = 0; i < inputArray.length; i++) {
        for(let j = 0; j < ingredientsArray.length; j++) {
            if(inputArray[i].recipeIngredients === ingredientsArray[j]) {
                resultArray.push(inputArray[i].name);
            }
        }
    }
    let resultString = "You can make: ";
    for(let i = 0; i < resultArray.length; i++) {
        resultString += (resultArray[i] + ", ")
    }
    console.log(resultString);
}   
function10Part2(array7Part2, quetion9Results); //first paramater is array of recipe objects