/* Define a new class called Laps
    The constructor will take the following argument and set them as properties of any new instance.
            * @param {number} lapDistance -  in metres

    The constructor will also set two more properties:
            totalDistance = 0
            this.splits = []
            
    Method to define
        addLap
            * @param {number} lapTime
            pushes the lapTime to the splits array
            adds lapDistance to the totalDistance
*/

class Laps {
    constructor(lapDistance) {
        this.lapDistance = lapDistance;
        
        this.totalDistance = 0;
        this.splits = [];
    }

    addLap(lapTime) {
        this.totalDistance += this.lapDistance;
        this.splits.push(lapTime);
    }
}


module.exports = {Laps}