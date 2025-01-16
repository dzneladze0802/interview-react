function bubleSort(arr: number[]): number[] {
  const copy: number[] = [...arr];
  const result: number[] = [];

  while (copy.length) {
    const bigger = { index: 0, value: copy[0] };

    copy.forEach((number, index) => {
      if (number > bigger.value) {
        bigger.index = index;
        bigger.value = number;
      }

      if (index === copy.length - 1) {
        result.push(bigger.value);
        copy.splice(1, bigger.index);
      }
    });
  }

  return result;
}

console.log(bubleSort([1, -22, 3, 44, 2, 12, 3, 13, 1]));
