// const numAverage = (num1, num2) => {
//     let average = 0
//     average = (num1 + num2) /2
//     return average 
// } 
// console.log(numAverage(4,6))

// const numAverage = (num1, num2, num3) => {

//     let average = Math.floor((num1 + num2 + num3) /3)
//     return average 
// } 
// console.log(numAverage(4,6,10))

// const arrayAverage = (arr) => {
//     let average = 0
//     for(let i = 0; i < arr.length; i++){
//       average += arr[i] / arr.length
//     }
//     return average
// }
// console.log(arrayAverage([1,2,3,4,5,10,10]))
// //shift option down 

// const arrayOdd = (arr) => {
//   let array = []
//   for(let i = 0; i < arr.length; i++) {
//     if(i % 2 !== 1) {
//       array.push(arr[i])
//     }
//   }
//   return array
// }

// console.log(arrayOdd([1,2,3,4,5,6]))



const arrayPositive = (arr) => {
  for(let i = 0; i < arr.length; i+=1) {
    if(arr[i] < 0) {
       console.log("false")
    // } else {
      // console.log("true")
    }
  }
  return
}
console.log(arrayPositive([4,3,2,4]));



// const lowString = (arr) => {
//   let array = [ ]
//   for(let i = 0; i < arr.length; i++) {
//     array.push(arr[i].toLowerCase())
//   }
//   return array
// }
// console.log(lowString(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]))

const combineString = (arr) => {
    let array2 = arr.join(" ")
    return array2
  }
  console.log(combineString(["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]))
