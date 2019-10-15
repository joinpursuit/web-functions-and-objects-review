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