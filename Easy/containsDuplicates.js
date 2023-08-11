
const containsDuplicate = function (nums) {

    const collection = [];

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (collection[element] === undefined) {
            collection[element] = i
        }
        else {
            return true
        }

    }
    return false
};

const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
let result = containsDuplicate(nums);

console.log(result);