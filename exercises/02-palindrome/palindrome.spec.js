const isAPalindrome = (phrase) => {
  if (typeof phrase !== 'string' || phrase.length === 0) {
    throw new Error('Invalid input type');
  }
  let lowerCasePhrase = phrase.toLowerCase();
  return lowerCasePhrase === lowerCasePhrase.split('').reverse().join('');
};

describe.only(`a palindrome should return`, () => {
  it(`true for input 'Anna'`, () => {
    isAPalindrome('Anna').should.be.true();
  });

  it(`false for the input 'Frog' `, () => {
    isAPalindrome('Frog').should.be.false();
  });

  it(`true for the phrase 'Able was I ere I saw Elba'`, () => {
    isAPalindrome('Able was I ere I saw Elba').should.be.true();
  });

  it(`false for the phrase 'Never odd or even'`, () => {
    isAPalindrome('Never odd or even').should.be.false();
  });

  it(`an error for any non-string phrase`, () => {
    (() => {
      isAPalindrome(100);
    }).should.throw('Invalid input type');
  });

  it(`an error for an empty input string`, () => {
    (() => {
      isAPalindrome('');
    }).should.throw('Invalid input type');
  });
});
