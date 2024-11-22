interface Dog {
  name: "dog";
  canSwim: true;
}

interface Cat {
  name: "cat";
  canSwim: false;
}

interface Bird {
  name: "bird";
  canSwim: false;
}

interface Fish {
  name: "fish";
  canSwim: true;
}

export type Animal = Fish | Cat | Dog | Bird;

export type Result = never;
