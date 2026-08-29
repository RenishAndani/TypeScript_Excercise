"use strict";
class Stack {
    arr = [];
    push(item) {
        this.arr.push(item);
    }
    pop() {
        if (this.arr.length == 0) {
            return undefined;
        }
        return this.arr.pop();
    }
    peek() {
        if (this.arr.length == 0) {
            return undefined;
        }
        return this.arr[this.arr.length - 1];
    }
    isEmpty() {
        if (this.arr.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.isEmpty()); // Output: false
console.log(stack.pop());
stack.pop();
console.log(stack.isEmpty()); // Output: true
console.log(stack.pop()); // Output: undefined
