function maxProfit(prices) {
    if (prices.length < 2) {
        return 0; // No profit can be made with less than 2 days of data.
    }

    let minPrice = prices[0]; // Initialize the minimum price as the first day's price.
    let maxProfit = 0; // Initialize the maximum profit as 0.

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]; // Update the minimum price if a lower price is found.
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice); // Update the maximum profit.
        }
    }

    return maxProfit;
}

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
const maxProfitValue = maxProfit(prices);
console.log(maxProfitValue);