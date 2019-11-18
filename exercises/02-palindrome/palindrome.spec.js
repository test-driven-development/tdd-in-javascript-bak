const isPalindrome = (word) => {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
};

describe.only('palindrome should return', () => {
  it('true if `mom`', () => {
    isPalindrome('mom').should.be.true();
  });

  it('false if `the`', () => {
    isPalindrome('the').should.be.false();
  });

  it('true if `mom mom`');
  it('false if `the mom`');
  it('error if not a string');
  it('error if empty string');
  it('true if  `Mom`');
});


