function logestWord(s: string): string {
  const sarrr: string[] = s.split(" ");

  let max: string = "";

  if (s.length > 0) {
    max = sarrr[0]!;
  } else {
    return "";
  }

  for (const s of sarrr) {
    if (s.length > max.length) {
      max = s;
    }
  }

  return max;
}

let s: string = "Jon snow the king in the north";

console.log(logestWord(s));
