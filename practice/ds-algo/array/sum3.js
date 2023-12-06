function sum3(arr, target) {
    let res = [];
    for(let i=1; i< arr.length - 1; i ++) {
        if(i > 0 && arr[i] === arr[i-1]) continue;
        let j = i+ 1;
        let k = arr.length - 1;
        let sum = 0;
        while(j < k) {
           sum = a[i] + a[j] + a[k];
           if(sum < target) {
                j++;
           } else if(sum > target) {
                k--;
           } else {
                res.push([a[i], a[j], a[k]]);
                while(j > k && a[j] === a[j-1]) j++;
                while(k < j && a[k] === a[k+1]) k--;
           }
        }
    }
    return res;
}

console.log(sum3([1, -1, 0, 0, 0, 0, 2, -2, 0], 0))