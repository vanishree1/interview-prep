function combinationSum(candidates, target) {
    const result = [];
    
    function backtrack(start, currentSum, currentCombination) {
        if (currentSum === target) {
            result.push([...currentCombination]);
            return;
        }
        
        if (currentSum > target || start === candidates.length) {
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            currentCombination.push(candidates[i]);
            backtrack(i, currentSum + candidates[i], currentCombination);
            currentCombination.pop();
        }
    }
    
    backtrack(0, 0, []);
    
    return result;
}

// Example usage:
const candidates = [2, 3, 6, 7];
const target = 7;
const combinations = combinationSum(candidates, target);
console.log(combinations);