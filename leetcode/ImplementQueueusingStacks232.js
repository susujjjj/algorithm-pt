//https://leetcode.com/problems/implement-queue-using-stacks/description/
var MyQueue = function () {
  this.first = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.first.push(x)
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.first.shift()
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.first.length > 0) {
    return this.first[0]
  }
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.first.length === 0
}
