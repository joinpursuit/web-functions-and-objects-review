// FUNCTIONS
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


// Problem 7
const singleString = (arr) => {
    return arr.join(" ")
}
console.log(singleString(["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]))


// Problem 8
const randomNum = (num) => {
    return Math.floor(Math.random(1) * num)
}
console.log(randomNum(7))


// Problem 9
const sumAbsolute = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.abs(arr[i])
    }
    return sum
}
console.log(sumAbsolute([3,-4,5,-6]))


// Problem 10
const temptToCelsius = (f) => {
    return (5/9) * (f-32)
}
console.log(temptToCelsius(212))


// OBJECTS
// Problem 1
let user = {
    name: "Jovanni",
    email: "wegothis@gmail.com",
    age: 27
}
console.log(user)


// Problem 2
let array = [];
let user1 = {name: "Ashya", email: "yougood@gmail.com", age: 24};
let user2 = {name: "Jovanni", email: "imokay@yahoo.com", age: 27};
let user3 = {name: "Corey", email: "noemail@hotmail.com", age: 30};
array.push(user1, user2, user3)
console.log(array)


// Problem 3
const arrayEmail = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]["email"])
    }
    return newArr
}
console.log(arrayEmail(array))


// Problem 4
const averageAge = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]["age"]
    }
    return Math.floor(sum/arr.length)
}
console.log(averageAge(array))


// Problem 5
const adultAge = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]["age"] < 18) {
            return "not all users are 18 or older"
        } else {
            return "all users are 18 or older"
        }
    }
}
console.log(adultAge(array))