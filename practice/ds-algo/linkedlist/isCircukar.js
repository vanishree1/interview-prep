function isCircular(list){
    let fast=list.head;
    let slow=list.head;
    while(fast.next && fast.next.next){
        if(fast.next===list.head || fast.next.next===list.head){
            return 'complete'
        }
        if(fast.next===slow || fast.next.next===slow){
            return 'Partial'
        }
        fast=fast.next.next;
        slow=slow.next
    }
    return 'non circular';
}



class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next
    }
}
class LinkedList{
    constructor(){
        this.head=null
    }
    add(data,next=null){
        if(!this.head){
            this.head=new Node(data)
            return this.head
        }else{
            let node=this.head
            while(node.next){
                node=node.next
            }
            node.next=new Node(data,next)
            return node.next
        }
    }
}

let linkedList=new LinkedList()
linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
let node=linkedList.add(4)
console.log(node)
console.log(linkedList.add(5))
console.log(isCircular(linkedList))
