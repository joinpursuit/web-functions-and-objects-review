// question 1 
const avg2 = (num1,num2) => {
     return (num1 + num2)/2
}
console.log(avg2(4,6));

//question 2
const avg3 = (num1,num2,num3) => {
    return (num1 + num2+num3)/3
}
console.log(avg3(1,3,5));

//question 3
const avgArr = (arr) => {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum/arr.length
}
console.log(avgArr([1,2,3,4,5,10,10]));

//question 4 
const removeEven = (arr) => {
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
console.log(removeEven([1,2,3,4,5,6]))

//BONUS Q4
let arr2 = [1,2,3,4,5,6,7,8,9,10];
const result =  arr2.filter((element) => {
 if (element % 2 === 1){
   return true;
 }
 else{
   return false;
 }
})          // result stores the new arr2 with filter(test) 
//console.log(arr2);
console.log(result);

// question 5
const checkPositive = (array) => {
    var output = true;
    for (let i = 0; i < array.length; i++){
        if (array[i] < 0){
            output = false;
        }
    }
    return output;
}
console.log(checkPositive([-4,3,-2,4]));


// BONUS Q5

// question 6
 const lowerCase = (arr) => {
     for(let i = 0 ; i < arr.length; i++){
        arr[i] = arr[i].toLowerCase()
     }
     return arr;
 }
 console.log(lowerCase(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]));

// question 7
const combine =(arr) => {
    let string = arr.join(" ");
    return string;
}
console.log(combine(["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]));

//question 8

const rand = (num) => {
    num = Math.floor((Math.random() * num) + 1); 
    return num
}
console.log(rand(10));

//question 9

const sumAbsolute = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] *= -1
            sum += arr[i]
        } else{
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumAbsolute([3,-4,5,-6]));

//question 10
const fToC = (F) => {
    let c = (F-32) * (5/9) 
    return c;
}
console.log(fToC(212));

//OBJECTS
//question 1
let user = {
    name:"test", 
    email:"test@gmail.com",
    age: 20
}
console.log(user);

//question 2
let arrayUsers = [
    { name: "kevin", 
      email: "kevin@gmail.com",
      age: 24
    },
    { name: "Ohidur", 
      email: "Ohidur@gmail.com",
      age: 23
    },
    { name: "SpiderMan", 
      email: "PeterP@outlook.com",
      age: 16
    },
];
console.log(arrayUsers);

//question 3
const emails = (arr) => {
    let emailArr = [ ]
    for(let i = 0; i < arr.length; i++){
        emailArr.push(arr[i]["email"]);
    }
    return emailArr;
}
console.log(emails(arrayUsers));

//question 4
const avgAge = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]["age"]
    }
    return Math.floor(sum/arr.length);
}
console.log(avgAge(arrayUsers));

//question 5
const ageOver18 = (arr) => {
    let output = false;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]["age"] <= 18){
            output = false;
        } else{
            output = true;
        }
    }
    return output;
}
console.log(ageOver18(arrayUsers));
