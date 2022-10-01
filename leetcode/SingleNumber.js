//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

var singleNum = function (nums) {
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) return nums[i]
  }
  return -1
}
singleNum([2, 2, 1])
