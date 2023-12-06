function findDuplicate(arr) {
    let map = {};
    let hasDuplicate = false;
    arr.forEach(element => {
        if(!map[element]) {
            map[element] = true;
        }else {
            hasDuplicate = true;
        }
    });
    return hasDuplicate;
}

console.log(findDuplicate([1,2,3,3,4,5]) ? 'found duplicate' : 'found no duplicate')