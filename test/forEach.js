var forEach = require('../workshop').forEach;

describe('forEach', function() {
    it('Should call the callback as many times as array elements', function() {
        var spyCallback = chai.spy();
        forEach(spyCallback, [1,2,3]);
        expect(spyCallback).to.have.been.called.exactly(3);
        expect(spyCallback).to.have.been.called.with.exactly(1);
        expect(spyCallback).to.have.been.called.with.exactly(2);
        expect(spyCallback).to.have.been.called.with.exactly(3);
    });

    it('Should never call the callback with an empty array', function() {
        var spyCallback = chai.spy();
        forEach(spyCallback, []);
        expect(spyCallback).to.have.been.called.exactly(0);
    });
});