import { Product } from "./product.js";
import { Cart } from "./cart.js";

const bat = new Product("bat", 2000);
const ball = new Product("ball", 50);
const sword = new Product("sword", 2000);
const book = new Product("book", 500);

const cart = new Cart();

cart.addProduct(bat, 2);
cart.addProduct(ball, 5);
cart.addProduct(sword, 3);
cart.addProduct(book, 10);

console.log(cart.calculateTotalPrice());
