
// program to generate random strings

let characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

module.exports = {

createKeys (length) {
    let result = '';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
},
xorString(init) {
    const initArr = Array.from(init);
    const initLength = initArr.length;
    return function* (input) {
        let idx = 0;
        for (const ch of input) {
            yield initLength === 0 ? ch : String.fromCharCode(ch.charCodeAt(0) ^ initArr[(idx++) % initLength].charCodeAt(0));
            // yield initLength === 0 ? ch : String.fromCharCode(toString(ch).charCodeAt(0) ^ toString(initArr[(idx++) % initLength]).charCodeAt(0));
        }
    }
  }
}
