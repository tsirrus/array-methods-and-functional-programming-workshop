var negate1 = require('../workshop').negate1;

describe('negate1', function() {
    it('Should return a function that finds even numbers if passed a function that finds odd numbers', function() {
        function isOdd(n) {
            return n % 2 === 1;
        }

        var isEven = negate1(isOdd);
        expect(isEven(2)).to.equal(true);
        expect(isEven(3)).to.equal(false);
    });

    it('Should work with a function that returns truthy/falsy values', function() {
        function isOddTruthy(n) {
            return n % 2;
        }

        var isEven = negate1(isOddTruthy);
        expect(isEven(2)).to.equal(true);
        expect(isEven(3)).to.equal(false);
    });
});