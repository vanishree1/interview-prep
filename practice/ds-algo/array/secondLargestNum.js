function secondLargestNum(arr) {
    let firstMax = Number.NEGATIVE_INFINITY;
    let secondMax = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < arr.lenght; i++) {
        if(a[i] > firstMax) {
            secondMax = firstMax;
            firstMax = a[i];
        } else if(a[i] > secondMax && a[i] !== firstMax) {
            secondMax = a[i];
        }
    }

    return secondMax;
}