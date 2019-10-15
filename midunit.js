// PROBLEM 1

// const avg = (num1, num2) => {
//     return (num1 + num2) / 2
// }
// console.log(avg(9,21))

// Problem 2

// const avg2 = (num1, num2, num3) => {
//     return (num1 + num2 + num3) / 3
// }
// console.log(avg2(9,10,11))



// PROBLEM 3


// const avg = (arr) =>{
//  sum = 0
//  for (i = 0; i < arr.length; i++){
//      sum += arr[i]
//     }
//     return sum / arr.length
// }
// console.log(avg([1, 2, 3, 4, 5, 10, 10]))


// PROBLEM 4

// let arr1 = [1, 2, 3, 4, 5, 6]
// const newArray = (arr) => {
//     let newArray = []
//     for (i = 0; i < arr.length; i ++)
//     if (arr[i] % 2 === 0){
//         newArray.push(arr[i])
//     }
//     return newArray

// }
// console.log(newArray(arr1));


//problem 5
// const positiveNum = (arr) =>{
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] >= 0) {
//             return true 
//         } else {
//             return false
//         }

//     } 
// }
//      console.log(positiveNum([-4,3,-2,4]));


// problem 6

const string = (arr) => {
    let lowerString = []
    for (let i = 0; i < arr.length; i++){
        lowerString.push(arr[i].toLowerCase())
    }
    return lowerString
}
console.log(string(["HELLO", "THERE", "ARE", "SOME", "STRINGS"]))

    

    
    
