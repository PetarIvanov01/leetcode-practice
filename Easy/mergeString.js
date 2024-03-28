function mergeAlternately(word1, word2) {

    let string = '';
    let longerWord = Math.max(word1.length, word2.length);

    for (let i = 0; i < longerWord; i++) {

        if (word1[i] === undefined && word2[i]) {
            string += word2.substring(i);
            break;
        }
        if (word2[i] === undefined && word1[i]) {
            string += word1.substring(i);
            break;
        }
        string += word1[i] + word2[i];
    }

    return string

}
mergeAlternately('abcaa', 'pqr');