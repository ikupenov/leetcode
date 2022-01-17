// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let maxProfit = 0;
  let currMax = prices[prices.length - 1];
  
  for(let i = prices.length - 2; 0 <= i; i--) {
    maxProfit = Math.max(maxProfit, currMax - prices[i]);
    currMax = Math.max(currMax, prices[i]);
  }

  return maxProfit;
};

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
//  var maxProfit = function(prices) {
//   const lastIndex = prices.length - 1;
  
//   const maxSalePriceByIndex = [];
//   maxSalePriceByIndex[lastIndex] = prices[lastIndex];
  
//   for(let i = lastIndex - 1; 0 <= i; i--) {
//     const curr = prices[i];
//     const prevMax = maxSalePriceByIndex[i + 1];
//     maxSalePriceByIndex[i] = Math.max(curr, prevMax);
//   }
  
//   let maxProfit = 0;
  
//   for (let i = 0; i < maxSalePriceByIndex.length; i++) {
//     const maxSalePrice = maxSalePriceByIndex[i];
//     const buyPrice = prices[i];
    
//     const profit = maxSalePrice - buyPrice;
//     maxProfit = Math.max(maxProfit, profit);
//   }
  
//   return maxProfit;
// };
