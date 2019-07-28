
// create a function with an argument
// console.log('QUESTION 1')
// // //Write a function that takes in two numbers as input and returns their average
// let values =  [4, 6]
// let sum = values.reduce((previous, current) => current += previous);
// let avg = sum / values.length;
//
// console.log(avg)


//create a function with a argument
// console.log('QUESTION 2')
// //Write a function that takes in three numbers as input and returns their average
// let values =  [1,3,5]
// let sum = values.reduce((previous, current) => current += previous);
// let avg = sum / values.length;
//
// console.log(avg)


// console.log('QUESTION 3')
// let values = [1,2,3,4,5,10,10]
// let sum = values.reduce((previous, current) => current += previous);
// let avg = sum / values.length;
//
// console.log(avg)


// console.log('QUESTION 4')
// //Write a function that returns a new array with all even numbers removed.
// let arrNum = [1,2,3,4,5,6]
// let oddNumArr = arrNum.filter((crrElem) => {
//   if (crrElem % 2 !== 0) {
//     return crrElem
//   }
// })
// console.log(oddNumArr)


console.log('QUESTION 4 *BONUS*')
//rewrite this using an array method with a callback


// console.log('QUESTION 5')
// //Write a function that checks to see whether every number in an array is positive.
// let ranNumArr = [-4,3,-2,4]
// let ifPosArr = ranNumArr.every((element) => {
//   if (element > 0) {
//     return true
//   }
// })
// console.log(ifPosArr)

console.log('QUESTION 5 *BONUS*')
//rewrite this using an array method with a callback



// console.log('QUESTION 6')
// //Write a function that lowercases all strings in an array of strings.
// let capStrArr = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
//
// let lowCapArr = capStrArr.map((crrElem) => {
//   return crrElem.toLowerCase()
// })
// console.log(lowCapArr)




console.log('QUESTION 6 *BONUS A*')
console.log('QUESTION 6 *BONUS B*')



//
// console.log('QUESTION 7')
// //Write a function that combines an array of strings into a single string separated by spaces.
// let strArr = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
//
// const singleStr = (strArr) => {
//   return strArr.reduce((acc, el) => {
//     return acc + " " + el
//   })
// }
// console.log(singleStr(strArr))




//console.log('QUESTION 8')
// Write a function that returns a random integer between 1 and n

// function findRanNum(n) {
//   return Math.floor(Math.random() * n)
// }
//
// console.log(findRanNum(9))



// console.log('QUESTION 9')
// //Write a function that returns the sum of the absolute values of an array
// let values = [3,-4,5,-6]
// let sum = values.reduce((acc, current) => {
//   return acc += Math.abs(current)
// })
// console.log(sum)




// console.log('QUESTION 10')
// //Write a function that converts a temperature in Fahrenheit to Celsius
// let fahrenheit = 212
//
// const convertFToC = (num) => {
//   return ((num - 32) * (5/9))
// }
// console.log(convertFToC(fahrenheit))






//#################OBJECTS#####################

// console.log('QUESTION 1')
// //Write an object that represents a User.  It should have a property for the user's name, email address, and age.
// let user1 = {
//   userName : 'Chinxy',
//   email : 'chinxydivine@icloud.com',
//   age : 27
// }



console.log('QUESTION 2')
//Make 3 different user objects and store them in an array

let theseUsers = [
 {userName : 'ShayD', email : 'davisshayna29@gmail.com', age : 24},
 {userName : 'Beatrice', email : 'shaybea070@aol.com', age : 21},
 {userName : 'CheChe', email : 'chechepet@icloud.com', age : 29}
];


console.log('QUESTION 3')
//Write a function that takes in an array of User objects, and returns an array with only their email addresses
let callUsers = theseUsers.filter(function(obj) {
  return obj.email
});
console.log(theseUsers)
