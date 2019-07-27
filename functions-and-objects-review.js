//## 1. Average of two numbers

//Write a function that takes in two numbers as input and returns their average

const average = (num1, num2) => {
	return (num1 + num2)/2;
}

console.log(average(4,6));

//## 2. Average of three numbers

//Write a function that takes in three numbers as input and returns their average

const averageOf3 = (num1, num2, num3) => {
	return (num1 + num2 + num3) / 3;
}

console.log(averageOf3(1,3,5));

//## 3. Average of array

//Write a function that takes in an array of numbers as input and returns their average


function arrAvg(arr){
	return (arr.reduce((total, current) => {
		return total + current;
	}) / arr.length);
}

console.log(arrAvg([1,2,3,4,5,10,10]));

// ## 4. Remove even numbers

//Write a function that returns a new array with all even numbers removed.

function noEvenAllowed(arr){
	return arr.filter(elem => {
		return elem % 2 !== 0
	});
}

console.log(noEvenAllowed([1,2,3,4,5,6]));

//## 5. Make sure each number is positive

//Write a function that checks to see whether every number in an array is positive.

const isPositive = arr => {
	return arr.every(elem => {
		return elem > 0;
	});
}

console.log(isPositive([-4,3,-2,4]));

//## 6. Lowercase all strings

//Write a function that lowercases all strings in an array of strings.

const lowercaseAll = arr => {
	return arr.filter(elem => typeof elem === 'string')
	.map(elem => elem.toLowerCase());
}

console.log(lowercaseAll(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]));
console.log(lowercaseAll([1, 'HELLO', {one: 'uno'}]));

// ## 7. Combine strings

//Write a function that combines an array of strings into a single string separated by spaces.
 const combiner = arr => {
 	return arr.reduce((sentence, current) => {
 		return sentence + ' ' + current;
 	});
 }

 console.log(combiner(["It’s", "not", "a", "bug.", "It’s", "an", "undocumented", "feature!"]));

 // ## 8. Random number

//Write a function that returns a random integer between 1 and n

const random = num => {
	return Math.floor(Math.random() * (num + 1)) + 1;
}

console.log(random(7));

// ## 9. Sum of absolute values

//Write a function that returns the sum of the absolute values of an array

const absoluteSum = arr => {
	return arr.reduce((total, current) => {
		return total + Math.abs(current);
	});;
}

console.log(absoluteSum([3,-4,5,-6]));

//## 10. Fahrenheit to Celsius

//Write a function that converts a temperature in Fahrenheit to Celsius

const celsiusConverter = temp => {
	return (temp - 32) * (5 / 9); 
}

console.log( celsiusConverter(212));

//1. Write an object that represents a User.  It should have a property for the user's name, email address, and age.

const chuck = {
	name: 'Chuck',
	email: 'chukwukaaguolu@gmail.com',
	age: 25
}

//2. Make 3 different user objects and store them in an array

const ek = {
	name: 'ekene',
	email: 'GAMALIELCOMPANYY@yahoo.com',
	age: 23
}

const grace = {
	name: 'grace',
	email: 'graceduruaku101010@msn.com',
	age: 24
}

const userArray = [chuck, ek, grace];

//3. Write a function that takes in an array of User objects, and returns an array with only their email addresses

const getEmail = arr =>{
	return arr.map(elem => elem.email);
}

console.log(getEmail(userArray));

//4. Write a function that takes in an array of User objects, and returns the average age of all users. Rounded down.

const averageAge = arr => {
	return Math.floor((arr.reduce((total, current) => {
		return total + current.age;
	}, 0) / arr.length)); 
}

console.log(averageAge(userArray));

//5. Write a function that takes in an array of User objects and returns whether or not all users have an age greater than 18

const over18 = arr => {
	return arr.every(elem => elem.age > 18);
}

console.log(over18(userArray));

//6. Write an object that represents a Recipe.  It should have a property for the recipe's ingredients, name, and how long it will take to make.

const recipe1 = {
	name: 'spaghetti',
	ingredients: ['pasta', 'tomatoes', 'salt', 'pepper', 'beef'],
	timeInMinutes: 45
};

//7. Make 3 different recipe objects and store them in an array.

const recipe2 = {
	name: 'lemonade',
	ingredients: ['lemons', 'cucumbers', 'water', 'sugar'],
	timeInMinutes: 10
}

const recipe3 ={
	name: 'Beef Wellington',
	ingredients: ['beef', 'mushrooms', 'puff pastry', 'ham', 'eggs', 'salt', 'pepper'],
	timeInMinutes: 120
}

const listOfRecipes = [recipe1, recipe2, recipe3];

//8. Write a function that takes in an array of Recipe objects and returns the recipe that will take the least amount of time to make.

const leastTime = arr => {
	let leastTime = arr.reduce((least, current) => {
		if(least.timeInMinutes < current.timeInMinutes){
			return least;
		}
		return current;
	});

	return leastTime;
}

console.log(leastTime(listOfRecipes));

// 9. Write a function that takes in an array of Recipe objects and returns an array containing all the ingredients you need to make all of the recipes.

const compileIngredients = arr => {
	let arrOfingredientArr = arr.map(elem => {
		return elem.ingredients;
	}).reduce((master, current) => {
		return master.concat(current);
	});

	let filter = [];
	for(let i = 0; i < arrOfingredientArr.length; i++){
		let foundInFilter = false;
		for(let j = 0; j < filter.length; j++){
			if(arrOfingredientArr[i] === filter[j]){
				foundInFilter = true;
			}
		}
		if(!foundInFilter){
			filter.push(arrOfingredientArr[i]);
		}

``}

	return filter;
}

console.log(compileIngredients(listOfRecipes));

//10. Write a function that takes in an array of Recipe objects and an array of ingredients and returns all the recipes that you are able to make.

const recipeChecker = (recipes, ingredients) => {
	let availableRecipes = [];

	for(let i = 0; i < recipes.length; i++){
		let goodRecipe = recipes[i].ingredients.every(elem => {
			return ingredients.indexOf(elem) !== -1;
		})
		if(goodRecipe){
			availableRecipes.push(recipes[i]);
		}
	}

	return availableRecipes;
}

let test = compileIngredients(listOfRecipes);
test.pop();

console.log(recipeChecker(listOfRecipes, test));