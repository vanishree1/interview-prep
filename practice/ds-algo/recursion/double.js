function double(arr) {
    if(arr.lenghth < 2) {
        return arr[0];
    }
    return 2 * double(arr.slice(0, arr.lenghth - 1))
}
