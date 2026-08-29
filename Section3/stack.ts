class Stack<T> {
  private arr: T[] = [];

  push(item: T): void {
    this.arr.push(item);
  }

  pop(): T | undefined {
    if (this.arr.length == 0) {
      return undefined;
    }
    return this.arr.pop();
  }

  peek(): T | undefined {
    if (this.arr.length == 0) {
      return undefined;
    }
    return this.arr[this.arr.length - 1];
  }

  isEmpty(): boolean {
    if (this.arr.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}

const stack = new Stack<number>();

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
