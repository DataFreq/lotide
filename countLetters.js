const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ [PASS] Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 [ERR] Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (input) => {
  const output = {};

  for (const ltr of input) {
    if (ltr !== ' ') {
      output[ltr] ? output[ltr]++ : output[ltr] = 1;
    }
  }
  return output;
};