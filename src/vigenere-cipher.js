const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(value) {
    this.machine = value || arguments.length == 0 ? true : false;
  }
  encrypt(message, key) {
    if (arguments.length < 2 || !arguments[0] || !arguments[1])
      throw new Error('Incorrect arguments!');

    let ans = [];
    message = message.toUpperCase();
    key = key.toUpperCase();

    let cnt = 0,
      origSize = key.length;

    while (key.length < message.split(' ').join('').length) {
      key += key[cnt % origSize];
      cnt++;
    }

    console.log(key);
    console.log(message.split(' ').join(''));

    let count = 0;

    message.split(' ').forEach(ele => {
      let str = [];
      ele.split('').forEach(e => {
        if (e >= 'A' && e <= 'Z') {
          str.push(
            String.fromCharCode(
              ((e.charCodeAt(0) + key[count].charCodeAt(0)) % 26) + 65
            )
          );
          count++;
        } else str.push(e), count++;
      });
      ans.push(str.join(''));
    });

    return this.machine
      ? ans.join(' ')
      : ans.join(' ').split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if (arguments.length < 2 || !arguments[0] || !arguments[1])
      throw new Error('Incorrect arguments!');

    let ans = [];
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let cnt = 0,
      origSize = key.length;

    while (key.length < encryptedMessage.split(' ').join('').length) {
      key += key[cnt % origSize];
      cnt++;
    }

    console.log(key);
    console.log(encryptedMessage.split(' ').join(''));

    let count = 0;

    encryptedMessage.split(' ').forEach(ele => {
      let str = [];
      ele.split('').forEach(e => {
        if (e >= 'A' && e <= 'Z') {
          str.push(
            String.fromCharCode(
              e.charCodeAt(0) - key[count].charCodeAt(0) < 0
                ? 26 - Math.abs(e.charCodeAt(0) - key[count].charCodeAt(0)) + 65
                : e.charCodeAt(0) - key[count].charCodeAt(0) + 65
            )
          );
          count++;
        } else str.push(e), count++;
      });
      ans.push(str.join(''));
    });

    return this.machine
      ? ans.join(' ')
      : ans.join(' ').split('').reverse().join('');
  }
}

// console.log(mac.decrypt('AEIHQX SX DLLU!', 'alphonse'));

module.exports = {
  VigenereCipheringMachine
};
