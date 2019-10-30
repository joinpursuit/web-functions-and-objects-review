// # Mid-Unit-1 Review Lab

// In this lab, we will review two key topics covered so far: Objects and Functions.  These are two vital topics for understanding JavaScript fundamentals, and will be used heavily as we build web apps in later units.


// ## Functions

// ## 1. Average of two numbers

// Write a function that takes in two numbers as input and returns their average

// ```
// Input: 4,6
// Output: 5
// ```

function averageTwo(arg1,arg2){
    let result = arg1 + arg2
    return result/2;
}

console.log("es5",averageTwo(4,6))

const avgTwo = (arg1,arg2) => {
 let result = arg1 + arg2;
 return result/2;
}
console.log("es6",avgTwo(4,6));


// ## 2. Average of three numbers


// Write a function that takes in three numbers as input and returns their average

// ```
// Input: 1,3,5
// Output: 3
// ```

function averageThree(arg1,arg2,arg3){
    let result = arg1 + arg2 +arg3;
    return result/3;
}

const avgThree = (arg1,arg2,arg3) => {
    let result = arg1 + arg2 + arg3;
    return result/3;

}

console.log("es5", averageThree(1,3,5));
console.log("es6", avgThree(1,3,5));

// ## 3. Average of array

// Write a function that takes in an array of numbers as input and returns their average

// ```
// Input: [1,2,3,4,5,10,10]
// Output: 5
// ```

let Arr3 = [1,2,3,4,5,10,10]

let result = Arr3.reduce(( acc,el,) =>{
    return acc + el / Arr3.length 
},0)

console.log(result)




// ## 4. Remove even numbers

// Write a function that returns a new array with all even numbers removed.

// ```
// Input: [1,2,3,4,5,6]
// Output: [1,3,5]
// ```

let Arr4 = [1,2,3,4,5,6]

const rmvEven = (arr)=>{
   let result = arr.filter(el =>{
        if(el % 2 !== 0){
            return el
        }
    })
    return result
}

console.log(rmvEven(Arr4))


// BONUS: If you didn't, rewrite this using an array method with a callback

// ## 5. Make sure each number is positive

// Write a function that checks to see whether every number in an array is positive.

// ```
// Input: [-4,3,-2,4]
// Output: false
// ```

let arr5 = [-4,3,2,4]

const positiveCheck = (arr) =>{
    let result = arr.every(el => {
        return el >0
    })
    return result
}


console.log(positiveCheck(arr5))

// BONUS: If you didn't, rewrite this using an array method with a callback

// ## 6. Lowercase all strings

// Write a function that lowercases all strings in an array of strings.

// ```
// Input: ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
// Output: ["hello", "there", "these", "are", "some", "strings"]
// ```

let Arr6 = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]

const lowerCase = (arr) =>{
    let result = arr.map(el =>{
        return el.toLowerCase()
    })
    return result
}

console.log(lowerCase(Arr6))
// BONUS: 
//   - A. If you didn't, rewrite this using an array method with a callback

//   - B. Make it work even if the array has mixed types inside so that input = `[1, 'HELLO', {one: 'uno'}]` would give output = `['hello']` 

// ## 7. Combine strings

// Write a function that combines an array of strings into a single string separated by spaces.

// ```
// Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
// Output: "It’s not a bug. It’s an undocumented feature!""
// ```
let array7 = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]

const arrayJoin = (arr) =>{
    let result = arr.join(' ')
    return result
}

console.log(arrayJoin(array7));


// ## 8. Random number

// Write a function that returns a random integer between 1 and n

// ```
// Input: 7
// Output: 3
// ```
// Bonus: Your function should return 1 or 7 inclusive

const randomNumber = (n) =>{
    let result = Math.ceil(Math.random() * n)
    return result
}

console.log(randomNumber(7))

// ## 9. Sum of absolute values

// Write a function that returns the sum of the absolute values of an array

// ```
// Input: [3,-4,5,-6]
// Output: 18
// ```

let array9 = [3,-4,5,-6]

const absValue = (arr) =>{
    let result = arr.reduce((el, acc) =>{
        return el + Math.abs(acc)
    },0)

    return result;
}

console.log(absValue(array9))

// ## 10. Fahrenheit to Celsius

function FarToCel(temp){
    return (temp - 32) * 5/9
}

console.log(FarToCel(212))

// Write a function that converts a temperature in Fahrenheit to Celsius

// ```
// Input: 212
// Output: 100
// ```

// ## Objects

// 1. Write an object that represents a User.  It should have a property for the user's name, email address, and age.

let user1 = {
    name: "Jonathan",
    email: "Jfagan16@gmail.com",
    age: 33
}

console.log(user1)
// 2. Make 3 different user objects and store them in an array

let userArr = [
     {
        name: "Jay",
        email: "jay@gmail.com",
        age: 21
    },
    {
        name: "reione",
        email: "reione@gmail.com",
        age: 25
    },
    {
        name: "Pam",
        email: "pam@gmail.com",
        age: 44
    }
]

console.log(userArr)


// 3. Write a function that takes in an array of User objects, and returns an array with only their email addresses
function objEmail(array){
    let results = array.map(el =>{
        return el.email;
    })
    return results
}

console.log(objEmail(userArr));

// 4. Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.

function objAge(array){
    let sum = 0;
    for (let i in array){
        sum += array[i].age
    }
    return Math.floor(sum / array.length)
}
console.log(objAge(userArr))


// 5. Write a function that takes in an array of User objects and returns whether or not all users have an age greater than 18
const greaterThenTen = (array) =>{
    let answer = array.every(el =>{
        return el.age >= 10
    })
    return answer;
}

console.log(greaterThenTen(userArr));

// 6. Write an object that represents a Recipe.  It should have a property for the recipe's ingredients, name, and how long it will take to make.
let recipe = {
    name: "Fried Chicken",
    ingredients: ["chicken, oil, flower"],
    time: 30
}

console.log(recipe)

// 7. Make 3 different recipe objects and store them in an array.

let recipes = [
    {
        name: "Fried Chicken",
        ingredients: ["chicken","oil","flower"],
        time: 30
    },
    {
        name: "Spaghetti",
        ingredients: ["noodles", "sauce", "tomatoes"],
        time: 60
    },
    {
        name: "pancakes",
        ingredients: ["mix","milk", "bananas"],
        time: 20
    }
]
console.log(recipes)

// 8. Write a function that takes in an array of Recipe objects and returns the recipe that will take the least amount of time to make.
const leastTime = (TimeToMake) =>{
    let time = TimeToMake[0].time
    let chosen = {}
    for(let i in TimeToMake){
        if (TimeToMake[i].time <time){
            chosen = TimeToMake[i]
        }
    }
    return chosen;
}
console.log(leastTime(recipes))

// 9. Write a function that takes in an array of Recipe objects and returns an array containing all the ingredients you need to make all of the recipes.
const allIngredients = (obj) =>{
     let ingredients = []
     obj.forEach(el =>{
         ingredients = ingredients.concat(el.ingredients)
     })
    //obj.map(el => {
    //     return el.ingredients}
    //     )
    // return ingredients.flat();
    return ingredients
}
console.log(allIngredients(recipes))
// Bonus: Remove duplicate ingredients from the final array

// 10. Write a function that takes in an array of Recipe objects and an array of ingredients and returns all the recipes that you are able to make.
const recipeIngredients = (array) =>{
    let ingredients 

}
