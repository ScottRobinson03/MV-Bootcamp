/* 
We are going to build some functions to help us deal with rectangles.
All functions will take two numbers as arguments: argument1 is width, argument2 is height.
1. Write a function called findArea that returns the area.
2. Write a function called findPerimeter that will both return the perimeter and log it to the console.
3. Write a function that checks if the rectangle is a square.
Code Below*/

function findArea(width, height) {
    if (width < 1 || height < 1) {
        return "Invalid inputs";
    }

    return width * height;
}

function findPerimeter(width, height) {
    if (width < 1 || height < 1) {
        return "Invalid inputs";
    }

    const perim = (width + height) * 2;
    console.log(perim);
    return perim;
}

function isSquare(width, height) {
    return width == height;
}

// Test command (in terminal) "npm run test:d1:medium:rectangle"
module.exports = { findArea, findPerimeter, isSquare };
