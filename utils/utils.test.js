
const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      let res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });

  describe('#square', () => {
    it('should square a number', () => {
      let res = utils.square(5);
      let expected = 25;

      expect(res).toBe(expected).toBeA('number');
    });

    it('should async square a numbers', (done) => {
      utils.asyncSquare(4, (res) => {
        expect(res).toBe(16).toBeA('number');
        done();
      });
    });
  });
});

//should verify first name and last name is set
// assert it include first name and last name with proper values
it('should have first and last name', () => {
  let user = {
    age: 31,
    location: 'Lakewood',
  };

  utils.setName(user, 'Brandon Clayton');

  expect(user).toInclude({
    firstName: 'Brandon',
    lastName: 'Clayton',
  });
});

// it('should expect some values', () => {
//   // expect({name: 'brandon'}).toNotEqual({name: 'Brandon'});
//   // expect([2, 3, 4]).toInclude(3);
//   expect({
//     name: 'Brandon',
//     age: 31,
//     location: 'Lakewood',
//   }).toIncludeKey('age')
// });
