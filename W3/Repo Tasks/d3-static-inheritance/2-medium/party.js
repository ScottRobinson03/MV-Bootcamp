const Character = require('../1-easy/static');

class Party {
    static currentLeaders = []
    static totalParties = 0;

    constructor(leadCharacter) {
        this.leader = Party.validateLeader(leadCharacter);
        this.members = [leadCharacter];

        Party.currentLeaders.push(this.leader);
        Party.totalParties += 1;
    }

    static validateLeader(leader) {
        if (leader === undefined) throw "A party needs a leader!";
        if (Party.currentLeaders.includes(leader.name)) throw `${leader.name} is already leading a party!`;
        return leader.name;
    }
}


module.exports = {Party, Character};