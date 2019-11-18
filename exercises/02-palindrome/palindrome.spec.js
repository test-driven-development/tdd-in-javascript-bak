const isPalindrome = () => {
  return true;
};

describe.only('palindrome should ', () => {
  it('return true if `mom`', () => {
    isPalindrome('mom').should.be.true();
  });

  it('return false if `the`');
  it('return true if `mom mom`');
  it('return false if `the mom`');
  it('return error if not a string');
  it('return error if empty string');
  it('return true if  `Mom`');
});


