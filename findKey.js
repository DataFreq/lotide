const findKey = (obj, cb) => {
  for (const key of Object.keys(obj)) {
    if (cb(obj[key])) return key;
  }
};