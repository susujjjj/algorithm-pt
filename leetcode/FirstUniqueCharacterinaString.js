//return index
//1
//s = "leetcode"
// return 0.
//2
// s = "loveleetcode"
// return 2.
//3
// Input: s = "aabb"
// Output: -1

var firstUniqChar = function(s) {
    if (s.length === 0) return;

    for(let i=0; i<s.length; i++){
        const eachStr = s[i];
        if (s.indexOf(eachStr) == s.lastIndexOf(eachStr)) {
            return i;
        }
    }
    return -1;
};