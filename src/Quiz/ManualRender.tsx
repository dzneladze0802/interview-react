import { useState } from "react";

export default function ManualRender() {
  const [count, setCount] = useState(10);

  const handleChange = (): void => {
    setCount(20);
  };

  console.log("render");

  return (
    <>
      <input defaultValue={count} />
      <button onClick={handleChange}>Render</button>
    </>
  );
}
