const conversionConst = 5 / 9;

const fahrenheit2Celsius = (fahrenheitValue) =>
   (fahrenheitValue - 32) * (conversionConst);

describe('convert fahrenheit to celsius', () => {
  it('32 should return 0', () => {
    fahrenheit2Celsius(32).should.equal(0);
  });

  it('212 should return 100', () => {
    fahrenheit2Celsius(212).should.equal(100);
  });
});
