Function.prototype.myBind = function(params) {
    let obj = this;
    let args1 = params.slice(1);
    return function(args2) {
        obj.apply(args1[0], [...args1, ...args2])
    }
}