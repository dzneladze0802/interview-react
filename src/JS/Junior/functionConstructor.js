function A(name) {
  this.name = name;

  return { name: "john" };
}

function B(name) {
  this.name = name;

  return "john";
}

const instanceA = new A("bob");
const instanceB = new B("bob");

console.log(instanceA, instanceB);
