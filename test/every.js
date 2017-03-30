var every = require('../workshop').every;

describe('every', function() {
    it('Should return false when not every element passes the predicate', function() {
        var numbers = [1,2,3,4];
        function isOdd(n) {
            return n % 2 === 1;
        }

        expect(every(isOdd, numbers)).to.equal(false);
    });

    it('Should return true when every element passes the predicate', function() {
        var numbers = [1,3,5,7];
        function isOdd(n) {
            return n % 2 === 1;
        }

        expect(every(isOdd, numbers)).to.equal(true);
    });

    it('Should return true when passed an empty array', function() {
        function isOdd(n) {
            return n % 2 === 1;
        }

        expect(every(isOdd, [])).to.equal(true);
    });

    it('Should exhibit short-circuit behavior', function() {
        var numbers = [1,2,3,4];
        function isOdd(n) {
            return n % 2 === 1;
        }
        var isOddSpy = chai.spy(isOdd);
        every(isOddSpy, numbers);
        expect(isOddSpy).to.have.been.called.exactly(2);
    });

    it('Should work with a function that returns truthy/falsy values', function() {
        function isOddTruthy(n) {
            return n % 2; // pause, why does this work?
        }

        expect(every(isOddTruthy, [1,3,5,7])).to.equal(true);
    });

    it('Should NOT use Array.prototype.every', function() {
        var numbers = [1,2,3,4];
        function isOdd(n) {
            return n % 2 === 1;
        }

        chai.spy.on(numbers, 'every');
        every(isOdd, numbers);
        expect(numbers.every).to.have.been.called.exactly(0);
    });
});