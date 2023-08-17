const strStr = function (haystack, needle) {

    if (needle === '') return 0;

    let endPosition = haystack.length + 1 - needle.length;
    for (let i = 0; i < endPosition; i++) {

        for (let j = 0; j < needle.length; j++) {

            if (haystack[i + j] !== needle[j]) {
                break;
            }
            if (j === needle.length - 1) {
                return i;
            }
        }
    }

    return -1;

};
let result = strStr("mississippi", "issip")