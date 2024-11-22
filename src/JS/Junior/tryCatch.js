try {
  Promise.reject("Promise error");
  setTimeout(() => {
    throw new Error("Custom error");
  }, 0);
} catch (err) {
  console.log("catched", err);
}
