function throttle(fn, delay) {
  return fn;
}

const result = throttle(console.log, 3000);

result("a");
result("ab");
result("abc");
result("abcd");
