/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let min = Infinity, profit = 0;
    for(let i =0; i < prices.length; i++){
        let currentProfit = 0;
        if(prices[i] < min){
            min = prices[i];
        }
        if(currentProfit < prices[i] - min){
            currentProfit = prices[i] - min;
            profit = profit  + currentProfit;
            min = prices[i];
        }
    }
    return profit;
};