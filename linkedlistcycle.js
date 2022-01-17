/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let nodeX = head;
  let nodeY = head;

  while (nodeX !== null && nodeX.next !== null) {
    nodeX = nodeX.next.next;
    nodeY = nodeY.next;

    if (nodeX === nodeY) return true;
  }

  return false;
};

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// var hasCycle = function (head) {
//   let node = head;
//   const visited = new Map();

//   while (node !== null) {
//     if (visited.has(node)) {
//       return true;
//     }

//     visited.set(node, true);
//     node = node.next;
//   }

//   return false;
// };
