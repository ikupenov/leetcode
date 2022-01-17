// https://leetcode.com/problems/symmetric-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// BFS solution
var isSymmetric = function (root) {
  const compareQueue = [];

  const leftRootQueue = [root.left];
  while (!!leftRootQueue.length) {
    const node = leftRootQueue.shift();

    compareQueue.push(node?.val);

    if (node === null) continue

    leftRootQueue.push(node.left);
    leftRootQueue.push(node.right);
  }

  const rightRootQueue = [root.right];
  while (!!rightRootQueue.length) {
    const node = rightRootQueue.shift();
    const compareNodeVal = compareQueue.shift();

    if (node?.val !== compareNodeVal) return false;

    if (node === null) continue;

    rightRootQueue.push(node.right);
    rightRootQueue.push(node.left);
  }

  return true;
};
