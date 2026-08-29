function fun1(s: string, fn: () => void) {
  console.log(s);

  fn();
}

function fun2() {
  console.log("Hello World!");
}

fun1("Prominent pixel", fun2);
