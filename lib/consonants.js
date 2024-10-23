// Íslenskir samhljóðar
const CONSONANTS = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ'.split('');

/**
 * Fall sem tekur inn setningu og skilar hversu margir
 * samhljóðar eru í henni
 * @param {*} str setning
 * @returns int fjölda samhljóða
 */
export function consonants(str) {
    let cnt = 0;
    for (let i = 0; i < str.length; i++){
      if(CONSONANTS.includes(str[i])) {
        cnt++;
      }
    }
    return cnt;
  }