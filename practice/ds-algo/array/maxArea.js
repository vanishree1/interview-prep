export function maxArea(arr) {
    let max = 0;
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        const h1 = height[left];
        const h2 = height[right];
        const width = right - left;
        const currentArea = Math.min(h1, h2) * width;
        max = Math.max(currentArea, max);
        if(h1 < h2) {
            left ++;
        } else {
            right --;
        }
    }
    return max;
}