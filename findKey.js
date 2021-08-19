const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ [PASS] Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 [ERR] Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, cb) => {
  for (const key of Object.keys(obj)) {
    if (cb(obj[key])) return key;
  }
};