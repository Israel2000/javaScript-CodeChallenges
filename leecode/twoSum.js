//Two Sums
// Example: Given nums = [2, 7, 11, 15], target = 9,
//     Because nums[0] + nums[1] = 2 + 7 = 9,
//     return [0, 1].

const twoSum = function (nums, target) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}