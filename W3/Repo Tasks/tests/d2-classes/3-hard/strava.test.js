const {Exercise} = require('../../../d2-classes/3-hard/strava')
let myRun = new Exercise(5, 1200, 3600, 6000)
describe('Properties of new instance of Exercise Class (5,1200,3600,6000)', () => {
    
    it('correctly assigns distance', () => {
        expect(myRun.distance).toBe(5)
    })
    it('correctly assigns time', () => {
        expect(myRun.time).toBe(1200)
    })
    it('correctly assigns heartBeats', () => {
        expect(myRun.heartBeats).toBe(3600)
    })
    it('correctly assigns steps', () => {
        expect(myRun.steps).toBe(6000)
    })
})
describe('Methods of new instance of Exercise Class (5,1200,3600,6000)', () => {
    
    it('converts seconds to minutes and seconds', () => {
        expect(myRun.toMinutesAndSeconds(myRun.time)).toBe('20m:0s')
    })
    it('returns pace per km in minutes and seconds format', () => {
        expect(myRun.pace()).toBe('4m:0s')
    })
    it('beatsPerMinute returns the average beats per minute as integer.', () => {
        expect(Math.round(myRun.beatsPerMinute())).toBe(180)
    })
    it('strideLength returns the average length per stride.', () => {
        expect(myRun.strideLength()).toBeCloseTo(0.83,2)
    })
    
})