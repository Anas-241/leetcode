/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let num2 = nums.slice()
    let num3 =num2.concat(nums)
    return nums.concat(nums)

    
};