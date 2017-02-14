const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var sut = utils.add(33, 11);
            expect(sut).toBe(44);
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            })
        });
    });

    describe('#square', () => {
        it('should square a number', () => {
            var sut = utils.square(3);

            expect(sut).toBe(9);
        });

        it('should async square two numbers', (done) => {
            utils.asyncSquare(2, (result) => {
                expect(result).toBe(4).toBeA('number');
                done();
            })
        });
    });
});


describe('playground', () => {
    it('should expect some values', () => {

        expect({ name: 'Travis' }).toEqual({ name: 'Travis' });
        expect([2, 3, 4]).toExclude(5);
        expect({
            name: 'Travis',
            age: 35,
            location: 'USA'
        }).toInclude({ age: 35 });
    });

    it('should verify first and lastNames are set', () => {
        var user = {
            fullName: 'Travis Haley'
        }

        var sut = utils.setName(user, user.fullName)

        expect(sut).toInclude({ firstName: 'Travis' });
        expect(sut).toInclude({ lastName: 'Haley' });

    });
});

