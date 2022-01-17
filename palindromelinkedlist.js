// https://leetcode.com/problems/palindrome-linked-list/submissions/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// https://leetcode.com/problems/palindrome-linked-list/discuss/1137027/JS-Python-Java-C%2B%2B-or-Easy-Floyd's-%2B-Reversal-Solution-w-Explanation
// O(n) runtime, O(1) space
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let walker = head;
  let runner = head;

  while (runner !== null && runner.next !== null) {
    walker = walker.next;
    runner = runner.next.next;
  }

  let prevWalker = walker;
  walker = walker.next;
  prevWalker.next = null;

  while (walker !== null) {
    const nextTemp = walker.next;
    walker.next = prevWalker;
    prevWalker = walker;
    walker = nextTemp;
  }

  let leftWalker = head;
  let rightWalker = prevWalker;

  while (leftWalker !== null && rightWalker !== null) {
    if (leftWalker.val !== rightWalker.val) return false;

    leftWalker = leftWalker.next;
    rightWalker = rightWalker.next;
  }

  return true;
};

// O(n) runtime, O(n) space
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// var isPalindrome = function (head) {
//   let node = head;
//   const stack = [];

//   while (node !== null) {
//     stack.push(node.val);
//     node = node.next;
//   }

//   for (let i = 0, j = stack.length - 1; i < j; i++, j--) {
//     if (stack[i] !== stack[j]) {
//       return false;
//     }
//   }

//   return true;
// };
