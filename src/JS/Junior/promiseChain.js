function plusOne(arg) {
  return arg + 1;
}

Promise.reject(1)
  .then(plusOne)
  .catch(plusOne)
  .finally(plusOne)
  .catch(plusOne)
  .then(plusOne)
  .finally(plusOne)
  .then(console.log);
