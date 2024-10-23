// Importa hjálparföllum
import { isString, splitOnWhitespace } from './helpers.js';

/**
 * Fall sem tekur inn string og skilar lengsta orði í honum
 * @param {*} str setning
 * @returns lengsta orði
 */
export function longest(str) {
    if (isString(str)) {
      let a = splitOnWhitespace(str);
      let b = '';
      let c = 0;
      for (let i = 0; i < a.length;i++) {
        if (c < a[i].length){
          c = a[i].length;
          b = a[i];
        }
      }
      return b;
    }
    else {
      return null;
    }
  }