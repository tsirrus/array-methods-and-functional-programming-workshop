var some = require('../workshop').some;

describe('some', function() {
    it('Should return true when some elements pass the predicate', function() {
        var numbers = [1,2,3,4];
        function isOdd(n) {
            return n % 2 === 1;
        }

        expect(some(isOdd, numbers)).to.equal(true);
    });

    it('Should return false when no element passes the predicate', function() {
        var numbers = [1,3,5,7];
        function isOdd(n) {
            return n % 2 === 1;
        }

        expect(some(isOdd, numbers)).to.equal(true);
    });

    it('Should return false when passed an empty array', function() {
        function isOdd(n) {
            return n % 2 === 1;
        }

        expect(some(isOdd, [])).to.equal(false);
    });

    it('Should exhibit short-circuit behavior', function() {
        var numbers = [1,2,3,4];
        function isOdd(n) {
            return n % 2 === 1;
        }
        var isOddSpy = chai.spy(isOdd);
        some(isOddSpy, numbers);
        expect(isOddSpy).to.have.been.called.exactly(1);
    });

    it('Should work with a function that returns truthy/falsy values', function() {
        function isOddTruthy(n) {
            return n % 2; // pause, why does this work?
        }

        expect(some(isOddTruthy, [1,2,3,4])).to.equal(true);
    });

    it('Should NOT use Array.prototype.some', function() {
        var numbers = [1,2,3,4];
        function isOdd(n) {
            return n % 2 === 1;
        }

        chai.spy.on(numbers, 'some');
        some(isOdd, numbers);
        expect(numbers.some).to.have.been.called.exactly(0);
    });
});