const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = `${str}`;
  let addition = options.hasOwnProperty('addition') ? options.addition : '';
  addition = `${addition}`;

  let ans = [];

  let i = 0;

  do {
    let smth = str;
    if (addition) {
      let add = [];

      let j = 0;
      do {
        let sep = addition;
        add.push(sep);
        j++;
      } while (j < options?.additionRepeatTimes);

      let sep = options.hasOwnProperty('additionSeparator')
        ? options.additionSeparator
        : '|';
      smth += add.join(sep);
    }
    ans.push(smth);
    i++;
  } while (i < options?.repeatTimes);

  let sep = options.hasOwnProperty('separator') ? options.separator : '+';
  ans = ans.join(sep);
  return ans;
}

module.exports = {
  repeater
};
