// Question 1

const average = (num1, num2) => {
    return (num1 + num2) / 2
}
console.log(average(2, 7))

// Question 2 

const average2 = (num3, num4, num5) => {
    return (num3 + num4 + num5) / 3
}
console.log(average2(3, 3, 3))

// Question 3

const coolNum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i]
    }
    return (sum / arr.length)
}

console.log(coolNum([1, 5, 2, 9, 4, 0]))

//Question 4 

const oddNums = (arr2) => {
    let odds = []
    for (let i = 0; i < arr2.length; i++){
        if(arr2[i] % 2 !== 0){
            odds.push(arr2[i])
        }
    }
    return odds
}
console.log(oddNums([4, 5, 9, 10, 11]))


// Question 5

const posNum = (arr3) => {
    for (let i = 0; i < arr3.length; i += 1) {
        if (arr3[i] < 0) {
            return "false"
        } else {
            return "true"
        }
    }
}

console.log(posNum([-8, 1, 8, -4, 5]))

// Question 6

const str = (arr4) => {
    for (let i = 0; i < arr4.length; i++) {
    arr4[i] = arr4[i].toLowerCase();}
    return arr4
}
console.log(str(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]))

// Question 7

const str2 = (arr5) => {
   return arr5.join(" ")
}
console.log(str2(["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]))

// Question 8

const ranInt = (num1) => {
let ran = (Math.random() * (num1 - 1) + 1)
return Math.ceil(ran)
}
console.log(ranInt(4))


// Question 9

const abSum = (arr6) => {
    let sum = 0
    for (let i = 0; i < arr6.length; i += 1) {
       sum += Math.abs(arr6[i])
    }
    return sum
}

console.log(abSum([-9,-4,5,-6]))


//Question 10 

function toCelcius(f) {
    return (5/9) * (f-32)
  } 
  console.log(toCelcius(78))