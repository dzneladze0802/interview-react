import { useState } from "react";

export default function ArrayState() {
  const [numbers, setNumbers] = useState([0]);

  const handleNumbers = (): void => {
    setNumbers((prev) => {
      prev.push(1);

      return prev;
    });
  };

  return (
    <>
      {numbers.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
      <button onClick={handleNumbers}>increase numbers</button>
    </>
  );
}
