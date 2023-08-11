const isPalindrome = function (s) {

    let left = 0;
    let right = s.length - 1;
    let regex = /[A-Za-z0-9]/;

    while (left < right) {
        let leftChar = s[left].toLowerCase();
        let rightChar = s[right].toLowerCase();

        if (!regex.test(leftChar)) {
            left++;
            continue;
        }

        if (!regex.test(rightChar)) {
            right--;
            continue
        }

        if (leftChar !== rightChar) {
            return false
        }

        left++;
        right--;
    }

    return true;

};

const result = isPalindrome(" ")
console.log(result);
