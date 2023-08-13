const isSubsequence = function (s, t) {

    let firstP = 0;
    let secondP = 0;

    while (secondP < t.length) {

        if (s[firstP] === t[secondP]) {
            firstP++;
        }
        secondP++

    }

    return firstP === s.length ? true : false


};
const result = isSubsequence('acb', 'ahbcg')
console.log(result);