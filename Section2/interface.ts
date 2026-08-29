interface Readable {
  read(): string;
}

interface Writeable extends Readable {
  write(s: string): any;
}

class Book implements Writeable {
  data: string;

  constructor(data: string) {
    this.data = data;
  }

  read(): string {
    return this.data;
  }

  write(s: string) {
    this.data = s;
  }
}

const b1 = new Book("this is GOT");

console.log(b1.read());

b1.write("Harry Potter");

console.log(b1.read());
