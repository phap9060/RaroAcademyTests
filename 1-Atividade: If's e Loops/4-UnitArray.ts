function unit(array1: number[], array2: number[]) {
  let result: number[] = [];
  for (let i = 0; i <= array2.length; i++) {
    let inArray = false;
    for (let p = 0; p <= array1.length; p++) {
      if (array2[i] === array1[p]) {
        inArray = true;
        break;
      }
    }
    if (array2[i - 1] !== array2[i] && !inArray) {
      array1[array1.length] = array2[i];
    }
  }
  for (let j = 0; j < array1.length; j++) {
    if (array1[j] !== array1[j - 1]) {
      result[result.length] = array1[j];
    }
  }

  return result;
}
const a = [1, 1, 2, 3, 4, 4, 5, 6];
const b = [4, 4, 4, 5, 6, 7, 8];
console.log(unit(a, b));
