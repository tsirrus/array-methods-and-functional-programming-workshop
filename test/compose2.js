var compose2 = require('../workshop').compose2;

describe('compose2', function() {
    it('Should compose functions that create a slug', function() {
        // Takes a string, returns a string
        function toLowerCase(str) {
            return str.toLowerCase();
        }
        // Takes a string, returns an array
        function splitByWord(str) {
            return str.split(' ');
        }
        // Takes an array, returns a string
        function joinWithDashes(arrOfWords) {
            return arrOfWords.join('-');
        }

        // Takes a string, returns a string by doing toLowerCase -> splitByWord -> joinWithDashes
        var createSlug = compose2([joinWithDashes, splitByWord, toLowerCase]);

        expect(createSlug('The Quick Brown Fox')).to.equal('the-quick-brown-fox');
    });

    it('Should compose functions in the correct order', function() {
        function multiplyByZero(x) {
            return x * 0;
        }
        function addOne(x) {
            return x + 1;
        }

        var makeOne = compose2([addOne, multiplyByZero]);
        expect(makeOne(42)).to.equal(1);

        var makeZero = compose2([multiplyByZero, addOne]);
        expect(makeZero(42)).to.equal(0);
    });
});