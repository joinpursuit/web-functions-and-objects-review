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
//4.
let arr4 = [1,2,3,4,5,6]
let oddArr = []
function findOdd(arr) {
    for (let i = 0; i < arr.length; i++){
        if(arr[i]%2 != 0){
            oddArr.push(arr[i])
        }
    }
    return oddArr
}
console.log(findOdd(arr4))
//5.
let arr5 = [4,3,2,4]
const onlyPoss = (arr) =>{
    for(let i = 0; i < arr.length; i++){
        if(i > 0){
            return true
        }else{
            return false
            }
    }
}
console.log(onlyPoss(arr5))
//6.
let arr6 = ['HELLO', 'THERE', 'THESE', 'ARE', 'SOME', 'STRINGS']
let lowerArr = []
function lowerCase(arr){
    for (let i = 0; i < arr.length; i++){
        lowerArr.push(arr[i].toLowerCase())
    }return lowerArr
}
console.log(lowerCase(arr6))