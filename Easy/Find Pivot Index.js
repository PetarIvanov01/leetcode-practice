const pivotIndex = function (nums) {

    const totalSum = nums.reduce((sum, el) => sum += el, 0);

    let pos = 0;
    let leftSum = 0;

    while (pos <= nums.length - 1) {

        let rightSum = totalSum - nums[pos] - leftSum;

        if (leftSum === rightSum) {
            return pos;
        }
        leftSum += nums[pos];
        pos++;
    }
    return -1;

};
const result = pivotIndex([3, 2, 1, 2, 1, 2]);
