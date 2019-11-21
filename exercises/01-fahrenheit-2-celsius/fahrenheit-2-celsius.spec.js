let fahrenheitToCelsius = () => {
  return 0;
};

describe.only('fahrenheit to celsius should convert ', () => {
  it('32F to 0C', () => {
    fahrenheitToCelsius(32).should.equal(0);
  });
  it('212F to 100C');
  it('-148F to -100C');
});


