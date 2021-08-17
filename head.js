const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ [PASS] Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 [ERR] Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = (actual) => {
  return actual.shift();
};

// TEST
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");