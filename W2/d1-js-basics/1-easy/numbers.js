/* 
Create a variable called x and assign a value of 2.
Create a variable called y and assign a value of 5.
Create a variable called z and assign a value of 12.
1. Log x to the console
2. Log y to the console
3. Log z to the console
4. Log double the value of x to the console.
5. Log double the triple of y to the console.
6. Log half the value of z to the console.
7. Log the result of x+y+z to the console.

*/

function d1EasyNumbers() {
  const x = 2;
  const y = 5;
  const z = 12;

  console.log(x);
  console.log(y);
  console.log(z);

  console.log(x * 2);
  console.log(y * 3);
  console.log(z / 2);

  console.log(x + y + z);
}
d1EasyNumbers();

// Test command (in terminal) "npm run test:d1:easy:numbers"
module.exports = { d1EasyNumbers };
