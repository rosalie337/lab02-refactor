const { copyPush } = require('../copyPush.js');

describe('copyPush function', () => {
    it('returns a new array with all the original items and adds a new item to the end of the array', () => {
        const copyPush = [1, 2, 3, 4, 5];
        
        copyPush.push(6);

        expect(copyPush)
            .toEqual([1, 2, 3, 4, 5, 6]);
    });
});


