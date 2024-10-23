// Importa hjálparföllum
import { isString, splitOnWhitespace } from './helpers.js';

/**
 * Fall sem tekur inn string og skilar stysta orði í honum
 * @param {*} str setning
 * @returns stysta orði
 */
export function shortest(str) {
    if (isString(str)) {
      let a = splitOnWhitespace(str);
      let b = '';
      let c = a[0].length + 1;
      for (let i = 0; i < a.length;i++) {
        if (c > a[i].length){
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