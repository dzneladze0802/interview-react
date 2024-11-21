import { useState } from "react";

const fakeDaly = (): Promise<void> =>
  new Promise((resolve) => setTimeout(() => resolve(), 1000));

export default function Batching() {
  const [s, setS] = useState(0);

  const handler = async (): Promise<void> => {
    setS(1);
    await fakeDaly();
    setS(2);
    setS(3);
    await fakeDaly();
    setS(4);
  };

  console.log("render");

  return (
    <>
      <button onClick={handler}>click</button>
      {s}
    </>
  );
}
