const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) return console.log(`✅ [PASS] Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  return console.log(`🛑 [ERR] Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;