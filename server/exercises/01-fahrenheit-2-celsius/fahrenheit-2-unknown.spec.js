let fahrenheitToUnknown = (f) => {
  return (f - 18) * 4 / 194;
};

describe('the canary spec for fahrenheit to unknown', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();
  });

  describe('a fahrenheit to unknown calculator gives', () => {
    it('18 f => 0 x', () => {
      fahrenheitToUnknown(18).should.equal(0);
    });

    it('212 f => 4 x', () => {
      fahrenheitToUnknown(212).should.equal(4);
    });
  });
});


// x = (f - 18) * n
// x / (f - 18)   = n
// 4 / (212 - 18) = n
//            0.0206185567 = n
