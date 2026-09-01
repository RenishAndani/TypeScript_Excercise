function seriesCall() {
  return task(1, 1 * 1000)
    .then((result1) => {
      return task(2, 5 * 1000);
    })

    .then((result2) => {
      return task(3, 3 * 1000);
    })

    .then((result3) => {
      console.log("Finished");
    })

    .catch((error) => {
      console.error(error);
    });
}

function task(order: number, delay: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order %d and delay %d", order, delay);

      resolve(order);
    }, delay);
  });
}

seriesCall();
