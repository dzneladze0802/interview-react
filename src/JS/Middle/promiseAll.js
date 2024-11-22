function myPromiseAll(arr) {}

const res = Promise.myPromiseAll([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]);

res.then(console.log).catch(console.log);
