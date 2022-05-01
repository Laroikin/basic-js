const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString().split('');
  let flag = 1;
  for (let i in str) {
    i = parseInt(i);
    if (str[i] < str[i + 1] && i + 1 < str.length) str.splice(i, 1), (flag = 0);

    if (i + 1 == str.length && flag) {
      str.pop();
    }
  }
  return parseInt(str.join(''));
}

// console.log(deleteDigit(152));

module.exports = {
  deleteDigit
};
