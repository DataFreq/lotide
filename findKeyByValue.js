const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ [PASS] Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 [ERR] Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (arr, search) => {
  for (const key of Object.keys(arr)) {
    if (arr[key].includes(search))
      return key;
  }
  return;
};