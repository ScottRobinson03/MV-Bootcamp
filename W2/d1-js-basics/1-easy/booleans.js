/* 
Declare a variable called isDarkMode to a value of false
Log this value to the console.
Reassign this variable to true.
Log this new value to the console.

*/

function d1EasyBooleans() {
  let isDarkMode = false;
  console.log(isDarkMode);

  isDarkMode = true;
  console.log(isDarkMode);
}
d1EasyBooleans();

// Test command (in terminal) "npm run test:d1:easy:booleans"
module.exports = { d1EasyBooleans };
