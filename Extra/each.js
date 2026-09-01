"use strict";
const arr = [
    {
        order: 1,
        delay: 1000,
    },
    {
        order: 2,
        delay: 750,
    },
    {
        order: 3,
        delay: 650,
    },
];
function task(order, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order %d and delay %d", order, delay);
            resolve(order);
        }, delay);
    });
}
const promiseArray = [];
for (const item of arr) {
    promiseArray.push(task(item.order, item.delay));
}
Promise.all(promiseArray)
    .then((res) => {
    console.log(res);
})
    .catch((err) => {
    console.log("something went wromg");
});
