const { fruits } = require('../../seed/fruitArray');
/*
arr.unshift
arr.push
arr.splice
arr.indexOf
arr.includes
*/

/*  Using the provided fruits array, complete the following 
    Because we're mutating the array as we go, the number of elements will change as will indexes of items.
    It will help to follow the instructions sequentially.
*/

//CREATE
//add "orange" to the beginning of the array
fruits.unshift("orange");

//add "raspberry" to the end of the array
fruits.push("raspberry")

// insert "mango" into the fruits array as the 6th item
fruits.splice(5, 0, "mango");

//READ

// declare a variable called isPineapple and check if the fruits array contains an element with value of 'pineapple'
const isPineapple = fruits.includes("pineapple");

// declare a variable called isCarrot and check if the fruits array contains an element with value of 'carrot'
const isCarrot = fruits.includes("carrot");

//What is the index of 'grape'?  Log this to console.
console.log(fruits.indexOf("grape"));

//log the 5th element to the console
console.log(fruits[4]);

//UPDATE

//that fifth element doesn't look right...  update it to "Leeloo Dallas Multipass"
fruits[4] = "Leeloo Dallas Multipass";
console.log(fruits);

//DELETE

// The bananas are too bendy!  Find 'banana' and delete it!!
fruits.splice(fruits.indexOf("banana"), 1);

// Test command (in terminal) "npm run test:d3:easy:arrays"
module.exports = { fruits, isCarrot, isPineapple };
