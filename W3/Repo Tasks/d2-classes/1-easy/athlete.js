/* Define a new class called Athlete
    The constructor will take the following arguments and set them as properties of any new instance.
        * @param {string} name 
        * @param {array} events -  

            
    Methods to define
        addEvent
            * @param {string} event
            pushes the event argument to the events array property

            removeEvent
            * @param {string} event
            find and removes the event from the events array
*/

class Athlete {
    constructor(name, events) {
        this.name = name;
        this.events = events;
    }

    addEvent(event) {
        this.events.push(event);
    }

    removeEvent(event) {
        const eventIndex = this.events.indexOf(event);
        if (eventIndex != -1) {
            this.events.splice(eventIndex, 1);
        }
    }
}


module.exports = {Athlete}