"use strict";
module.exports = {
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