//PROBLEM 1
// const averageOfTwoNum = (num1, num2) => {
//     return (num1 + num2) / 2;
// }

// console.log(averageOfTwoNum(4,6));

//PROBLEM 2

// const averageOfThreeNum = (num1, num2, num3) => {
//     return (num1 + num2 + num3) / 3;
// }

// console.log(averageOfThreeNum(1,3,5));

//PROBLEM 3
const averageOfArray = (arr) => {
    let sum = 0;
    for(let element of arr) {
        sum += element;
    }
    return sum / arr.length;
}

console.log(averageOfArray([1,2,3,4,5,10,10]));