const majorityElement = function (nums) {

    let res = 0;
    let count = 0;

    for (const el of nums) {

        if (count === 0) {
            res = el
        }
        count += el === res ? 1 : -1;
    }

    return res;
};
const result = majorityElement([3, 2, 3, 2, 2])
console.log(result);
