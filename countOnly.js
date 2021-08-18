const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ [PASS] Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 [ERR] Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = (allItems, count) => {
  const results = {};
  for (const item of allItems) { 
    if (count[item]) {
      results[item] ? results[item]++ : results[item] = 1
    }
  }
  return results;
};