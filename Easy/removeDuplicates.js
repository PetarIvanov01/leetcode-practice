const removeDuplicates = function (nums) {

    let left = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[left] = nums[i]
            left++
        }
    }

    return left
}

const result = removeDuplicates([1, 1, 2, 3, 4, 4, 5]);
console.log(result);