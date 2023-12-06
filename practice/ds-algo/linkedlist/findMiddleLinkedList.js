function findMiddleLL(listNode, head) {
    let end = head;
    let middle = head;

    while(end !== null && end.next !== null) {
        middle = middle.next;
        end = end.next.next;
    }

    return middle;
}