const utils = require('./utils');

it('should add two numbers', () => {
    var sut = utils.add(33, 11);

    if (sut != 44)
    {
        throw new Error(`Expected 44, but got ${sut}`);
    }

});

it('should square a number', () => {
    var res = utils.square(3);

    if (res !== 9) {
        throw new onerror(`expected 9, but got ${res}`);
    }
});