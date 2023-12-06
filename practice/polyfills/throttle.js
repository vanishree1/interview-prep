export function throttle(cb, interval) {
    let shouldWait = false;
    let params = null;
    const checkForPrams=() => {
        if(params === null) {
            shouldWait = false;
        } else {
            cb(...params);
            params = null;
            setTimeout(checkForPrams, interval)
        }
    }

    return (...args) =>{
        if(shouldWait) {
            params = args;
            return;
        }
        cb(...args);
        shouldWait = true;
        params = null;
        setTimeout(checkForPrams, interval)
    }
}
