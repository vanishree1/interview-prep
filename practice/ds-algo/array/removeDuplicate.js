function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let current = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[current]) {
            current++;
            nums[current] = nums[i];
        }
    }

    return current + 1;
}

// Example usage:
const nums = [1, 1, 2, 2, 3, 4, 4, 5];
const newLength = removeDuplicates(nums);

console.log("Array after removing duplicates: " + nums.slice(0, newLength));
console.log("New array length: " + newLength);
