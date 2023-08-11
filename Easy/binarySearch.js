let search = function (nums, target) {

    const indexMap = {};

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        if (indexMap[element] === undefined) {
            indexMap[element] = i;
        }
    }

    return indexMap[target] !== undefined ? indexMap[target] : -1;
}

let result = search([-1, 0, 3, 5, 9, 12], 9)
