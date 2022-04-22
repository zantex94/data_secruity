"use strict";
let fs = require('fs');
let fileplaintextinput = process.argv[2];
let filename = process.argv[3];

if(fileplaintextinput != null && filename != null){
    one_time_pad_create_plaintex();
}else{
    console.log("Something went wrong during filename ant it´s text. You need first to specify a plaintext and after that a filename.");
}

function one_time_pad_create_plaintex(){
  //input which creates the plaintext file the user wants to read from.
  let filename_plaintext = `../data/${fileplaintextinput}`;

  fs.writeFileSync("../data/" + filename + ".txt", fileplaintextinput, 'utf-8');

console.log(`plaintext created: '${fileplaintextinput}', length: ${fileplaintextinput.length}`);   // unprintables in cipertext
}
