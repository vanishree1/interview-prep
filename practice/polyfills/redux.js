Array.prototype.myReduce = function(cb, accumulater) {
    let accumulater = accumulater;
    for(let i=0; i<this.length; i++) {
        accumulater = accumulater ? cb(accumulater, this[i]) : this[i];
    }

    return accumulater
}

function sum(a, b) {
    return a + b;
}

[1,2,3,4].myReduce(sum, 0);