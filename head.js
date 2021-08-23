const assertEqual = require('./assertEqual');

const head = (actual) => {
  return actual.shift();
};

module.exports = head