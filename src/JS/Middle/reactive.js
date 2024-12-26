// Your task is to implement functionality so that whenever the `name` property of the object
// is updated, the `nameChanged` property automatically increments by 1.

const obj = {
  name: "john",
  nameChanged: 0,
};

obj.name = "bob";

obj.name = "martin";

console.log(obj.nameChanged); // 2
