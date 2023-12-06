class Node {
    constructor(data) {
        this.data = data;
        this.prevLink = null;
        this.nextLink = null;
    }
}

class DoubleLinkList {
    constructor() {
        this.head = null;
    }

    addNode(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            return
        }

        let currNode = this.head;
        let prevNode = currNode;
        while(currNode.next) {
            currNode = currNode.next;
        }
        currNode.next = newNode;
        newNode.prev = currNode;
      
        return;
    }
}

