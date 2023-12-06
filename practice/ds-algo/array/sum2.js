function findSum2(nums, target) {
    const numToIndex = {}; // Create a hash table to store numbers and their indices.

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numToIndex.hasOwnProperty(complement)) {
            // If the complement is in the hash table, return its index and the current index.
            return [numToIndex[complement], i];
        }

        // Otherwise, store the current number and its index in the hash table.
        numToIndex[nums[i]] = i;
    }

    // If there's no solution, return an empty array or some other appropriate value.
    return [];
}