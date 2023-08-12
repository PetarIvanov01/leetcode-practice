let reverseList = function (head) {

    let prev = null;
    let curr = head;

    while (curr) {
        let nxt = curr.next;
        curr.next = prev
        prev = curr
        curr = nxt
    }
    return prev

}
const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
}
let result = reverseList(list);
console.log(result);