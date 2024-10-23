// Importa hjálparföllum
import { isString } from './helpers.js';
import { reverse } from './reverse.js';

/**
 * Fall sem tekur inn streng og skilar
 * true ef hann er samhverfur annars false.
 * @param {*} str setning
 * @returns true ef samhverfu, annars false.
 */
export function palindrome(str) {
    if (isString(str) && str != '') {
      if (str == reverse(str)) {
        return true;
      }
    }
    return false;
  }