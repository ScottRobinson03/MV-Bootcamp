/*  1.   Write a function called outsideVoice that receives a string as an argument
        and adds three exclamation marks to the end then logs it to the console.    
        eg "Hello" => "Hello!!!"

    2.  Write a function called addThreeTripled that adds 3 whole numbers together then triples the result.
        Log it to the console.
*/

function outsideVoice(str) {
    console.log(`${str}!!!`);
}

function addThreeTripled(num1, num2, num3) {
    console.log((num1 + num2 + num3) * 3);
}


// Test command (in terminal) "npm run test:d1:easy:functions"
module.exports = { outsideVoice, addThreeTripled };
