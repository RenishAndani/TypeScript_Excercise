"use strict";
class Book {
    data;
    constructor(data) {
        this.data = data;
    }
    read() {
        return this.data;
    }
    write(s) {
        this.data = s;
    }
}
const b1 = new Book("this is GOT");
console.log(b1.read());
b1.write("Harry Potter");
console.log(b1.read());
