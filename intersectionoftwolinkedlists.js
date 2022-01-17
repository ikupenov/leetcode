// https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// O(m + n) runtime, O(1) space
var getIntersectionNode = function (headA, headB) {
  let nodeA = headA;
  let nodeB = headB;

  while (nodeA !== nodeB) {
    nodeA = nodeA ? nodeA.next : headB;
    nodeB = nodeB ? nodeB.next : headA;
  }

  return nodeA;
};

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// Naive solution O(m + n) runtime, O(m) space
// var getIntersectionNode = function (headA, headB) {
//   const map = new Map();

//   let nodeA = headA;
//   while (nodeA !== null) {
//     map.set(nodeA, true);
//     nodeA = nodeA.next;
//   }

//   let nodeB = headB;
//   while (nodeB !== null) {
//     if (map.has(nodeB)) {
//       return nodeB;
//     }

//     nodeB = nodeB.next;
//   }

//   return null;
// };
