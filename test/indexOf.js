var indexOf = require('../workshop').indexOf;

describe('indexOf', function() {
    it('Should return -1 when the element is not found in the input array', function() {
        expect(indexOf(42, [1,2,3,4])).to.equal(-1);
    });

    it('Should return the first index of an item that is found in the input array', function() {
        expect(indexOf(3, [1,2,3,1,3,4,5])).to.equal(2);
    });

    it('Should return -1 when passed an empty array', function() {
        expect(indexOf('hello', [])).to.equal(-1);
    });

    it('Should use strict equality when comparing', function() {
        expect(indexOf(10, ['10','20','30'])).to.equal(-1);
    });

    it('Should NOT use Array.prototype.indexOf', function() {
        var numbers = [1,2,3,4];
        chai.spy.on(numbers, 'indexOf');
        indexOf(3, numbers);
        expect(numbers.indexOf).to.have.been.called.exactly(0);
    });
});