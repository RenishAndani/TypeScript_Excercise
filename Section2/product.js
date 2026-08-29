"use strict";
const products = [
    { name: "Mobile", stock: 3, original: 4000 },
    { name: "Laptop", stock: 1, original: 10000, discount: 0.1 },
    { name: "Mouse", stock: 4, original: 299.99 },
    { name: "Keyboard", stock: 1, original: 299.99, discount: 0.8 },
    { name: "Headphone", stock: 2, original: 199.99, discount: 0.65 },
];
function calculateSalePriceAndTotals(products) {
    const ans = [];
    for (const obj of products) {
        if (Object.hasOwn(obj, "discount")) {
            let sale = obj.original * (1 - obj.discount);
            let total = sale * obj.stock;
            ans.push({ ...obj, sale: sale, total: total });
        }
        else {
            ans.push({ ...obj, sale: obj.original, total: obj.original * obj.stock });
        }
    }
    return ans;
}
console.log(calculateSalePriceAndTotals(products));
