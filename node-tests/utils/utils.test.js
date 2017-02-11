const utils = require('./utils');

it('should add two numbers', () => {
    var sut = utils.add(33, 11);

    if (sut != 44)
    {
        throw new Error(`Expected 44, but got ${sut}`);
    }

});