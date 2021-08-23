const assertArrEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArrEqual(middle([1, 2, 3]), [2])
assertArrEqual(middle([1, 2, 3, 4, 5]), [3])

assertArrEqual(middle([1, 2, 3, 4]), [2, 3])
assertArrEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])