let fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * (5 / 9);

describe('fahrenheit to celsius should convert ', () => {
  it('32F to 0C', () => {
    fahrenheitToCelsius(32).should.equal(0);
  });

  it('212F to 100C', () => {
    fahrenheitToCelsius(212).should.equal(100);
  });

  it('-148F to -100C', () => {
    fahrenheitToCelsius(-148).should.equal(-100);
  });
});


