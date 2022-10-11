/*
https://www.schoolsobservatory.org/discover/quick/planet_age
=============================================================
||                  || Mercury || Venus || Earth  || Mars  ||
||------------------||---------||-------||--------||-------||
||   Radius         || 2440    || 6052  || 6378    || 3397 ||
||   yearLength     || 88      || 225   || 365.25  || 687  ||
||   surfaceGravity || 0.38    || 0.91  || 1       || 0.38 ||
||   moons          || 0       || 0     || 1       || 2    ||

Using the above chart, create an object for each planet with the provided properties and their values.
*/

let earth = {
    radius: 6378,
    yearLength: 365.25,
    surfaceGravity: 1,
    moons: 1
};

let venus = {
    radius: 6052,
    yearLength: 225,
    surfaceGravity: 0.91,
    moons: 0
};

let mercury = {
    radius: 2440,
    yearLength: 88,
    surfaceGravity: 0.38,
    moons: 0
};

let mars = {
    radius: 3397,
    yearLength: 687,
    surfaceGravity: 0.38,
    moons: 2
};

// Test command (in terminal) "npm run test:d2:easy:planets-1"
module.exports = { mercury, venus, earth, mars };
