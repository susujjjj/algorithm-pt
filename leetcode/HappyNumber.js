//https://leetcode.com/problems/happy-number/

var isHappy = function (n) {
  let arr = []
  let result = false
  let sum = 0

  while (n > 0) {
    let divide = n % 10
    let quotient = Math.floor(n / 10)
    n = quotient
    arr.push(divide)
  }
  let arr2 = arr.map((num) => num * num)
  sum = arr2.reduce((prev, curr) => prev + curr, 0)

  if (sum === 1) {
    return (result = true)
  } else if (sum >= 2 && sum <= 4) {
    return (result = false)
  }
  return isHappy(sum)
}

// 마지막 return 은 isHappy(sum)
// function 자체를 넣어서  recursion하는 방법을 사용!
