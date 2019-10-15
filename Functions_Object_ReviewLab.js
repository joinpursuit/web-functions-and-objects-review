//PROBLEM 1
const average = (num1, num2) => {
    return (num1 + num2)/2
}
console.log(average(4,5)) // Verified

//PROBLEM 2
const average3 = (num1, num2, num3) => {
    return (num1 + num2 + num3)/3
}
console.log(average3(4,6,8))

//PROBLEM 3
const avgArray = (arr) => {
    let sum = 0
    for (let i=0;i<arr.length;i+=1){
        sum += arr[i]
    } 
    return sum/arr.length
}
console.log(avgArray([1,2,3,4]))

//PROBLEM 4
const evenNum = (arr) => {
    let evenArr = []
    for (let i=0;i<arr.length;i+=1){
        if (arr[i]%2 === 0){
            evenArr.push(arr[i]) 
    }
  }
    return evenArr
 } 

console.log(evenNum([1,2,3,4]))

//PROBLEM 5
const posNum = (arr) => {
    let falseArr = true
    for (let i=0;i<arr.length;i+=1){
        if (arr[i] < 0){
        falseArr = false
        } 
    } 
    return falseArr
}
console.log(posNum([1,2,3,4]))

//PROBLEM 6
const lowerCase = arr => {
    let lower = []
    for (let i=0; i<arr.length;i++){
        lower.push(arr[i].toLowerCase())
    } 
    return lower
}
console.log(lowerCase(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]))

const lowerCase2 = arr => {
    for (let i=0; i<arr.length;i++){
        arr[i] = arr[i].toLowerCase()
    } 
    return arr
}
console.log(lowerCase2(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]))


//PROBLEM 7

const combineString = arr => {
    return arr.join(" ")
}
console.log(combineString(["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]))

//Problem 8
const random = (n) => {
    return Math.ceil((Math.random() * (n-1)) + 1)
} 
console.log(random(7))

//Problem 9
const absValue = arr => {
    let sum = 0
    for (let i = 0; i < arr.length ; i++){
        arr[i] = Math.abs(arr[i])
        sum += arr[i]
    }
    return sum
}
console.log(absValue([3,-4,5,-6]))

//Problem 10
const tempFToC = tempInF => {
    return (tempInF - 32)/1.8
}
console.log(tempFToC(32))

// OBJECTS !
//QUESTION 1


// let User = {
//     name:
//     emailAddress:
//     age:

// }

//QUESTION 2

let arr = []
let user1 = {
    name: "God",
    emailAddress: "blah@gmail.com",
    age: 55
}
let user2 = {
    name: "Brandon",
    emailAddress: "blahblah@yahoo.com",
    age: 23
}
let user3 = {
    name: "Nilber",
    emailAddress: "blahx3@itunes.com",
    age: 21
}

arr.push(user1, user2, user3)

console.log(arr)

//QUESTION 3

const getEmail = (array) => {  
    let newArr = []
    for (let i = 0; i < array.length ; i++){ //code to print only email address of object in an array
        newArr.push(array[i].emailAddress)
    }
    return newArr
}
console.log(getEmail(arr))

//QUESTION 4


const averageAge = (array) => {
    let sum = 0
    
    for(let i = 0; i < array.length ; i++){
        sum = sum + array[i].age
        
    }
    return sum / array.length
}

console.log(averageAge(arr))


