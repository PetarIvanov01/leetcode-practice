const lengthOfLastWord = function (s) {

    let length = 0;
    let end = s.length - 1;

    // Skip trailing spaces
    while (end >= 0 && s[end] === ' ') {
        end--;
    }

    // Count the characters of the last word
    while (end >= 0 && s[end] !== ' ') {
        length++;
        end--;
    }

    return length;

};
const result = lengthOfLastWord('Hello World  ')
console.log(result);