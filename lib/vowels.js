// Íslenskir sérhljóðar
const VOWELS = 'aeiouyáéýúíóöæAEIOUYÁÉÝÚÍÓÖÆ'.split('');

/**
 * Fall sem tekur inn setningu og skilar hversu
 * margir sérhljóðar eru í henni
 * @param {*} str setning
 * @returns int fjöldi sérhljóða
 */
export function vowels(str) {
    let cnt = 0;
    for (let i = 0; i < str.length; i++){
      if(VOWELS.includes(str[i])) {
        cnt++;
      }
    }
    return cnt;
  }