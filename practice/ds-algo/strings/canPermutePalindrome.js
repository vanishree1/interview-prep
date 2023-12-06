function canPermutePalindrome(s) {
    const charCount = new Map();

    // Count the occurrences of each character in the string.
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    let oddCount = 0;

    // Check if there's more than one character with an odd count.
    for (let count of charCount.values()) {
        if (count % 2 !== 0) {
            oddCount++;
        }

        if (oddCount > 1) {
            return false; // More than one character has an odd count, not a palindrome permutation.
        }
    }

    return true;
}

// Example usage:
const inputString = "taco cat";
const isPalindromePermutation = canPermutePalindrome(inputString);
console.log(isPalindromePermutation); // This will output true because "taco cat" is a palindrome permutation.
