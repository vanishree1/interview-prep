function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n);
    
    // Initialize the left and right product arrays
    const leftProducts = new Array(n);
    const rightProducts = new Array(n);
    
    leftProducts[0] = 1;
    rightProducts[n - 1] = 1;
    
    // Calculate the left product of each element
    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }
    
    // Calculate the right product of each element
    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }
    
    // Combine the left and right products to get the result
    for (let i = 0; i < n; i++) {
        output[i] = leftProducts[i] * rightProducts[i];
    }
    
    return output;
}

// Example usage:
const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result); 