const divideTwoIntegers = (x, y) => {
    if (y===0) {
        return "Divide by zero error."
    }
    if (typeof x !="number" || typeof y != "number") {
        return "Inputs must be a number."
    }
    if (!Number.isInteger(x+y)) {
        return "Integers only."
    }
    return x/y
}


console.log(divideTwoIntegers(12,-3))



module.exports = {divideTwoIntegers}