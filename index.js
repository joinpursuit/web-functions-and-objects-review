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
// const averageOfArray = (arr) => {
//     let sum = 0;
//     for(let element of arr) {
//         sum += element;
//     }
//     return sum / arr.length;
// }

// console.log(averageOfArray([1,2,3,4,5,10,10]));

//PROBLEM 4
// const oddArray = (arr) => {
//     let oddArr = [];
//     for (let element of arr) {
//         if (element % 2 === 1) {
//             oddArr.push(element);
//         }
//     }
//     return oddArr;
// }

// console.log(oddArray([1,2,3,4,5,6]));

//PROBLEM 5
// const positiveArrCheck = (arr) => {
//     for(let element of arr) {
//         if(element < 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(positiveArrCheck([-4,3,-2,4]))

//PROBLEM 6
const lowerCaseString = (arr) => {
    let lowerCaseArr = []
    for (let element of arr) {
        lowerCaseArr.push(element.toLowerCase());
    }
    return lowerCaseArr;
}
console.log(lowerCaseString(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]));