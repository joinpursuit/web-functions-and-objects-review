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
// const lowerCaseString = (arr) => {
//     let lowerCaseArr = []
//     for (let element of arr) {
//         lowerCaseArr.push(element.toLowerCase());
//     }
//     return lowerCaseArr;
// }
// console.log(lowerCaseString(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]));

//PROBLEM 7
// const combineArray = (arr) => {
//     let combined = arr.join(" ");
//     return combined;
// }

// console.log(combineArray(["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]));

//PROBLEM 8
// const randomInt = (max) => {
//     return Math.floor(Math.random() * max) + 1;
// }

// console.log(randomInt(7));

//PROBLEM 9
// const absoluteSum = (arr) => {
//     let sum = 0;
//     for(let element of arr) {
//         sum += Math.abs(element)
//     }
//     return sum;
// }

// console.log(absoluteSum([3, -4, 5, -6]))

//PROBLEM 10
// const tempChange = (temp) => {
//     return (temp - 32) * (5/9);
// }
// console.log(tempChange(212));

//OBJECTS
//Step 1 && 2
let users = [
    user1 = {
        name: "Samantha",
        emailAddress: "Samantha@gmail.com",
        age: 19
    },

    user2 = {
        name: "Isaiah",
        emailAddress: "Isaiah@gmail.com",
        age: 19
    },

    user3 = {
        name: "Corey",
        emailAddress: "Corey@gmail.com",
        age: 19
    }
]

//Step 3
const userEmail = (arr) => {
    let emailAdresses = [];
    for(let element of arr) {
        emailAdresses.push(element.emailAddress);
    }
    return emailAdresses;
}

// console.log(userEmail(users))

//Step 4
const averageAge = (arr) => {
    let ageSum = 0;
    for(let element of arr) {
        ageSum += element.age;
    }
    return Math.floor(ageSum / arr.length);
}

// console.log(averageAge(users));

//Step 5
const ageOfConsent = (arr) => {
    for(let element of arr) {
        if(element.age < 18) {
            return false;
        }
    }
    return true;
}

// console.log(ageOfConsent(users));

//Step 6
let recipes = [
    recipe1 = {
        name: "Apple Pie",
        ingredients: "apple",
        time: 30
    },
    recipe2 = {
        name: "Sweet Potatoe Pie",
        ingredients: "sweet potato",
        time: 45
    },
    recipe3 = {
        name: "Pumpkin Pie",
        ingredients: "pumpkin",
        time: 50
    }
]

const leastTime = (arr) => {
    let shortestTime = Infinity;
    let recipe
    for (let element of arr) {
        if (element.time < shortestTime) {
            shortestTime = element.time;
            recipe = element.name;
        }
    }
    return recipe;
}
// console.log(leastTime(recipes));