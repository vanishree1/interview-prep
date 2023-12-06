Array.prototype.myForEach = function(cb) {
    for(let i = 0; i< this.length; i++){
        cb(this[i])
    }
}

function printStatement(i) {
    console.log(i)
}

['1,2,3,4'].myForEach(printStatement)