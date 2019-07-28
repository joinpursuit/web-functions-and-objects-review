console.log('=========QUESTION 1 ==================');
let average1 = (arr1) =>
arr1.reduce((a, b) =>  a + b) / arr1.length;
console.log(average1([4, 6]));

console.log('===========QUESTION 2=================');
let average2 = (arr2) => arr2.reduce((a, b) => a + b) / arr2.length;
console.log(average2([1, 3, 5]));

console.log('===========QUESTION 3=================');
let average3 = (arr3) => arr3.reduce((a, b) => a + b) / arr3.length;
console.log(average3([1, 2, 3, 4, 5, 10, 10]));

console.log('============QUESTION 4=================');
let oddNum = (arr4) => arr4.filter((a, b) => b % 2 === 0);
console.log(oddNum([1, 2, 3, 4, 5, 6]));

console.log('=============QUESTION 5=============');
let arr5 = [-4, 3, -2, 4];
let result5 = arr5.every(el => {
    if (el < 0 === arr5) {
      return true;
    }

    return false;
  });
console.log(result5);

console.log('================QUESTION 6============');
let arr6 = ["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"];
toLower = function (a) {
  return a.toLowerCase();
};

arr6 = arr6.map(toLower);
console.log(arr6);

console.log('===============QUESTION7============');
let arr7 = ["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"];
let result7 = arr7.filter((el) => {
  if (typeof el === "string") {
    return el;
  }
});
console.log(arr7.join(' '));

console.log('========== QUESTION 8===========');
let randomNum = Math.floor(Math.random() * 7);
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNum);
let num7 = 3;
let randomIntegers = (max) => {
 return Math.floor(Math.random() * (max - 1)) + 1;
};

console.log(randomIntegers(num7));


console.log('===============QUESTION 9==============');
let arr9 = [3,-4,5,-6]
arr9 = arr9.map(function(a) {
  return Math.abs(a);
});

let total9 = arr9.reduce((total9, el) => {
return total9 + el;

}, 0)
console.log(total9);

console.log('========= QUESTION 10==================');
const celcius = [100];
const fahrenheit = celcius.map(a => a * 1.8 + 32);
console.log(fahrenheit);

console.log('=============******WELCOME TO THE OBJECTS JUNGLE*******++++')
console.log('*********YOU LIKE FUN AND GAMES*********');
console.log('******************QUESTION 1************************');
let user = {
  userName: 'TOM',
  email: 'tom@facebook.com',
  age: '33',
}

console.log(user.userName);

console.log('*****************QUESTION 2**************************');
let bills = [

{
  gas: '$60',
  maintenence: '$200',
  carpayment:'$130',
},
{
  gas:'80',
  maintenence: '$400',
  carpayment:'800'
},
{
  gas: '120',
  maintenence: '200',
  carpayment: '500',
},

]
for (let i = 0; i < bills.length; i++) {
  console.log(bills[i].gas);
}
console.log('*********************QUESTION 3*******************');
let user3 = [

{
  userName: 'TOM',
  email: 'tom@facebook.com',
  age: 33,
},
{
  userName: 'TANYA',
  email: 'tanya@facebook.com',
  age: 24,
},
{
  userName: 'Grant',
  email: 'grant@facebook.com',
  age: 16
}

];
for (let i = 0; i < user3.length; i++) {
  console.log(user3[i].email);
}

console.log('*****************QUESTION4***************');
for (let i = 0; i < user3.length; i++) {
  console.log(user3[i].age);
}

console.log('****************QUESTION5***************');
let objectresult5 = user3.every(el => {
    if (el < 18 === user3) {
      return true;
    }

    return false;
  });
console.log(result5);

console.log('****************QUESTION 6*************');
let gfPancake = [
  {
    wetIngredients: 'milk',
    dryIngredients: 'flour',
  },
  {
    wetIngredients: 'oil',
    dryIngredients: 'baking powder',
  },

];
console.log(gfPancake);
console.log('takes 10 to make');
console.log('***************QUESTION 7*********************');
for (let i = 0; i < gfPancake.length; i++) {
  console.log(gfPancake[i].wetIngredients);
}

console.log('****************QUESTION 9***********');
let ingredients = [];
for(let i = 0; i < gfPancake.length; i++) {
  ingredients.push(gfPancake[i].wetIngredients + " " + gfPancake[i].dryIngredients);
}

console.log(ingredients);
