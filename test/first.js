var first = require('../workshop').first;

describe('first', function() {
    it('Should return the first element of an array when called with only that array', function() {
        expect(first([1,2,3,4])).to.equal(1);
    });

    it('Should return an array with the first element when called with 1 and an array', function() {
        expect(first(1, [1,2,3,4])).to.deep.equal([1]);
    });

    it('Should return the correct number of elements when called with n', function() {
        expect(first(2, [1,2,3,4])).to.deep.equal([1,2]);
    });

    it('Should return the whole array when called with too big n', function() {
        expect(first(10, [1,2,3])).to.deep.equal([1,2,3]);
    });

    it('Should return an empty array when called with negative n', function() {
        expect(first(-10, [1,2,3])).to.deep.equal([]);
    });
});