const countOnly = (allItems, count) => {
  const results = {};
  for (const item of allItems) {
    if (count[item]) {
      results[item] ? results[item]++ : results[item] = 1;
    }
  }
  return results;
};

module.exports = countOnly;