Promise.resolve(1).then(console.log);

setTimeout(() => {
  console.log(2);
});

new Promise((res, rej) => {
  console.log(3);
  res(4);
}).then(console.log);

console.log(5);
