class Car {
  #private = "private field";

  constructor(name) {
    this.name;
  }

  getPrivate() {
    console.log(this.#private);
  }
}

const car = new Car("BMW");
const copy = { ...car };

copy.getPrivate();
