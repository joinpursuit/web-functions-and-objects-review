//Question 1
const findAverage = (num1, num2) => {
    let sum = num1 + num2
    let average = sum/ 2
   return average
    }
   console.log(findAverage(4, 6));

//Question 2
const avOfThree = (num1, num2, num3) => {
    let sum = num1 + num2 + num3
    let average = sum / 3
    return average
   }
   console.log(avOfThree(1, 3, 5));

   //Question 3
let arr = []
   const avOfArray = (arr) => {
      let sum = 0
      let length = 0
    for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
    }
      let average = sum / arr.length;
      return average
   }
   console.log(avOfArray([1, 2, 3, 4, 5, 10, 10]))

 // Question 4
 const evenFunction = (arr) => {
    let newArray = []
    for (let element of arr) {
      if (element % 2 === 1) {
        newArray.push(element);
      }
    }
    return newArray
   }
   console.log(evenFunction([1,2,3,4,5,6]));