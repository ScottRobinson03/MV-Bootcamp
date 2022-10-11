/*
We are going to build a function to help us check the area of a trapezium.
The function will take the arguments base1, base2 and height; these are all numbers.
It will return the area of the trapezium.
=====================================================================================
Code Below*/

function findArea(base1, base2, height) {
    if (Math.min(base1, base2, height) < 1) {
        return "Invalid input";
    }
    return (height * (base1 + base2)) * 0.5;
}

// Test command (in terminal) "npm run test:d1:medium:trapezium"
module.exports = { findArea };
