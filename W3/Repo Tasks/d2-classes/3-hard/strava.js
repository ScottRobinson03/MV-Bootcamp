/* Define a new class called Exercise
    The constructor will take the following arguments and set them as properties of any new instance.
            * @param {number} distance -  in kilometres
            * @param {number} time -  in seconds
            * @param {number} heartBeats
            * @param {number} steps
    Methods to define
        toMinutesAndSeconds
            * @param {number} seconds 
            * @return {string} - in the format "4m:0s"  the seconds will be rounded to nearest integer.
        pace
            @return {string}  -  pace per km in minutes and seconds format
        beatsPerMinute
            @return {} - beatsPerMinute returns the average beats per minute as integer
        strideLength 
            @return {number} - strideLength returns the average length per stride in metres.
*/

class Exercise {
    constructor(distance, time, heartBeats, steps) {
        this.distance = distance;
        this.time = time;
        this.heartBeats = heartBeats;
        this.steps = steps;
    }

    beatsPerMinute() {
        return Math.floor(this.heartBeats / (this.time / 60))
    }

    pace() {
        return this.toMinutesAndSeconds(this.time / this.distance);
    }

    strideLength() {
        return (this.distance * 1000) / this.steps;
    }

    toMinutesAndSeconds(seconds) {
        const quotient = Math.floor(seconds / 60);
        const remainder = Math.floor(seconds % 60);

        return `${quotient}m:${remainder}s`;
    }
}


module.exports = { Exercise }