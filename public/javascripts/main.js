"use strict";
import {createKeys} from './keys.js'
let fs = require('fs');
let filename = process.argv[2];

let key = createKeys(200);

fs.writeFile(filename, key , (err) => {
    if (err) {
        throw err;
    }
    console.log("yes! File is written");
});

function xorString(init) {
  const initArr = Array.from(init);
  const initLength = initArr.length;
  return function* (input) {
      let idx = 0;
      for (const ch of input) {
          yield initLength === 0 ? ch : String.fromCharCode(ch.charCodeAt(0) ^ initArr[(idx++) % initLength].charCodeAt(0));
      }
  }
}

/*
* testing
*/
// let p1 = 'abC';
// let k1 = 'e1x';
// let f = xorString(k1);                  // get generator function built on key
// let o = f(p1);                          // run it with plaintext
// let c1 = '';                            // get crypto values byte by byte
// while (true) {
//   let y = o.next();
//   if (y.done) {
//       break;
//   }
//   c1 += y.value;
// }
// console.log(`DART\nplain: '${p1}', length: ${p1.length}, crypto: '${c1}', length: ${c1.length}`);   // unprintables in c1

// f = xorString(k1);                      // build generator function on key
// o = f(c1);                              // run it with cryptotext
// let p11 = '';
// while (true) {
//   let y = o.next();
//   if (y.done) {
//       break;
//   }
//   p11 += y.value;
// }
// console.log(`DART\ncrypto: '${c1}', length: ${c1.length}, plain: '${p11}', length: ${p11.length}`);   // unprintables in c1

export const $ = function (bar) {
  return document.getElementById(bar);
};

