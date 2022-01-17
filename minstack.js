var MinStack = function () {
  this.array = [];
  this.currIndex = -1;

  this.min = null;
  this.prevMinByIndex = {};
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  const nextIndex = this.currIndex + 1;

  if (this.min === null) {
    this.min = val;
    this.prevMinByIndex[nextIndex] = null;
  }
  else if (val < this.min) {
    this.prevMinByIndex[nextIndex] = this.min;
    this.min = val;
  }
  else {
    this.prevMinByIndex[nextIndex] = this.min;
  }

  this.array[nextIndex] = val;
  this.currIndex++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.array[this.currIndex] = undefined;
  this.array.length = this.currIndex;

  this.min = this.prevMinByIndex[this.currIndex];
  delete this.prevMinByIndex[this.currIndex];

  this.currIndex--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.array[this.currIndex];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

const stack = new MinStack();
stack.push(2);
stack.push(0);
stack.push(3);
stack.push(0);
stack.getMin(); // return 0
stack.pop();
stack.getMin(); // return 0
stack.pop();
stack.getMin(); // returm 0
stack.pop();
stack.getMin(); // return 2

// stack.push(-2);
// stack.push(0);
// stack.push(-3);
// stack.getMin(); // return -3
// stack.pop();
// stack.top();    // return 0
// stack.getMin(); // return -2

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
