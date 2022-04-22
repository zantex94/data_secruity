"use strict";
let importmodule = require('./keys.js');
let fs = require('fs');
let fileplaintextinput = process.argv[2];
let keyinput = process.argv[3];
let cryptotext = process.argv[4];

if(fileplaintextinput != null && keyinput != null && cryptotext != null){
  one_time_pad_encrypt();
}else{
  console.log("Something went wrong. You need first to specify the following: filename(plaintext), key and  crypto filename.");
}


function one_time_pad_encrypt(){
  //input which cipertext file the user wants to read from.
  let filename_plaintextfile = `../data/${fileplaintextinput}`;
  let filename_key = `../keys/${keyinput}`;
  let filename_crypto = `../cryptodata/${cryptotext}`;

  let plainread = fs.readFileSync(filename_plaintextfile, 'utf-8');

  let keyread = fs.readFileSync(filename_key, 'utf-8');

  let cipertext = plainread;
  let key = keyread;
  let f =  importmodule.xorString(key);               // build generator function on key
  let o =  f(cipertext);                              // run it with cryptotext
  let cryptoplaintext = '';
  while (true) {
    let y = o.next();
    if (y.done) {
        break;
    }
    cryptoplaintext += y.value;
  }
  // this would delete the key when active.
  // fs.unlink(filename_key);
  fs.writeFileSync("../cryptodata/" + filename_crypto + ".txt", cryptoplaintext, 'utf-8');
  // fs.writeFileSync(filename_crypto, cryptoplaintext, 'utf-8');
console.log(`DART\ncrypto: '${cipertext}', length: ${cipertext.length}, plain: '${cryptoplaintext}', length: ${cryptoplaintext.length}`);   // unprintables in cipertext
}
