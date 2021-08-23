const letterPositions = (input) => {
  const output = {};
    
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== ' ') {
      output[input[i]] ? output[input[i]].push(i) : output[input[i]] = [i];
    }
  }

  return output;
};

module.exports = letterPositions;