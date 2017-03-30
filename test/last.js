var last = require('../workshop').last;

describe('last', function() {
    it('Should return the last element of an array when called with only that array', function() {
        expect(last([1,2,3,4])).to.equal(4);
    });

    it('Should return an array with the last element when called with 1 and an array', function() {
        expect(last(1, [1,2,3,4])).to.deep.equal([4]);
    });

    it('Should return the correct number of elements when called with n', function() {
        expect(last(2, [1,2,3,4])).to.deep.equal([3,4]);
    });

    it('Should return the whole array when called with too big n', function() {
        expect(last(10, [1,2,3])).to.deep.equal([1,2,3]);
    });

    it('Should return an empty array when called with negative n', function() {
        expect(last(-10, [1,2,3])).to.deep.equal([]);
    });
});