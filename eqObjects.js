const eqArrays = require('./eqArrays');

const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (const key of Object.keys(obj1)) {
    if (Object.keys(obj2).includes(key)) {
      if (Array.isArray(obj1[key])) return eqArrays(obj1[key], obj2[key]);
    }
  }
  return true;
};

module.exports = eqObjects;