/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
	if (x === 0) return true
	if (x < 0 || x % 10 === 0) return false
	// 转成字符串
	const str = String(x)
	// 记录相等个数
	let count = 0
	// 切割字符串成数组
	const strArr = str.split('')
	// 获取数组长度
	const _length = strArr.length
	// 是否是偶数
	const iso = _length % 2 === 0
	// 取成对的次数， 4为2对，5为2对
	const length = iso ? _length / 2 : (_length - 1) / 2
	// 前后比较
	for (let i = 0; i < length; i++) {
		if (strArr[i] === strArr[_length - 1 - i]) {
			count += 1
		}
	}
	return count === length
}
// @lc code=end
