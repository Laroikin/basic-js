const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};

  for (let site of domains) {
    site = site.split('.').reverse();
    site.forEach((subdomain, ind) => {
      console.log(site);
      let j = ind-1;
      while (j >= 0) {
        subdomain = `${site[j]}.${subdomain}`;
        j--;
      } 

      console.log(subdomain);

      if (obj[`.${subdomain}`] != undefined) {
        obj[`.${subdomain}`] += 1;
      } else obj[`.${subdomain}`] = 1;
    });
  }

  return obj;
}

// console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']));

module.exports = {
  getDNSStats
};
