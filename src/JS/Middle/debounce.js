function debounce(fn, delay) {
  return fn;
}

const result = debounce(console.log, 3000);

result("a");
result("ab");
result("abc");
result("abcd");
