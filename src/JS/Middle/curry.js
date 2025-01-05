function curry() {
  let count = 0;
}

console.log(curry()); // 0
console.log(curry(2)()); // 2
console.log(curry(1)(2)(3)()); // 5
