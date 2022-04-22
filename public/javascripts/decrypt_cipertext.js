"use strict";
let importmodule = require('./keys.js');
let fs = require('fs');
let fileinput = process.argv[2];
let keyinput = process.argv[3];
let decryptplain = process.argv[4];

if(fileinput != null && keyinput != null && decryptplain != null){
  one_time_pad_decrypt();
}else{
  console.log("Something went wrong. You need first to specify the following: crypto filename, key and decrypted filename .");
}

function one_time_pad_decrypt(){
  //input which cipertext file the user wants to read from.
  let filename_cipertext = `../cryptodata/${fileinput}`;
  let filename_key = `../keys/${keyinput}`;
  let filename_decrypt = `../decryptdata/${decryptplain}`;


  let plainread = fs.readFileSync(filename_cipertext, 'utf-8');

  let keyread = fs.readFileSync(filename_key, 'utf-8');

  let cipertext = plainread;
  let key = keyread;
  let f =  importmodule.xorString(key);               // build generator function on key
  let o =  f(cipertext);                              // run it with cryptotext
  let plaintextoutcome = '';
  while (true) {
    let y = o.next();
    if (y.done) {
        break;
    }
   plaintextoutcome += y.value;
  }
  // this would delete the key when active.
  // fs.unlink(filename_key);
  // fs.writeFileSync(filename_decrypt, plaintextoutcome, 'utf-8');
  fs.writeFileSync("../cryptodata/" + filename_decrypt + ".txt", plaintextoutcome, 'utf-8');
console.log(`DART\ncrypto: '${cipertext}', length: ${cipertext.length}, plain: '${plaintextoutcome}', length: ${plaintextoutcome.length}`);   // unprintables in cipertext
}
