/*
We will be working with some in-built JavaScript methods for strings.  Just like the methods you previously 
defined on your objects, these in-built methods are available for us to use when working with strings, and they
can be accessed exactly the same way, using the dot notation.

1. Using the function launchCodeCheck, check the length of the code argument.
   If it's less than 8 characters return "Launch code is too short."
   Otherwise return "Launch code is long enough."

2. Write some logic for the function sayItLoudly that takes a string and returns it in all-caps and an exlaimation mark.
    hello  =>  HELLO!

3. The function indoorVoice should return the string in all lowercase.  However, if the string includes an exclaimation mark
    return "shhhh" instead.

*/
function launchCodeCheck(code) {
  return code.length < 8 ? "Launch code is too short." : "Launch code is long enough.";
}

function sayItLoudly(str) {
  return str.toUpperCase() + "!";
}
function indoorVoice(str) {
  return str.includes("!") ? "shhhh" : str.toLowerCase();
}

// Test command (in terminal) "npm run test:d2:easy:string-methods"
module.exports = { launchCodeCheck, sayItLoudly, indoorVoice };
