interface IProduct {
  id: string; // 1
  title: string; // coffe | milk | sugar
}

interface IUser {
  id: string; // 2
  name: string;
  age: number;
}

interface IComment {
  id: string; // 3
  body: string; // tasty coffe!
  userId: string; // 2
  productId: string; // 1
}

interface IProductToShowComment {
  id: string; // comment id -> 3
  body: string; // comment boddy tasty -> tasty coffe!
  user: IUser;
}

interface IProductToShow {
  id: string; // product id ->  1
  title: string; // product title -> coffe
  comments: IProductToShowComment[];
}

function mergeArrays({
  comments,
  products,
  users,
}: {
  comments: IComment[];
  products: IProduct[];
  users: IUser[];
}): IProductToShow[] {
  const result: IProductToShow[] = [];
  console.log(comments, products, users);

  return result;
}

const products: IProduct[] = [
  { id: "1", title: "Coffee" },
  { id: "2", title: "Milk" },
  { id: "3", title: "Sugar" },
];

const users: IUser[] = [
  { id: "1", name: "Alice", age: 25 },
  { id: "2", name: "Bob", age: 30 },
  { id: "3", name: "Charlie", age: 22 },
];

const comments: IComment[] = [
  { id: "1", body: "Tasty coffee!", userId: "1", productId: "1" },
  { id: "2", body: "Milk is fresh!", userId: "2", productId: "2" },
  { id: "3", body: "Sweet sugar!", userId: "3", productId: "3" },
  { id: "4", body: "I love coffee too!", userId: "2", productId: "1" },
];

console.log(mergeArrays({ comments, products, users }));
