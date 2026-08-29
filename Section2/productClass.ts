class Product {
  private _id: number;
  private _name: string;
  private _amount: number;
  private _stock: number;

  constructor(id: number, name: string, amount: number, stock: number) {
    this._id = id;
    this._name = name;
    this._amount = amount;
    this._stock = stock;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get stock(): number {
    return this._stock;
  }

  decreaseStock(qty: number) {
    if (this._stock - qty < 0) {
      console.log("not enough quantity");
      return;
    }

    this._stock -= qty;
  }

  increaseStock(qty: number) {
    this._stock += qty;
  }
}

const p1 = new Product(1, "Bat", 2000, 10);

const p2 = new Product(2, "Ball", 50, 20);

const p3 = new Product(3, "sword", 2500, 10);

console.log(p2.name);

p1.decreaseStock(5);

p1.decreaseStock(16);

console.log(p1.stock);

p2.increaseStock(2);

console.log(p2.stock);

p3.increaseStock(3);
console.log(p3.stock);
