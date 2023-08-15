const nextGreaterElement = function (nums1, nums2) {

    const nums1Obj = {};
    let res = [];
    for (let i = 0; i < nums1.length; i++) {
        res.push(-1);
    }
    let stack = [];


    for (let i = 0; i < nums1.length; i++) {
        const element = nums1[i];
        if (nums1Obj[element] === undefined) {
            nums1Obj[element] = i;
        }
    }

    for (let i = 0; i < nums2.length; i++) {

        const element = nums2[i];
        while (stack && element > stack[stack.length - 1]) {
            let val = stack.pop();
            let idx = nums1Obj[val];
            res[idx] = element;
        }
        if (nums1Obj[element] !== undefined) {
            stack.push(element)
        }

    }
    return res

};
const result = nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7])
console.log(result);