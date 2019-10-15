// Write a function that takes in two numbers as input and returns their average

const Avg = (num1,num2) => {return (num1+num2)/2}

console.log(Avg(4,6))

// Write a function that takes in three numbers as input and returns their average

const avgNum = (num1,num2,num3) => {return (num1+num2+num3)/3}

console.log(avgNum(1,3,5))

// Write a function that takes in an array of numbers as input and returns their average

const avgArr = (arr) => {
    let sum = 0

    for(let i = 0; i <arr.length; i++){
        sum += arr[i]
    }
return sum/arr.length
}

let arr = [1,2,3,4,5,10,10]

console.log(avgArr(arr))

// Write a function that returns a new array with all even numbers removed.

const evenArr = (arr) => {

    let evenarr =[]
  
    for (let i = 0; i < arr.length; i++){
      if(i %2 === 0 ){
        evenarr.push(arr[i])
      }
    }
return evenarr
}

let arr1 =[1,2,3,4,5,6]

console.log(evenArr(arr1))

const newfun = (fm,num) =>{

    return fm(num)
}

console.log(newfun(evenArr,arr1))

// Write a function that checks to see whether every number in an array is positive.

const arrPostive = (arr) => {

    for( let i =0; i < arr.length; i ++){

        if (arr[i]< 0){
            return false
        }
            
        
    }

    return true
}

let arr2 = [4,3,2,4]

console.log(arrPostive(arr2))

//Write a function that lowercases all strings in an array of strings.


// const lowerArr = (arr) => {

//  let lowerCasearr = []
  
//     for (let i = 0; i < arr.length; i++){
//       lowerCasearr.push(arr[i].toLowerCase())
//     }
// return lowerCasearr
// }

// let arrletter = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]


const lowerArr = (arr) => {
    let lowerCasearr = []
  
    for (let i = 0; i < arr.length; i++){
        if( typeof arr[i] === "string" ){
      lowerCasearr.push(arr[i].toLowerCase())
    }
    }
return lowerCasearr
}

let arrletter = ["HELLO", 2, "THESE", "ARE", 3, "STRINGS"]

console.log(lowerArr(arrletter))

// Write a function that combines an array of strings into a single string separated by spaces.

const arrString = (arr) =>{

   return arr.join(" ")
}

let sentArr = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
console.log(arrString(sentArr))

// Write a function that returns a random integer between 1 and n

const  randomNum = (n) => {

   return Math.floor((Math.random()*n) +1)
}

console.log (randomNum(5))

// Write a function that returns the sum of the absolute values of an array

const sumAbNum = (arr) => {
    let sum = 0

    for(let i = 0; i <arr.length; i++){
        sum += Math.abs(arr[i])
    }
return sum
}

let arr3 = [3,-4,5,-6]

console.log(sumAbNum(arr3))


const ftoc = (num) => {

return (num - 32) *(5/9)

}

console.log(ftoc(32))


// ## Objects

let personObj = {

    username: "John",
    email: "john123@gmail.com",
    address: "Queens",
    age: 29

}

personObj["car"] = "Toyota"
personObj["phone"] = "iphone"
personObj["drink"] = "Kombucha"


const fEmail = (object) => {

    for(key in object) {   
        if (key === "email"){
        return object[key]
        }
    }
}


console.log(fEmail(personObj))

 let people =[
     {
     username: "John",
     email: "john123@gmail.com",
     address: "Queens",
     age: 18
     },
     {username: "John",
     email: "john123@gmail.com",
     address: "Queens",
     age: 10 }
 ]
// 4. Write a function that takes in an array of User objects,
//  and returns the average age of all users. Rounded down.

const averageUser = (arr) => {

let sum = 0

for(let i =0; i < arr.length; i++){

 sum += arr[i]["age"]

}
return Math.floor (sum/arr.length)
}

console.log(averageUser(people))


// Write a function that takes in an array of
// User objects and returns whether or not all users have an age greater than 18

const userOver18 = (arr) => {

    
    for(let i =0; i < arr.length; i++){
    if(arr[i]["age"] < 18 ){
        return "Not all over 18"

    }
    }
    return "All over 18"
    }

console.log(userOver18(people))

// Make 3 different recipe objects and store them in an array.

let reciOdj = [
    {
        name: "Cake",
        cookTime: 15,
        ingredients: ["eggs","milk","flour", "water", "oil"]
        
    },
    {
        name: "Birthday Cake",
        cookTime: 20,
        ingredients: ["eggs","milk","flour", "water","sprinkles"]
        
    }

    
]


// 7. Make 3 different recipe objects and store them in an array.

// reciOdj.push(
//     {
//         name: "Pound Cake",
//         cookTime: 25,
//         ingredients: ["corn","milk","flour", "water", "oil"]

//     }
// )

// 8. Write a function that takes in an array of Recipe objects and returns
//  the recipe that will take the least amount of time to make.

const recip = (arr) => {
    
   let  time = Infinity
    let recipe = ""

    for(let i = 0; i < arr.length; i ++){
        if (arr[i]["cookTime"] < time){
            time = arr[i]["cookTime"]
            recipe = arr[i]
        }


    }

    return recipe
}

console.log (recip(reciOdj))