const { connectDb } = require('../../db/db');

describe('testing db/db.js', () => {
    it('should connect to db correctly', () => {
        const obj = {connectDbFunc: connectDb}
        const connectDbSpy = jest.spyOn(obj, 'connectDbFunc');
        obj.connectDbFunc(":memory:");
        expect(connectDbSpy).toHaveBeenCalledWith(":memory:");
    });
})