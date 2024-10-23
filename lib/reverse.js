// Importa hjálparföllum
import { isString} from './helpers.js';

/**
 * Fall sem tekur inn setningu og snýr henni við
 * @param {*} str setning
 * @returns Öfugum string
 */
export function reverse(str) {
    if (isString(str)) {
      let a = '';
      for (let i = str.length - 1; i >= 0; i--) {
        a += str[i];
      }
      return a;
    }
    else {
      return null;
    }
  }