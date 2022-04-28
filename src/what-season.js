const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function switchSeason(string) {
  console.log(string);

  string = string.split(' ')[1].toLowerCase();

  seasons = {
    winter: ['dec', 'jan', 'feb'],
    summer: ['jun', 'jul', 'aug'],
    spring: ['mar', 'apr', 'may'],
    fall: ['sep', 'oct', 'nov']
  };

  ans = '';

  for (let i in seasons) {
    seasons[i].forEach(e => {
      if (e == string) {
        ans = i;
      }
    });
  }

  return ans;
}

function getSeason(date) {
  if (arguments.length < 1) {
    return 'Unable to determine the time of year!';
  }

  if (
    Object.getOwnPropertyNames(date).length !== 0 ||
    !(date instanceof Date && !isNaN(date))
  )
    throw Error('Invalid date!');

  return switchSeason(date.toDateString());
}

// console.log(getSeason('foo'));

module.exports = {
  getSeason
};
