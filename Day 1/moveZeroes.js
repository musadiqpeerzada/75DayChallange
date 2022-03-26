/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        // console.log(nums, " - ", i)
        if (nums[i] === 0) {
            count = count + 1;
            nums.splice(i, 1);
            // nums.push(0)
            i = i -1;
        }
    }
    for (let i = 0; i < count; i++) {
        nums.push(0)
    }
};