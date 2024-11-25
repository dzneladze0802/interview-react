import { useState } from "react";

export default function ManualRender() {
  const [count, setCoult] = useState(10);

  const handleChange = (): void => {
    setCoult(20);
  };

  console.log("render");

  return (
    <>
      <input defaultValue={count} />
      <button onClick={handleChange}>Render</button>
    </>
  );
}
