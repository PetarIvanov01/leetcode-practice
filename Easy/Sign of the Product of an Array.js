const arraySign = function (nums) {

    let negative = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            return 0
        }
        if (nums[i] < 0) {
            negative++;
        }
    }

    return negative % 2 === 0 ? 1 : -1


}
arraySign([-2, -3, -4, 3, 2, 1])
