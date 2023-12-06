function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false; // Anagrams must have the same length.
    }

    const charCount = new Map();

    // Count the characters in the first string.
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Decrement the character counts for the second string.
    for (let char of t) {
        if (!charCount.has(char)) {
            return false; // Character doesn't exist in the first string.
        }
        charCount.set(char, charCount.get(char) - 1);
        if (charCount.get(char) < 0) {
            return false; // Character count is negative (unequal frequency).
        }
    }

    return true; // Both strings are anagrams of each other.
}

// Example usage:
const string1 = "anagram";
const string2 = "nagaram";
const isAnagramCheck = isAnagram(string1, string2);
console.log(isAnagramCheck); // This will output true because the two strings are anagrams.