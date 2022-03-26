/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let res = {};
    let maxCount = 0;
    let max = 0;
    for (let num of nums) {
        if (res[num]) {
            res[num] = res[num] + 1;
        }
        else {
            res[num] = 1;
        }
        if (maxCount < res[num]) {
            maxCount = res[num];
            max = num;
        }
    }
    return max;
};