function fahrenheit2Celsius() {
  return 0;
}

describe('convert fahrenheit to celsius', () => {
  it.only('32 should return 0', () => {
    fahrenheit2Celsius(32).should.equal(0);
  });
  
  it.only('212 should return 100');
  it.only('-27 should return -32.77');
});
