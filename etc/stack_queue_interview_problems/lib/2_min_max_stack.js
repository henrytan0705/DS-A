// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Modify the definition of the Stack class provided to create an enhanced 
// version of a Stack data structure called MinMaxStack.
//
// A MinMaxStack has all of the same behavior as a Stack, but can also return
// the node with the minimum or maximum value in constant time.
//
// You may alter any of the original Stack's methods, including the 
// constructor.
//  
// Values of nodes of the MinMaxStack are always guaranteed to be numbers.
//
//
// ------------
// Constraints:
// ------------
//
// (1) All MinMaxStack methods must run in constant time, O(1).
//
//
// --------
// Example:
// --------
//
// const minMaxStack = new MinMaxStack();
//
// minMaxStack.push(10);
// minMaxStack.push(12);
// minMaxStack.push(8);
// minMaxStack.push(2);
// minMaxStack.push(20);
//
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 20
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 8
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 10
//
// minMaxStack.pop();
// console.log(minMaxStack.min());   => null
// console.log(minMaxStack.max());   => null
//
//
// -----------
// Let's code!
// -----------
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// Refactor the regular Stack below into a MinMaxStack!
// class Stack {
    // Change class name to MinMaxStack
class MinMaxStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
        this.maxStack = [];
        this.minStack = [];
    }

    push(val) {
        const newNode = new Node(val);
        
        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;

            // push node into both min/max stacks if stack is empty
            this.maxStack.push(newNode);
            this.minStack.push(newNode);
        } else {
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;

            // push node into max stack if node is larger then current max 
            if (newNode.value >= this.maxStack[this.maxStack.length - 1].value) {
                this.maxStack.push(newNode);
            // push node into min stack if node is smaller then current min
            } else if (newNode.value <= this.minStack[this.minStack.length - 1].value) {
                this.minStack.push(newNode);
            }
        }
        return ++this.length;
    }

    pop() {
        if (!this.top) {
            return null;
        }

        const temp = this.top;

        if (this.top === this.bottom) {
            this.bottom = null;
        } 

        // pop current max if current top is the same node
        if (temp.value === this.maxStack[this.maxStack.length - 1].value) {
            this.maxStack.pop();
        } 

        // pop current min if current min is the same node
        if (temp.value === this.minStack[this.minStack.length - 1].value) {
            this.minStack.pop();
        }

        this.top = this.top.next;
        this.length--;
        return temp;
    }

    size() {
        return this.length;
    }

    max() {
        return this.maxStack[this.maxStack.length - 1] || null;
    }

    min(){
        return this.minStack[this.minStack.length - 1] || null;
    }  
}

// Forgetting something down here? 
exports.Node = Node;
// exports.Stack = Stack;
// export new class 
exports.MinMaxStack = MinMaxStack;