Array.prototype.flattenArryEasy = function(depth) {
    let res = [];
    for(let i=0; i< this.length; i++) {
        if(Array.isArray(this[i]) && depth > 0) {
            res.push(...this[i].flattenArryEasy(depth - 1));
        } else {
            res.push(this[i]);
        }
    }
    // this.forEach(element => {
    //     if(Array.isArray(element) && depth > 0) {
    //         console.log('i'. this, element)
    //         res.push(...element.flattenArryEasy(depth - 1));
    //     } else {
    //         res.push(element);
    //     }
    // });
    return res;
}

console.log('ehattt', [1,2,[3,4]].flattenArryEasy(1))
;