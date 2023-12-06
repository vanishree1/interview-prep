function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    
    // Sort the intervals by their start values
    intervals.sort((a, b) => a[0] - b[0]);
    
    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = merged[merged.length - 1];
        
        if (currentInterval[0] <= lastMergedInterval[1]) {
            // The current interval overlaps with the last merged interval
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // No overlap, add the current interval to the merged result
            merged.push(currentInterval);
        }
    }

    return merged;
}

// Example usage:
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const mergedIntervals = mergeIntervals(intervals);
console.log(mergedIntervals); // This will output [[1, 6], [8, 10], [15, 18]]
