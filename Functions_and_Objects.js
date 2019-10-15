// Write a function that takes in two numbers as input and returns their average

// const avg = (num1,num2) => (num1+num2)/2



// ## 2. Average of three numbers

// Write a function that takes in three numbers as input and returns their average

// const avg = (num1,num2,num3) => {(num1+num2+num3)/(3) }


// ## 3. Average of array

// Write a function that takes in an array of numbers as input and returns their average
// let arr = [2,3,4,5,6]

// const average = (arr) => {
//  let sum = 0;
//  for (let i = 0; i <arr.length; i++){
//    sum +=arr[i]
//  }
//  return sum/arr.length
// }

// ## 4. Remove even numbers

// Write a function that returns a new array with all even numbers removed.

// ```
// Input: [1,2,3,4,5,6]
// Output: [1,3,5]




// ## 5. Make sure each number is positive

// Write a function that checks to see whether every number in an array is positive.

// ```
// Input: [-4,3,-2,4]
// Output: false
// ```

// const arrPostive = (arr) => {
//   for( let i =0; i < arr.length; i ++){
//       if (arr[i]< 0){
//       return false
//       }
//   }
//   return true
// }


## 6. Lowercase all strings

Write a function that lowercases all strings in an array of strings.
const switchCase = (arr) => {
  let lowerCaseArr = []
  for(let i = 0; i < arr.length; i++) {
  lowerCaseArr.push(arr[i].toLowerCase())
  }
}
let array1 = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]

switchCase(array1)


  ## 7. Combine strings

  Write a function that combines an array of strings into a single string separated by spaces.



  ## 8. Random number

Write a function that returns a random integer between 1 and n



## 9. Sum of absolute values

Write a function that returns the sum of the absolute values of an array


const sumAbNum = (arr) => {
  let sum = 0

  for(let i = 0; i <arr.length; i++){
      sum += Math.abs(arr[i])
  }
return sum
}

let arr3 = [3,-4,5,-6]

console.log(sumAbNum(arr3))


const ftoc = (num) => {

return (num - 32) *(5/9)

}

console.log(ftoc(32))