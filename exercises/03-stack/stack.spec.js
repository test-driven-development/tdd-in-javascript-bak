const stackFactory = () => {
  let stackSize = 0;
  const capacity = 1;
  const isEmpty = () => stackSize === 0;
  const size = () => stackSize;
  const pop = () => {
    if (stackSize === 0) throw new Error('Stack Underflow');
    stackSize--;
  };

  const push = () => {
    if (capacity <= stackSize) throw new Error('Stack Overflow');
    stackSize++;
  };

  return {
    isEmpty,
    size,
    push,
    pop
  };
};

describe.only('about stack', () => {
  let stack;

  beforeEach(() => (stack = stackFactory()));

  it('starts empty', () => {
    stack.isEmpty().should.be.true();
  });

  it('starts with stack size 0', () => {
    stack.size().should.equal(0);
  });

  it('is not empty when pushed', () => {
    stack.push(1);
    stack.isEmpty().should.be.false();
  });

  it('size is 1 when pushed to empty stack', () => {
    stack.push(1);
    stack.size().should.equal(1);
  });

  it('leaves stack empty when pushed and popped', () => {
    stack.push(1);
    stack.pop();
    stack.isEmpty().should.be.true();
  });

  it('leaves stack size 0 when pushed and popped', () => {
    stack.push(1);
    stack.pop();
    stack.size().should.equal(0);
  });

  it('overflows', () => {
    stack.push(1);
    (() => stack.push(1)).should.throw('Stack Overflow');
  });

  it('under-flows', () => {
    (() => stack.pop()).should.throw('Stack Underflow');
  });

  it('pops the same one pushed');
  it('pops the same two pushed');
  it('accepts only positive capacity');
});
