const isIsomorphic = function (s, t) {

    const mapST = {};
    const mapTS = {};

    for (let i = 0; i < s.length; i++) {

        if (mapST[s[i]] === undefined) {
            mapST[s[i]] = t[i];
        }
        else {
            if (mapST[s[i]] !== t[i]) {
                return false;
            }
        }

        if (mapTS[t[i]] === undefined) {
            mapTS[t[i]] = s[i];
        }
        else {
            if (mapTS[t[i]] !== s[i]) {
                return false
            }
        }

    }

    return true

};

const result = isIsomorphic('bbbaaaba', 'aaabbbba');
console.log(result);