function groupAnagrams(strs) {
    const anagramGroups = new Map();

    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');

        if (!anagramGroups.has(sortedStr)) {
            anagramGroups.set(sortedStr, []);
        }

        anagramGroups.get(sortedStr).push(str);
    }

    return Array.from(anagramGroups.values());
}

// Example usage:
const inputStrings = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groupedAnagrams = groupAnagrams(inputStrings);
console.log(groupedAnagrams);



