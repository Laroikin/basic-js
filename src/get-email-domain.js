const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  email = email
    .split('')
    .reverse()
    .join('')
    .slice(0, email.split('').reverse().join('').indexOf('@'))
    .split('')
    .reverse()
    .join('');
  return email;
}

module.exports = {
  getEmailDomain
};
