const {Laps} = require('../../../d2-classes/2-medium/laps')



describe('instance of Laps', () => {
const race1 = new Laps(400)
    it('starting totalDistance of 0',() => {
        expect(race1.totalDistance).toBe(0)
    })
    it('correctly sets lapDistance',() => {
        expect(race1.lapDistance).toBe(400)
    })
    it('has empty splits array',() => {
        expect(race1.splits).toEqual([])
    })

describe('addLap method', () => {
    const race1 = new Laps(400)
    race1.addLap(180)
    it('pushes new split to splits property array.', () => {
        expect(race1.splits.length).toBe(1)
        expect(race1.splits).toEqual([180])
    })
    it('adds lapDistance to totalDistance.', () => {
        expect(race1.totalDistance).toBe(400)
    })
})

})