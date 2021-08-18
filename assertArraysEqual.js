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

const assertArrEqual = (arr, arr1) => {
  if (eqArrays(arr, arr1)) {
    console.log(`✅ [PASS] Assertion Passed: ${arr} === ${arr1}`);
  } else {
    console.log(`🛑 [ERR] Assertion Failed: ${arr} !== ${arr1}`);
  }
};