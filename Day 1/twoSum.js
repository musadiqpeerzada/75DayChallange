/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let l = nums.length
    for (let i = 0; i < l; i++) {
        for (let k = 1; k < l; k++) {
            if (i !== k ) {
                if (nums[i] + nums[k] === target) {
                    return ([i, k])                    
                }
            }
        }
    }
    
};