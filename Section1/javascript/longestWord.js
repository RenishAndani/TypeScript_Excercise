"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logestWord(s) {
    const sarrr = s.split(" ");
    let max = "";
    if (s.length > 0) {
        max = sarrr[0];
    }
    else {
        return "";
    }
    for (const s of sarrr) {
        if (s.length > max.length) {
            max = s;
        }
    }
    return max;
}
let s = "Jon snow the king in the north";
console.log(logestWord(s));
//# sourceMappingURL=longestWord.js.map