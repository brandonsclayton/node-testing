
const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');
// app.__set__
// app.__get__

describe('App', () => {
  let db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    let spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();
  });

  it('should call saveUser with user object', () => {
    let email = 'brandon@gmail.com';
    let password = '123abcd';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});