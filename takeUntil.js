const takeUntil = (arr, cb) => {
  const result = [];
  for (const item of arr) {
    if (!cb(item)) result.push(item);
    else return result;
  }
};

module.exports = takeUntil;