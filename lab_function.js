console.log("Problem 1")
const returnAvg = (num1,num2) =>{
    let avg = 0;
    avg = (num1+num2)/2
    return avg
}
console.log(returnAvg(4,6))

console.log("Problem 2")
const returnAvg3 = (num1,num2,num3) =>{
    let avg = 0;
    avg = (num1+num2+num3)/3
    return avg
}
console.log(returnAvg3(1,3,5))

console.log("Problem 3")

const avgArry = (arry)=>{
    let sum =0;
    for (let i =0; i<arry.length; i++){
        sum += arry[i];
    }
    return sum/arry.length
}
console.log(avgArry([1,2,3,4,5,10,10]))


console.log("Problem 4")
const remvEven = (arry) =>{
    let newArry = [];
    for (let i =0; i<arry.length; i++){
        if (arry[i] %2 !== 0){
            newArry.push(arry[i])
        }
    }
    return newArry;
}
console.log(remvEven([1,2,3,4,5,6]))

console.log("Problem 5")

const remvNeg = (arry) =>{
    let nonPosi = true
    for (let i = 0; i < arry.length; i++){
       if(arry[i] <=0 ){
        nonPosi = false
    }
}
    return nonPosi
}
console.log(remvNeg([4,3,-1,4]))

console.log("Problem 6")

const lowerCase = (arr) => {
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i].toLowerCase())
    } 
    return newArr
}

console.log(lowerCase(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]))

console.log("Problem 7")
const singleStr = arr => {
    let newStr = ""
    for(let i = 0; i < arr.length; i ++){
        newStr = arr.join(" ")
    } return newStr
}

console.log(singleStr(["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]));

console.log("Problem 8")

const randomNum = (num1, num2) => {
    let num = 0
    num  = Math.floor((Math.random() * num2) + num1)
    return num
}
console.log(randomNum(1, 7))

console.log("Problem 9")
 const absoluteV = arr => {
    let sum = 0 
    for(let i = 0; i < arr.length; i++){
        sum += Math.abs(arr[i])
    } return sum
 }

 console.log(absoluteV([3,-4,5,-6]))

 console.log("Problem 10")
const farenToCel = temp => {
    return (temp - 32) * 5/9
}
console.log(farenToCel(212))

console.log("Object")
console.log("Object 1")
let user = {

}
user.name = "Brutus"
user.email = "kevinbrutus@pursuit.org"
user.age = 25

console.table(user)

console.log("Object 2")
let userArr = [{},{},{}]
userArr[0]['email'] = "janedoe@pursuit.org"
userArr[0]['sex'] = "female"
userArr[0]['shoe size'] = 9
userArr[0]['favoite movie'] = "The Lion King"
userArr[1]['email'] = "johndoe@pursuit.org"
userArr[2]['email'] = "thisshitworks@pursuit.org"

console.log(userArr)

console.log("Object 3")
const emailOnly = (arr) => {
    let emptyArr = []
    for(let i = 0; i < arr.length; i++){
        // emptyArr = arr[i].join(" ")
        if(arr[i]['email']){
            emptyArr += arr[i]['email'];
            emptyArr += " "
        }
    }
    return emptyArr
}

console.log(emailOnly(userArr))

console.log("Object 4")