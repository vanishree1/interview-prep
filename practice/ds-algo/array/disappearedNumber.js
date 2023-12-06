function findDisappearedNumbers(nums) {
    const n = nums.length;
    const seen = Array(n).fill(false);
    const result = [];

    for (let num of nums) {
        seen[num - 1] = true; // Mark the number as seen by indexing the array at num - 1.
    }

    for (let i = 0; i < n; i++) {
        if (!seen[i]) {
            result.push(i + 1); // If not seen, it's missing; add it to the result.
        }
    }

    return result;
}

// Example usage:
const nums = [4, 3, 2, 7, 8, 2, 1, 5];
const disappearedNumbers = findDisappearedNumbers(nums);
console.log(disappearedNumbers); // This will output [6]
