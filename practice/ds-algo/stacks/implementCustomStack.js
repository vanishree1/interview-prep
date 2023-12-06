class Stack {
    constructor() {
        this.size = 0;
        this.arr = []
    }
    push(ele) {
        this.arr[this.size] = ele;
        this.size++;
    }

    pop() {
        if(this.arr.length < 0) {
            return;
        }
        this.arr.splice(this.size);
        this.size--;
    }

    display() {
        if(this.arr.length < 0) {
            return;
        }
        for(let i=0; i< this.arr.length; i++) {
            console.log('display arr', arr[i])
        }
    }
}