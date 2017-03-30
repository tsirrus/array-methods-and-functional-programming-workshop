var findIndex = require('../workshop').findIndex;

describe('findIndex', function() {
    it('Should return -1 if no element in the input array passes the predicate', function() {
        function isOdd(n) {
            return n % 2 === 1;
        }

        expect(findIndex(isOdd, [2,4,6,8])).to.equal(-1);
    });

    it('Should return the index of the first element that satisfies the predicate', function() {
        function isOdd(n) {
            return n % 2 === 1;
        }

        expect(findIndex(isOdd, [2,1,3])).to.equal(1);
    });

    it('Should NOT use Array.prototype.findIndex', function() {
        var numbers = [1,2,3,4];
        function isOdd(n) {
            return n % 2 === 1;
        }

        chai.spy.on(numbers, 'findIndex');
        findIndex(isOdd, numbers);
        expect(numbers.findIndex).to.have.been.called.exactly(0);
    });
});