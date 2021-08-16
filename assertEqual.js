// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ [PASS] Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑 [ERR] Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual('LHL', 'LHL');
assertEqual(1, 1);
assertEqual(912348, 234897);