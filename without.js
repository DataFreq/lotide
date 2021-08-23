const without = (src, filter) => {
  let filtered = [];
  for (const ele of src) {
    if (!filter.includes(ele)) {
      filtered.push(ele);
    }
  }
  return filtered;
};

module.exports = without;