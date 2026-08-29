function unique(s: string): string {
  let out: string = "";

  if (s.length > 0) {
    out = s[0]!;
  } else {
    return "";
  }

  // while (s.length > 0) {
  //   if (out.includes(s[0])) {
  //     s = s.slice(1);
  //   } else {
  //     out = out + s[0];
  //     s = s.slice(1);
  //   }
  // }

  for (let i = 1; i < s.length; i++) {
    if (out.includes(s[i]!)) {
    } else {
      out += s[i]!;
    }
  }

  return out;
}

console.log(unique("ProminentPixel"));
