// 1. Average of two numbers
const averageOfNum = (num1, num2) => {
    let average = (num1 + num2) / 2
    return average
}
console.log(averageOfNum(4, 6))

//2. Average of three numbers

const avegOfThreeNum = (num1, num2, num3) => {
    let average = (num1 + num2 + num3) / 3
    return average
}
console.log(avegOfThreeNum(1, 3, 5))

//3. Average of Array

const averageArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}
console.log(averageArr([1, 2, 3, 4, 5, 10, 10]))