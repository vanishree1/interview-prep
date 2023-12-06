class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(data) {
        let newEle = new Node(data, null);
        if(!this.head) {
            this.head = newEle;
        } else {
            let curr = this.head;
            while(curr.next) {
                curr = curr.next
            }
            curr.next = newEle;

        }
    }

    displayNode() {
        let curr = this.head;
        while(curr.next) {
            console.log('data ==>', curr.data)
            curr = curr.next;
        }
    }
}