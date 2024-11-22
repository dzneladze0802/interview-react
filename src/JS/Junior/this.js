const obj = {
  simpleMethod() {
    console.log(this === obj, 1);
  },

  arrow: () => {
    console.log(this === obj, 2);
  },

  hardMethod() {
    const arrFunc = () => {
      console.log(this === obj, 3);
    };

    arrFunc();
  },
};

obj.simpleMethod();
obj.arrow();
obj.hardMethod();
