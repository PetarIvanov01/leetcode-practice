const findDifference = function (nums1, nums2) {

    let num1Set = new Set(nums1)
    let num2Set = new Set(nums2)

    let answer1 = new Set();
    let answer2 = new Set();

    for (let i = 0; i < nums1.length; i++) {

        if (!num2Set.has(nums1[i])) {
            answer1.add(nums1[i])
        }

    }

    for (let i = 0; i < nums2.length; i++) {
        if (!num1Set.has(nums2[i])) {
            answer2.add(nums2[i])
        }

    }

    return [Array.from(answer1), Array.from(answer2)]
};
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));