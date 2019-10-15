//1.
const averageAmount = (num1,num2) =>{
   return (num1 + num2)/2
}
console.log(averageAmount(4,6))
//2.
function thirdAverage(num1, num2, num3)  {
    return (num1+num2+num3)/3
}console.log(thirdAverage(1,3,5))
//3.
const arrAverage = (arr) => {
    sum=0;
    for (let i=0;i < arr.length; i++) {
        average = sum += arr[i] / arr.length
    }
    return average;
}
let arr3=[1,2,3,4,5,10,10]
console.log(arrAverage(arr3))
