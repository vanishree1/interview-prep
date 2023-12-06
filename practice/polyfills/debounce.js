export function debounce(cb, interval) {
    let timer;
    return function(...args) {
        if(timer){
            clearInterval(timer);
            return;
        }
        timer = setTimeout(()=>{
            cb.apply(this, args);
        }, 1000)
    }
}