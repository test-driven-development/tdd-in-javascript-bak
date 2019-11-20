const stackFactory = () => {
  let stack = [];
  const capacity = 2;
  const size = () => stack.length;
  const isEmpty = () => size() === 0;

  const pop = () => {
    if (size() === 0) throw new Error('Stack Underflow');
    return stack.pop();
  };

  const push = (element) => {
    if (capacity <= size()) throw new Error('Stack Overflow');
    stack.push(element);
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
    stack.push(1);
    (() => stack.push(1)).should.throw('Stack Overflow');
  });

  it('under-flows', () => {
    (() => stack.pop()).should.throw('Stack Underflow');
  });

  it('pops the same one pushed', () => {
    const expected = {};
    stack.push(expected);
    stack.pop().should.equal(expected);
  });

  it('pops the same two pushed', () => {
    const element1 = [], element2 = () => {
    };
    stack.push(element1);
    stack.push(element2);
    stack.pop().should.equal(element2);
    stack.pop().should.equal(element1);
  });

  it('accepts only positive capacity');
});
