var compose1 = require('../workshop').compose1;

describe('compose1', function() {
    it('Should compose functions that scream and shout', function() {
        function scream(str) {
            return str.toUpperCase();
        }
        function shout(str) {
            return str + '!!!';
        }

        var screamAndShout = compose1(shout, scream);
        expect(screamAndShout('hello world')).to.equal('HELLO WORLD!!!');
    });

    it('Should compose functions in the correct order', function() {
        function multiplyByZero(x) {
            return x * 0;
        }
        function addOne(x) {
            return x + 1;
        }

        var makeOne = compose1(addOne, multiplyByZero);
        expect(makeOne(42)).to.equal(1);

        var makeZero = compose1(multiplyByZero, addOne);
        expect(makeZero(42)).to.equal(0);
    });
});