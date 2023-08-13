

const getConcatenation = function (nums) {

    const result = [];
    let times = 0;
    for (let i = 0; i < nums.length; i++) {

        result.push(nums[i]);

        if (nums[i + 1] == undefined && times < 1) {
            nums = [...nums, ...result];
            times++
        }
    }
    return nums


}
const result = getConcatenation([1, 2, 1])
console.log(result);