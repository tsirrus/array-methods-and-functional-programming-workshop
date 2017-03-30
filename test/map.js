var map = require('../workshop').map;

describe('map', function() {
    it('Should return a new array with [2,4,6] when passed [1,2,3] and a function that multiplies by 2', function() {
        var numbers = [1,2,3];
        function double(n) {
            return n * 2;
        }

        var mappedNumbers = map(double, numbers);
        expect(mappedNumbers).to.deep.equal([2,4,6]);
        expect(mappedNumbers).to.not.equal(numbers); // new array
    });

    it('Should return an empty array when passed an empty array', function() {
        function double(n) {
            return n * 2;
        }

        expect(map(double, [])).to.deep.equal([]);
    });

    it('Should NOT use Array.prototype.map', function() {
        var numbers = [1,2,3];
        function double(n) {
            return n * 2;
        }

        chai.spy.on(numbers, 'map');
        map(double, numbers);
        expect(numbers.map).to.have.been.called.exactly(0);
    });
});