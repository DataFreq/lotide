// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ [PASS] Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 [ERR] Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr, arr1) => {
  if (arr.length !== arr1.length) {
    //console.log(`${arr} !== ${arr1} [FALSE]`)
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr1[i]) {
      //console.log(`${arr} !== ${arr1} [FALSE]`)
      return false;
    }
  }
  //console.log(`${arr} === ${arr1} [TRUE]`)
  return true;
};