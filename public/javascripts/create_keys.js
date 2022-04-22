"use strict";
let fs = require('fs');

let characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let index = process.argv[2] || 5;
let length = process.argv[3] || 200;

for(let i = 1; i <= index; i++){

    let result = '';
    let charactersLength = characters.length;
    for (let j = 0; j <= length; j++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }        

    fs.writeFileSync("../keys/" + "key" + `${i}` + ".txt", result, 'utf-8');

}
