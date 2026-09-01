function waterfall(): Promise<void> {
  return Promise.resolve(0)
    .then((total) => {
      const add = 5;
      const newTotal = total + add;
      console.log("%d + %d = %d", total, add, newTotal);

      return newTotal;
    })
    .then((total) => {
      const add = 2;
      const newTotal = total + add;
      console.log("%d + %d = %d", total, add, newTotal);

      return newTotal;
    })
    .then((total) => {
      const add = 3;
      const newTotal = total + add;
      console.log("Final total:", newTotal);
    });
}

waterfall();
