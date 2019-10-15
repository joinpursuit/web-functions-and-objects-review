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

const arrayEven = (arr) => {
  let array = []
  for(let i = 0; i < arr.length; i++) {
    if(i % 2 !== 1) {
      array.push(arr[i])
    }
  }
  return array
}

console.log(arrayEven([1,2,3,4,5,6]))