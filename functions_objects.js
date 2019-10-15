//Problem 1
const average2 = (num1, num2) => {
    return (num1 + num2)/2
}
console.log(average2(4, 6))

//Problem 2
const average3 = (num1, num2, num3) => {
    return (num1 + num2 + num3)/3
}
console.log(average3(1, 3, 5))

//Problem 3
const averageOfArray = (arr) => {
    let sum = 0
    for(let i = 0; i <arr.length; i++){
        sum += arr[i]
    } return sum/arr.length
}
console.log(averageOfArray([1,2,3,4,5,10,10]))

//Problem 4
const removeEven = (arr) => {
    let newArray = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2 === 1){
            newArray.push(arr[i])
        }
    } 
    return newArray
}
console.log(removeEven([1,2,3,4,5,6]))

//Problem 5
const checkPositive = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            return "false"
        }
    }
}
console.log(checkPositive([-4,3,-2,4]))

//Problem 6
const lowerCase = (arr) => {
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].toLowerCase()
    } return arr
}
console.log(lowerCase(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]))