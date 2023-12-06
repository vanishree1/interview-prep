function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return "";
    }

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") {
                return "";
            }
        }
    }

    return prefix;
}

// Example usage:
const inputStrings = ["flower", "flow", "flight"];
const commonPrefix = longestCommonPrefix(inputStrings);
console.log(commonPrefix); // This will output "fl".
