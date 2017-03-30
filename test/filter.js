var filter = require('../workshop').filter;

describe('filter', function() {
    it('Should return a new array with [1,3] when passed [1,2,3,4] and a function that tests odd numbers', function() {
        var numbers = [1,2,3,4];
        function isOdd(n) {
            return n % 2 === 1;
        }

        var filteredNumbers = filter(isOdd, numbers);
        expect(filteredNumbers).to.deep.equal([1,3]);
        expect(filteredNumbers).to.not.equal(numbers); // new array
    });

    it('Should return an empty array when passed an empty array', function() {
        function isOdd(n) {
            return n % 2 === 1;
        }

        expect(filter(isOdd, [])).to.deep.equal([]);
    });

    it('Should work with a function that returns truthy/falsy values', function() {
        function isOddTruthy(n) {
            return n % 2; // pause, why does this work?
        }

        expect(filter(isOddTruthy, [1,2,3,4])).to.deep.equal([1,3]);
    });

    it('Should NOT use Array.prototype.filter', function() {
        var numbers = [1,2,3,4];
        function isOdd(n) {
            return n % 2 === 1;
        }

        chai.spy.on(numbers, 'filter');
        filter(isOdd, numbers);
        expect(numbers.filter).to.have.been.called.exactly(0);
    });
});