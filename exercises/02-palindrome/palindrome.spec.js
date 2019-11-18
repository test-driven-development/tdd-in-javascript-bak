const isPalindrome = phrase => {
  if (typeof phrase !== 'string') throw new Error('invalid input');
  if (phrase === '') throw new Error('invalid input');
  return phrase === phrase.split('').reverse().join('');
};

describe.only('palindrome should return', () => {
  it('true if `mom`', () => {
    isPalindrome('mom').should.be.true();
  });

  it('false if `the`', () => {
    isPalindrome('the').should.be.false();
  });

  it('true if `mom mom`', () => {
    isPalindrome('mom mom').should.be.true();
  });

  it('false if `the mom`', () => {
    isPalindrome('the mom').should.be.false();
  });

  it('error if not a string', () => {
    (() => {
      isPalindrome(1);
    }).should.throw('invalid input');
  });

  it('error if empty string', () => {
    (() => {
      isPalindrome('');
    }).should.throw('invalid input');
  });
  it('true if  `Mom`');
});


