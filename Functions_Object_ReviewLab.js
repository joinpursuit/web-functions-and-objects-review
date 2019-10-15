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