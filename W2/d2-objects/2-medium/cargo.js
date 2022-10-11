/*  Create an object called cargo.
    This object has three properties: ship1, ship2 and ship3 with 
    values of 30,20 and 10 respectively.  Each ship is meant to carry equal weight.
    Create a method called shareTheLoad.
    This method will return a new object {ship1, ship2, ship3} with values representing 
    how much weight they are under or over to balance the three ships. 

 */

const cargo = {
    ship1: 30,
    ship2: 20,
    ship3: 10,

    shareTheLoad() {
        const values = Object.values(this).slice(0, -1);
        const totalWeight = values.reduce((a, b) => a+b);
        const weightShouldBe = totalWeight / values.length;

        return {
            ship1: weightShouldBe - this.ship1,
            ship2: weightShouldBe - this.ship2,
            ship3: weightShouldBe - this.ship3
        };
    }
}

// Test command (in terminal) "npm run test:d2:medium:cargo"
module.exports = { cargo };
