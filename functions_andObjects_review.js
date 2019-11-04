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
