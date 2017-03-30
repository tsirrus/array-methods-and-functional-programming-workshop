var pluck = require('../workshop').pluck;

describe('pluck', function() {
    it('Should return an array of the property values for a given property name', function() {
        var pets = [
            {id: 1, name: 'Nacho'},
            {id: 2, name: 'Popcorn'},
            {id: 10, name: 'Skittles'}
        ];
        
        expect(pluck('name', pets)).to.deep.equal(['Nacho','Popcorn','Skittles']);
    });

    it('Should work if some elements do not contain the property', function() {
        var pets = [
            {id: 1, name: 'Nacho'},
            {id: 2, name: 'Popcorn'},
            {id: 10, name: 'Skittles'},
            {id: 42}
        ];

        expect(pluck('name', pets)).to.deep.equal(['Nacho','Popcorn','Skittles',undefined]);
    });
});