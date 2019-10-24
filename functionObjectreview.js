console.log('QUESTION 1')
const averageOne = (a, b)=>{return (a+b)/2}
console.log(averageOne(4,6))

console.log('QUESTION2')
const averageTwo = (a,b,c)=>{return(a+b+c/3)}
console.log(averageTwo(1,3,5))

console.log('QUESTION3')
// let arr3=[1,2,3,4,5,10,10]
// const averageThree =(arr3)=>{
//     let
// }
let average3 = (arr3) => arr3.reduce((a, b) => a + b) / arr3.length;
console.log(average3([1, 2, 3, 4, 5, 10, 10]));
console.log('QUESTION 4')
let removeEven = (arr4)=> arr4.filter((a,b) => b % 2 === 0)
console.log(removeEven([1,2,3,4,5,6]))

console.log('QUESTION 5')
let positiveNums = (arr5)=> arr5.every((a,b )=> a>= 0&& b>0)
console.log(positiveNums([-4,3,-2,4]))

console.log('QUESTION 6')
let arr6 = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]
lowerCase = function(b){
    return b.toLowerCase()
}
arr6 = arr6.map(lowerCase)
console.log(arr6)

console.log('QUESTION 7')
let arr7 = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]
let string7 = arr7.filter((el)=>{
    if(typeof el === 'string'){
        return el;
    }
})
console.log(arr7.join(' '))

console.log('QUESTION 8')
const newRandom = (number)=>{
    return Math.ceil(Math.random()*(number))
}
console.log(newRandom(7))


console.log('QUESTION 9')
let arr9 = [3,-4,5,-6]
arr9 =arr9.map(function(a){
    return Math.abs(a)
})
let absolute9 = arr9.reduce((absolute9, el)=>{
    return absolute9 + el
}, 0)
console.log(absolute9)

console.log('QUESTION 10')

const fToC = (num10)=>{
    return (num10 - 32)* 5/9
}
console.log(fToC(32))