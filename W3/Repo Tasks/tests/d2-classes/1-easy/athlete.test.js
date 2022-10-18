const {Athlete} = require('../../../d2-classes/1-easy/athlete')

describe('new instance of Athlete', () => {
    const athlete1 = new Athlete('Seb', ['100m', '200m'])
    it('correctly assigns athlete a name', () => {
        expect(athlete1.name).toBe('Seb')
    })
    it('correctly assigns an array of events to athlete', () => {
        expect(athlete1.events).toEqual(['100m', '200m'])
    })
})

describe('addEvent method', () => {
    const athlete1 = new Athlete('Seb', ['100m', '200m'])
    athlete1.addEvent('400m')
    it('pushes new event to events array', () => {
        expect(athlete1.events).toEqual(['100m', '200m', '400m'])
    })
})
describe('removeEvent method', () => {
    const athlete1 = new Athlete('Seb', ['100m', '200m'])
    athlete1.removeEvent('200m')
    it('deletes event from events array', () => {
        expect(athlete1.events).toEqual(['100m'])
    })
})