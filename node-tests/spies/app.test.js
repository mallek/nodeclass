const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', function () {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);


    it('should call the spy correctly', function () {
        var spy = expect.createSpy();
        spy('Travis', 25);

        expect(spy).toHaveBeenCalledWith('Travis', 25);
    });

    it('should call saveUser with user object', function () {
        var email = 'travis@gmail.com';
        var password = 'qwerty';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});