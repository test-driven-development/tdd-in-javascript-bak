const isPalindrome = (phrase) => {
  if (typeof phrase === 'string') {
    return phrase === phrase.split('').reverse().join('');
  } else {
    throw new Error('invalid input');
  }
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
  
  it('error if empty string');
  it('true if  `Mom`');
});


