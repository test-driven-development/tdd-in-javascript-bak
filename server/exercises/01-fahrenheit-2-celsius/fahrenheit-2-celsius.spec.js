describe('the canary spec for fahrenheit to celsius', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();
  });

  describe('a fahrenheit to celsius calculator gives', () => {
    it('212 f => 100 c');
    it('32 f => 0 c');
    it('122 f => 50 c');
  });
});
