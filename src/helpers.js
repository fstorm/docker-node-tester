const add = (x, y) => {
  if (x === undefined || y === undefined) {
    throw new Error('add functions needs to be called with input');
  }
  if (typeof x === 'string' || typeof y === 'string') {
    throw new Error('add function does not expect string values');
  }
  return x + y;
};

module.exports = {
  add,
};
