const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let ans = '';
  for (let ind = 0; ind < str.length; ind++) {
    if (str[ind] == str[ind + 1]) {
      let cnt = 1;
      while (str[ind] == str[ind + 1]) {
        cnt++;
        ind++;
      }
      ans += `${cnt}${str[ind]}`;
    } else ans += str[ind];
  }
  return ans;
}


module.exports = {
  encodeLine
};
