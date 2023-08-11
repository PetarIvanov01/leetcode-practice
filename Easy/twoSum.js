let twoSum = function (nums, target) {

    const collection = {};

    for (let i = 0; i < nums.length; i++) {

        const element = nums[i];
        let diff = target - element;                                                

        if (collection[diff] !== undefined) {
            return [collection[diff], i]
        }

        if (collection[element] === undefined) {
            collection[element] = i;

        }
    }

};

const result = twoSum([3, 5, 8, 11,4,2], 10);
console.log(result);