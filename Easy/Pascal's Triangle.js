const generate = function (numRows) {

    const result = [[1]];

    for (let i = 0; i < numRows - 1; i++) {

        let oldArr = result[i];
        oldArr = [0, ...oldArr, 0];
        let row = [];

        for (let j = 0; j < result[i].length + 1; j++) {

            let left = oldArr[j];
            let right = oldArr[j + 1];

            row.push(left + right);
        }
        result.push(row)

    }

    return result
};
const result = generate(5)
// Output -> [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]