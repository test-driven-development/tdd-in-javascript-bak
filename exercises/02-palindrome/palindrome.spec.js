const isPalindrome = phrase => {
  if (typeof phrase !== 'string' || phrase === '') throw new Error('invalid input');
  const lowerCasePhrase = phrase.toLowerCase();
  return lowerCasePhrase === lowerCasePhrase.split('').reverse().join('');
};

describe('palindrome should return', () => {
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

  it('true if  `Mom`', () => {
    isPalindrome('Mom').should.be.true();
  });
});


