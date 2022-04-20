"use strict";
let importmodule = require('./keys.js');
let fs = require('fs');

one_time_pads();

/*
* testing function for one.
*/
async function one_time_pads(){
  let filename_key = "../keys/key1.txt";
  let filename_plaintext = "../data/plaintext1.txt";

  let key = await importmodule.createKeys(200);
    console.log(key);

  fs.writeFileSync(filename_key,key);
  // console.log(`${writesync}`);



let plainread = fs.readFileSync(filename_plaintext);
console.log(`${plainread}`);

let keyread = fs.readFileSync(filename_key);
console.log(`${keyread}`);


  let plaintext = plainread;
  let key1 = keyread;
  let f = importmodule.xorString(key1);                  // get generator function built on key
  let o = f(plaintext);                          // run it with plaintext
  let cipertext = '';                            // get crypto values byte by byte
  while (true) {
    let y = o.next();
    if (y.done) {
        break;
    }
    cipertext += y.value;
  }
  console.log(`DART\nplain: '${plaintext}', length: ${plaintext.length}, crypto: '${cipertext}', length: ${cipertext.length}`);   // unprintables in cipertext

  f = importmodule.xorString(key1);               // build generator function on key
  o = f(cipertext);                              // run it with cryptotext
  let plaintextoutcome = '';
  while (true) {
    let y = o.next();
    if (y.done) {
        break;
    }
   plaintextoutcome += y.value;
  }
console.log(`DART\ncrypto: '${cipertext}', length: ${cipertext.length}, plain: '${plaintextoutcome}', length: ${plaintextoutcome.length}`);   // unprintables in cipertext
}





