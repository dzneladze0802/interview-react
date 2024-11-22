class A {
  name = "john";

  constructor() {
    console.log(this.name);
  }
}

class B extends A {
  name = "Bob";
}

new A();
new B();
