import { Product } from "../product.js";

interface cart {
  product: Product;
  quantity: number;
}

export class Cart {
  private static cartArray: cart[] = [];

  addProduct(prod: Product, qty: number): void {
    if (Cart.cartArray.length > 0) {
      for (let i = 0; i < Cart.cartArray.length; i++) {
        if (Cart.cartArray[i]!.product.name === prod.name) {
          Cart.cartArray[i]!.quantity += qty;
          return;
        }
      }
    }

    Cart.cartArray.push({ product: prod, quantity: qty });
  }

  calculateTotalPrice(): number {
    let total: number = 0;

    for (const item of Cart.cartArray) {
      total += item.product.price * item.quantity;
    }

    return total;
  }
}
