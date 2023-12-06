// Check if Array.prototype.flatten exists, and if not, add a polyfill
if (!Array.prototype.flatten) {
    Array.prototype.flatten = function () {
      // Use the reduce method to flatten the array
      return this.reduce(function (flatArray, currentValue) {
        if (Array.isArray(currentValue)) {
          // If the current item is an array, recursively flatten it
          flatArray.push(...currentValue.flatten());
        } else {
          // If it's not an array, add it to the flattened array
          flatArray.push(currentValue);
        }
        return flatArray;
      }, []);
    };
  }
  
  // Example usage:
  const nestedArray = [1, [2, [3, 4], 5]];
  const flattenedArray = nestedArray.flatten();
  
  console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]
  