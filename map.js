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

const map = (arr, cb) => {
  const results = [];
  for (let item of arr) {
    results.push(cb(item));
  }
  return results;
};

const words = ['ground', 'control', 'to', 'major', 'tom'];
const results1 = map(words, word => word[0]);

console.log(results1);
assertArrEqual(results1, ['g', 'c', 't', 'm', 't']);
