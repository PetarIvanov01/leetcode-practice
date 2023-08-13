
const replaceElements = function (arr) {

    if (arr.length <= 1) {
        return [-1]
    }

    let max = -1;

    for (let i = arr.length - 1; i > -1; i--) {

        let newMax = Math.max(max, arr[i]);
        arr[i] = max;
        max = newMax

    }
    return arr

}

const result = replaceElements([17, 5, 18, 4, 6, 1])
console.log(result);