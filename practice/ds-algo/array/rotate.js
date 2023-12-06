export function rotate(arr, k) {
    let size = arr.length;
    reverse(arr, 0,  size-1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, size-1);
    return arr
}

function reverse(arr, firstIndex, lastIndex) {
    while(firstIndex < lastIndex) {
        let temp = arr[firstIndex];
        arr[firstIndex] = arr[lastIndex];
        arr[lastIndex] = temp;
        firstIndex++;
        lastIndex--;
    }
}

console.log('rottate',rotate([1,2,3,4,5,6], 3))



