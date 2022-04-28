const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let ans = [];

  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--double-next') {
      if (i != arr.length - 1) {
        ans.push(arr[i + 1]);
      }
    } else if (arr[i] == '--discard-next') {
      ans.push('x');
      i++;
    } else if (arr[i] == '--discard-prev') {
      ans.pop();
      ans.push('x');
    } else if (arr[i] == '--double-prev') {
      if (i != 0) {
        let temp = ans.pop();
        ans.push(temp);
        ans.push(temp);
      }
    } else ans.push(arr[i]);
  }

  ans = ans.filter(e => e != 'x');

  return ans;
}

module.exports = {
  transform
};
