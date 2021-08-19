const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ [PASS] Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 [ERR] Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr, arr1) => {
  if (arr.length !== arr1.length) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr1[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (const key of Object.keys(obj1)) {
    if (Object.keys(obj2).includes(key)) {
      if (Array.isArray(obj1[key])) return eqArrays(obj1[key], obj2[key]);
    }
  }
  return true;
};