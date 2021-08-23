const countLetters = (input) => {
  const output = {};

  for (const ltr of input) {
    if (ltr !== ' ') {
      output[ltr] ? output[ltr]++ : output[ltr] = 1;
    }
  }
  return output;
};

module.exports = countLetters;