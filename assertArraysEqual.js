const eqArrays = require('./eqArrays');

const assertArrayEqual = (arr, arr1) => {
  if (eqArrays(arr, arr1)) {
    console.log(`✅ [PASS] Assertion Passed: ${arr} === ${arr1}`);
  } else {
    console.log(`🛑 [ERR] Assertion Failed: ${arr} !== ${arr1}`);
  }
};

module.exports = assertArrayEqual;