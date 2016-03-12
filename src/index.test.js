const expect = require('chai').expect;
const alerts = require('./index');
const results = alerts('f1');

describe('alerts', () => {
  describe('getFriendsTradingAlerts', () => {
    it('should return an array', () => {
      expect(results).to.be.a('array')
    });

    it('should be an array of strings', () => {
      expect(results).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every((item) => {
          return typeof item === 'string';
        });
      }
    });

    it('should be in csv format', () => {
      expect(results[0]).to.include(',')
    });

  });
});
