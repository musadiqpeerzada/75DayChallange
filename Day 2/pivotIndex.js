/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let halfSum = nums.reduce((a, c) => a + c) / 2;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (sum === halfSum - nums[i] / 2) {
            return i
        };
        sum = sum + nums[i];  
    }
    return -1;
};