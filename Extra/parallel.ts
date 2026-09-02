function parallelCall() {
  const tasks = [
    task(1, Math.floor(Math.random() * 1000)),
    task(2, Math.floor(Math.random() * 1000)),
    task(3, Math.floor(Math.random() * 1000)),
  ];

  Promise.all(tasks)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log("something went wrong");
    });
}

function parallelCall2() {
  task(1, Math.floor(Math.random() * 1000)).then((result) => {
    console.log(result);
  });
  task(2, Math.floor(Math.random() * 1000)).then((result) => {
    console.log(result);
  });
  task(3, Math.floor(Math.random() * 1000)).then((result) => {
    console.log(result);
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

// parallelCall();
parallelCall2();
