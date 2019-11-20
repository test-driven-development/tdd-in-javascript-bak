let stack = {
  isEmpty: () => true,
  size: () => 0
};

describe.only('about stack', () => {
  it('starts empty', () => {
    stack.isEmpty().should.be.true();
  });

  it('starts with stack size 0', () => {
    stack.size().should.be.equal(0);
  });

  it('is not empty when pushed');
  it('size is 1 when pushed to empty stack');
  it('leaves stack empty when pushed and popped');
  it('leaves stack size 0 when pushed and popped');
  it('overflows');
  it('under-flows');
  it('pops the same one pushed');
  it('pops the same two pushed');
  it('accepts only positive capacity');
});
