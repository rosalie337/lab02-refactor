const { getName } = require('../getName.js');

describe('getName function', () => {
    it('a function that returns the name property of an object', () => {
        const artists = [
            { name: 'mos def', album: 'black on both sides', release_year: 1999, tracks: 17 },
            { name: 'common', album: 'like water for chocolate', release_year: 2000, tracks: 16 },
            { name: 'raphsody', album: 'Laila\'s Wisdom ', release_year: 1999, tracks: 14 },

        ];
        const oneArtist = getName(artist, 'mos def');
    });
});

module.exports = {};