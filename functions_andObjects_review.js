//1.
const averageOfTwo = (num1,num2) => {
    return (num1 + num2)/2
}
//console.log(averageOfTwo(7,9))
//
//
//2.
const averageOfThree = (num1,num2,num3) =>{
    return (num1+num2+num3)/3
}
// average of undefined amount

const averageOfAmount = (...args) =>{
    return averageOfArray(args)
}
// average
//console.log(averageOfThree(1,3,5))
//
//
//3.
const averageOfArr = arr =>{
    let sum = 0
   arr.forEach((el) =>{
    sum += el
   })
   return sum/arr.length
}
//using a reduce function
const averageOfArr2 = arr =>{
    return arr.reduce((accu, el)=>{
        return accu+el / arr.length
    },0)
}
//console.log(averageOfArr2([1,3,5]))
//console.log(averageOfArr([1,3,5]))
//
//
//4.
const filterEvenNum = arr =>{
    return arr.filter((el) =>{
        if(el % 2 === 1){
            return el
        }
    })
}
//console.log(filterEvenNum([1,2,3,4,5,6,7]))
//
//
//5.
const possitiveCheck = arr =>{
    return arr.every((el)=>{
        if(el > 0){}
    })
}
//console.log(possitiveCheck([-4,4,-2,4]))
//
//
//6.
const lowerCaseStrings = arr =>{
    return arr.map((el)=>{
        if(typeof el === "string"){
            return el.toLowerCase()
        }
    })
}
//console.log(lowerCaseStrings(["HELLO","THESE","ARE","SOME","STRINGS"]))
//
//
//7.
const joinStrings = arr =>{
    let combined = arr.join(" ")
    return combined
}
//console.log(joinStrings(["It's", "not", "a", "bug", "it's", "a", "feature"]))
//
//
//8.
const RandomBetween = num =>{
    let random = (Math.floor((Math.random() * num) + 1))
        return random
}
//console.log(RandomBetween(10))
//
//
//9.
const absoluteSumArr = arr =>{
    return arr.reduce((el,accu)=>{
        return el+ Math.abs(accu)
    }, 0)
}
//with forEach
//
//
//console.log(absoluteSumArr([-3,-4,5,-6]))
//
//
//10.
const farhToCels = temp =>{
    let newTemp = (temp - 32) * 5/9
        return newTemp
}
//console.log(farhToCels(212))
//
//
//bonus
//
//
//1.
newUser = {
name: "Kelvin",
email: "kelvinarellano@pursuit.org",
age: 28
}
//
//
//2.
allNewUsers = [
    {
        name:"John",
        email:"johnsmith@gmail.com",
        age: 21
    },
    {
        name:"Jane",
        email:"janedoe@gmail.com",
        age:22
    },
    {
        name:"Jose",
        email:"josegarcia@gmail.com",
        age:23
    }
]
//
//
//3.
const emailOfUsers = arr =>{
    return arr.map((el)=>{
        return el.email
    })
}
//console.log(emailOfUsers(allNewUsers))
//
//
//4.
const avgAgeOfUsers = arr =>{
    return arr.reduce((el,accu)=>{
        return Math.floor((el.age += accu/arr.length))
    },0)
}
const avgAgeOfUsers2 = arr =>{
    let sum = 0
    arr.forEach((el)=>{
        sum += el.age
    })
    return Math.floor(sum/ arr.length)
}
//console.log(avgAgeOfUsers2(allNewUsers))
//
//
//5.
const ageCheck = arr =>{
    return arr.every((el)=>{
        if(el.age >= 18){
           return true
        }
    })
}
//console.log(ageCheck(allNewUsers))
//
//
//6.
