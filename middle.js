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

const middle = (arr) => {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[(arr.length / 2) - 1], arr[arr.length / 2]];
  } else {
    return [arr[Math.floor(arr.length / 2)]];
  }
};