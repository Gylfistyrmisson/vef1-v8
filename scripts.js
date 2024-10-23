/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import {longest} from './lib/longest.js';
import {shortest} from './lib/shortest.js';
import {reverse} from './lib/reverse.js';
import {vowels} from './lib/vowels.js';
import {consonants} from './lib/consonants.js';
import {palindrome} from './lib/palindrome.js';


// Hjálparföll:

/**
 * Fall sem tekur inn setningu, keyrir hana í gegnum greiningaföllin 
 * 6(shortest,longest,reverse,vowels,constants,palindrome) og uppfærir svo html
 * elementin út frá niðurstöðum
 * @param {*} setning string gildi sem verður greint
 */
function greining(setning) {
    let l = longest(setning);
    let s = shortest(setning);
    let r = reverse(setning);
    let v = vowels(setning);
    let c = consonants(setning);
    let p = palindrome(setning);
    let k = 'ekki ';
    if (p) {k = ''};
    document.getElementById('input').textContent = setning;
    document.getElementById('longest').textContent = l;
    document.getElementById('shortest').textContent = s;
    document.getElementById('reversed').textContent = r;
    document.getElementById('vowels').textContent = v;
    document.getElementById('consonants').textContent = c;
    document.getElementById('palindrome').textContent = k;
};

/**
 * Fall sem athugar hvað stendur í textarea og setur textan í
 * gegnum greining() fallið, sem uppfærir html. Svo birtir það niðurstöður
 * með því að taka 'hidden' úr 'output' elementinu.
 */

function greina() {
    // ChatGPT stakk upp á event.preventDefault() til að koma í veg fyrir að síðan væri alltaf að refresha
    event.preventDefault();
    const string = document.getElementById('string');
    const s = string.value;
    greining(s);
    const output = document.getElementById('output');
    output.className = "output";
};

/**
 * Fall sem hreinsar texan úr textarea og felur 'output' elementið
 * með því að setja sem 'output hidden'.
 */

function hreinsa() {
    const string = document.getElementById('string');
    string = "";
    const output = document.getElementById('output');
    output.className = "output hidden";

};



/**
 * Event listener sem fylgist með hvenær er ýtt á takkan 'hreinsaTakki'
 * og kallar þá á hreinsa() fallið.
 */
//Fékk smá hjálp frá chatGPT við þetta
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('hreinsaTakki');
    button.addEventListener('click', hreinsa);
});


/**
 * Event listener sem fylgist með hvenær er ýtt á takkan 'greinaTakki'
 * og kallar þá á greina() fallið.
 */
//Fékk smá hjálp frá chatGPT við þetta
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('greinaTakki');
    button.addEventListener('click', greina);
});

/**
 * Event listener sem fylgist með hvenær nýr stafur er sleginn inn í textarea
 * og kallar beint á hjálparfallið greining(), sem uppfærir greininguna.
 */
//Fékk smá hjálp frá chatGPT við þetta
document.addEventListener('DOMContentLoaded', () => {
    const string = document.getElementById('string');
    string.addEventListener('input', () => {
        const s = string.value;
        greining(s);
    });
});