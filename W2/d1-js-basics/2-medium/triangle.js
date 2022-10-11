/*
We are going to build some function to help us with triangles.
The functions will all take three numbers as arguments s1, s2, s3.
Each number given is the length of a line.
1. isTriangle: will return false if the three lines are unable to form a triangle
                or it will return true if the three lines can be used to construct a triangle.
2. findPerimeter: will return the perimeter of the triangle using the three side-lengths.
=====================================================================================
Code Below*/
function isTriangle(s1, s2, s3) {
    let a, b;
    const c = Math.max(s1, s2, s3);
    if (c == s1) {
        a = s2;
        b = s3;
    } else if (c == s2) {
        a = s1;
        b = s3;
    } else {
        a = s2;
        b = s1;
    }

    return (a + b > c) && (a + c > b) && (b + c > a)
}

function findPerimeter(s1, s2, s3) {
    if (Math.min(s1, s2, s3) < 1 || !isTriangle(s1, s2, s3)) {
        return "Invalid Input";
    }
    return s1 + s2 + s3;
}

// Test command (in terminal) "npm run test:d1:medium:triangle"
// NB: Tests were broken (thought 1, 2, 3 was a valid triangle when it's not) so I fixed them
module.exports = { isTriangle, findPerimeter };
