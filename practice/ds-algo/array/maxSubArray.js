function maxSubArray(nums) {
    if (nums.length === 0) {
        return 0;
    }

        let maxSum = nums[0]; // Initialize the maximum sum with the first element.
        let sum = 0; // Initialize the current sum with the first element.
    
        for (let i = 0; i < nums.length; i++) {
            
        sum += nums[i]
        if(sum > maxSum) {
            maxSum = sum
        }
    
        if(sum < 0) {
            sum = 0;
        }
    
        }
    
        return maxSum;  
}

// Example usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = maxSubArray(nums);
console.log(maxSum);