function maxSubarraySum(arr, max) {

    if (arr.length < max) return null;

    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < max; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (let i = max; i < arr.length; i++) {

        tempSum = tempSum - arr[i - max] + arr[i];
        maxSum = Math.max(maxSum, tempSum)

    }

    return maxSum;
}

console.log(maxSubarraySum([1, 2, 3, 4, 5, 1], 2));