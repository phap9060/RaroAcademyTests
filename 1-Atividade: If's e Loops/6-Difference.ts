function difference(array1: number[], array2: number[]) {
  const a = array1;
  const b = array2;
  const c: number[] = [];
  for (let i = 0; i <= a.length - 1; i++) {
    let count = 0;
    for (let p = 0; p <= b.length - 1; p++) {
      if (a[i] !== b[p]) {
        count++;
      }
      if (count === b.length) {
        c[c.length] = a[i];
      }
    }
  }

  return console.log(c);
}
const ar1 = [1, 2, 3, 4, 5, 6];
const ar2 = [4, 4, 5, 6, 7, 8];
difference(ar1, ar2);
