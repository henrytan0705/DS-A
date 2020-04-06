// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(val) {
        const item = new Node(val);

        if (!this.front) {
            this.front = item;
            this.back = item;
        } else {
            this.back.next = item;
            this.back = item;
        }

        return ++this.length;
    }

    dequeue() {
        if (!this.length) return null;

        --this.length;
        const temp = this.front;

        if (this.front === this.back) {
            this.front = null;
            this.back = null;
        } else {
            this.front = this.front.next;
        }

        return temp.value;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Queue = Queue;