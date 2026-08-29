import { Product } from "./product.js";
export class Cart {
    addProduct(prod, qty) {
        if (Cart.cartArray.length > 0) {
            for (let i = 0; i < Cart.cartArray.length; i++) {
                if (Cart.cartArray[i].product.name === prod.name) {
                    Cart.cartArray[i].quantity += qty;
                    return;
                }
            }
        }
        Cart.cartArray.push({ product: prod, quantity: qty });
    }
    calculateTotalPrice() {
        let total = 0;
        for (const item of Cart.cartArray) {
            total += item.product.price * item.quantity;
        }
        return total;
    }
}
Cart.cartArray = [];
//# sourceMappingURL=cart.js.map