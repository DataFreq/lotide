const findKeyByValue = (arr, search) => {
  for (const key of Object.keys(arr)) {
    if (arr[key].includes(search))
      return key;
  }
  return;
};

module.exports = findKeyByValue;