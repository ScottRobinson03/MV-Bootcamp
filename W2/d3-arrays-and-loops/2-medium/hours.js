/*
    Create an object called employee with the following:
    properties
        weeklyHours - [7,6,7,7] => Each element represents a single shift's length
    methods
        getTotalHours() - this will return the total number of hours from the weeklyHours array.
        addShift(shiftLength)   - this should add the incoming argument to the weeklyHours array and return "Shift added."
                                - before the number is added, it should make sure that in doing this,
                                  the employee won't exceed 5 shifts or 40 hours.
                                  If this happens, do not add the number, and return "Shift limit reached."  
*/

let employee = {
    weeklyHours: [7, 6, 7, 7],

    addShift(shiftLength) {
        if (this.weeklyHours.length == 5 || (this.getTotalHours() + shiftLength) > 40) {
            return "Shift limit reached.";
        }
        this.weeklyHours.push(shiftLength);
        return "Shift added."
    },

    getTotalHours() {
        return this.weeklyHours.reduce((c, p) => c + p, 0);
    }
};
// Test command (in terminal) "npm run test:d3:medium"
module.exports = { employee };
