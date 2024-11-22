Promise.reject(1)
  .then(null, (res) => Promise.reject(res))
  .finally((res) => res + 1)
  .catch(null)
  .finally((res) => Promise.reject(res))
  .catch((res) => {
    res + 1;
  })
  .then((res) => res + 1, null)
  .then(console.log);
