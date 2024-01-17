function sumTwoSmallestNums(nums) {
    nums.sort((a, b) => a - b);

    let sum = nums[0] + nums[1];

    return sum;
}

console.log(sumTwoSmallestNums([19, 5, 42, 2, 77])); 
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]));
console.log(sumTwoSmallestNums([2, 9, 6, -1])); 
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])); 
