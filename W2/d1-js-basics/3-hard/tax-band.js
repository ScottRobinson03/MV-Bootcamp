/* 
The provided function will be tested using multiple salarys.  Inside the function code-block, 
your challenge is to write the logic to calculate the amount of take-home pay after taxes have
been deducted.
Here are the tax bands. Rates are marginal.  Marginal bands mean you only pay the specified tax rate on that portion of salary. 
For example, if your salary puts you in the 40% tax bracket, then you only pay 40% tax on the segment of earnings in that income tax band. 
For the lower part of your earnings, you'll still pay the appropriate 20% or 0%.

Example £15,000.00 =>  £12,570.00 isn't taxed, then the remaining £2,430.00 is taxed at 20%

||------------------------------||------------||
||   Tax Band                   ||   Tax Rate ||
||------------------------------||------------||
||   £0         => £12,570.00   ||     0%     ||
||   £12,570.01 => £50,270.00   ||    20%     ||
||   £50,270.01 => £150,000.00  ||    40%     ||
||   £150,000.00 => To the moon!||    45%     ||
||============================================||
*/


const TAX_RATES = [
    [150000, 0.45],
    [50270, 0.40],
    [12570, 0.20]
]

function taxBand(salary) {
    if (salary <= 0) {
        return 0;
    }

    const originalSalary = salary;
    let taxTotal = 0;

    for (const [taxLimit, taxPercent] of TAX_RATES) {
        if (salary > taxLimit) {
            taxTotal += (salary - taxLimit) * taxPercent;
            salary = taxLimit;
        }
    }
    return +((originalSalary - taxTotal).toFixed(2)); // NB: the `+` makes it a Number instead of String
}

module.exports = { taxBand };
