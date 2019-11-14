function fahrenheit2Celsius(x) {
  return (x - 32) * (5 / 9);
}

describe.only('convert fahrenheit to celsius', () => {
  it('32 should return 0', () => {
    fahrenheit2Celsius(32).should.equal(0);
  });

  it('212 should return 100', () => {
    fahrenheit2Celsius(212).should.equal(100);

  });
  it('-27 should return -32.77');
});
