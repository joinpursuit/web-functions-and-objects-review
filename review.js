/*## 1. Average of two numbers

Write a function that takes in two numbers as input and returns their average

```
Input: 4,6
Output: 5
```*/
function avg(n1,n2){
  return (n1 + n2)/2
}
console.log(avg(4,6))

/*## 2. Average of three numbers

Write a function that takes in three numbers as input and returns their average

```
Input: 1,3,5
Output: 3
```*/

function avg3(n1,n2,n3){
  return (n1 + n2 + n3)/3
}
console.log(avg3(1,3,5))

/*## 3. Average of array

Write a function that takes in an array of numbers as input and returns their average

```
Input: [1,2,3,4,5,10,10]
Output: 5
```*/

function avgArr(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum/arr.length
}

console.log(avgArr([1,2,3,4,5,10,10]))

/*## 4. Remove even numbers

Write a function that returns a new array with all even numbers removed.

```
Input: [1,2,3,4,5,6]
Output: [1,3,5]
```*/

function evenRemoved(arr){
  let newArr = arr.filter((elem)=>{
    return elem % 2 === 1
  })
  return newArr
}
console.log(evenRemoved([1,2,3,4,5,6]))

/*## 5. Make sure each number is positive

Write a function that checks to see whether every number in an array is positive.

```
Input: [-4,3,-2,4]
Output: false
```*/

function positive(arr){
  let newArr = arr.every((elem)=>{
    return elem >= 0
  })
  return newArr
}

console.log(positive([-4,3,-2,4]))

/*## 6. Lowercase all strings

Write a function that lowercases all strings in an array of strings.

```
Input: ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
Output: ["hello", "there", "these", "are", "some", "strings"]
```*/

function lower(arr){
  let newArr = arr.map((elem)=>{
    return elem.toLowerCase();
  })
  return newArr
}

console.log(lower(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]))

/*## 7. Combine strings

Write a function that combines an array of strings into a single string separated by spaces.

```
Input: ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
Output: "It’s not a bug. It’s an undocumented feature!""
```*/

function combine(arr){
  return arr.join(" ")
}

console.log(combine(["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]))

/*## 8. Random number

Write a function that returns a random integer between 1 and n

```
Input: 7
Output: 3
```
Bonus: Your function should return 1 or 7 inclusive*/

function rand(n){
  return Math.ceil(Math.random() * Math.floor(n))
}

console.log(rand(7))

/*## 9. Sum of absolute values

Write a function that returns the sum of the absolute values of an array

```
Input: [3,-4,5,-6]
Output: 18
```*/

function abs(arr){
  let newArr = arr.reduce((total,elem)=>{
    return total += Math.abs(elem)
  })
  return newArr
}

console.log(abs([3,-4,5,-6]))

/*## 10. Fahrenheit to Celsius

Write a function that converts a temperature in Fahrenheit to Celsius

```
Input: 212
Output: 100
```*/

function FtoC(temp){
  return (temp - 32) * 5/9

}
console.log(FtoC(212))

//## Objects

//1. Write an object that represents a User.  It should have a property for the user's name, email address, and age.
let User = {
  name:"Bob",
  email:"Bob@gmail.com",
  age:50
}

//2. Make 3 different user objects and store them in an array
let UserArr = [{
  name:"Sam",
  email:"Sam@gmail.com",
  age:32
},
{
  name:"Sally",
  email:"Sally@gmail.com",
  age:43
},
{
  name:"Jason",
  email:"Jason@gmail.com",
  age:11
}]

//3. Write a function that takes in an array of User objects, and returns an array with only their email addresses
function email(obj){
  eArr = [];
  for(let i in obj){
     eArr.push(obj[i].email)
  }
  return eArr
}
console.log(email(UserArr))

//4. Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.
function rounded(obj){
  let sum = 0
  for(let i in obj){
     sum += obj[i].age
  }
  return Math.floor(sum / obj.length)
}
console.log(rounded(UserArr))

//5. Write a function that takes in an array of User objects and returns whether or not all users have an age greater than 18
function greater(obj){
  let answer = true;
  for(let i in obj){
     if(obj[i].age <= 18){
       answer = false
     }
  }
 return answer
}
console.log(greater(UserArr))

//6. Write an object that represents a Recipe.  It should have a property for the recipe's ingredients, name, and how long it will take to make.
let recipe = {
  name:"Apple Pie",
  ingredients:["sugar","apples","dough"],
  time:30
}


//7. Make 3 different recipe objects and store them in an array.
let recip = [
  {
    name:"Cereal",
    ingredients:["milk","cherrios"],
    time:30
  },
  {
    name:"Pizza",
    ingredients:["Cheese","Tomato","Bread"],
    time:120
  },
  {
    name:"Sauce",
    ingredients:["Garlic","Vinegar"],
    time:10
  }
]

//8. Write a function that takes in an array of Recipe objects and returns the recipe that will take the least amount of time to make.

function leastTime(obj){
  let min = obj[0].time;
  let chosen = {};
    for(let i in obj){
      if(obj[i].time < min){
        min = obj[i].time
        chosen = obj[i]
      }
    }
    return chosen
  }

console.log(leastTime(recip))

//9. Write a function that takes in an array of Recipe objects and returns an array containing all the ingredients you need to make all of the recipes.

let Ingred = (recipes)=>{
  let allIngredients = [];
  let newArr = recipes.forEach((recipe)=>{
    allIngredients = allIngredients.concat(recipe.ingredients)
  })
  return allIngredients
}

let myIngred = Ingred(recip)
console.log(myIngred)

//10. Write a function that takes in an array of Recipe objects and an array of ingredients and returns all the recipes that you are able to make.

const doIHaveIngred = (recipe,allIngredients) => {
  let answer = /*recipe.ingredients.every*/((crrIng)=> {
   return allIngredients.includes(crrIng)
  })
  return answer
}

const checkIngred = (recipes,ingredients)=>{
  let answer = recipes.filter((recipe)=>{
    if(doIHaveIngred(recipe,ingredients)){
      return true
    }
    else{
      return false
    }
  })
  return answer
}

let answer = checkIngred(recip,myIngred)
