var flatten = require('../workshop').flatten;

describe('flatten', function() {
    it('Should work with an already flat array', function() {
        expect(flatten([1,2,3])).to.deep.equal([1,2,3]);
    });

    it('Should work with single-item arrays', function() {
        expect(flatten([[1],[2],[3]])).to.deep.equal([1,2,3]);
    });

    it('Should work with arbitrarily-nested arrays', function() {
        expect(flatten([[[1],2],3,[4,[5]]])).to.deep.equal([1,2,3,4,5]);
    })
});