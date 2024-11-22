class Singleton {}

const a = new Singleton();

const b = new Singleton();

console.log(a === b); // true
