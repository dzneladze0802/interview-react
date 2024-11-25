import { useState } from "react";

export default function RemoveElem() {
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  const handleRemoveElem = (index: number): void => {
    setList((prev) => {
      prev.splice(index, 1);

      return [...prev];
    });
  };

  console.log("render");

  return list.map((item, index) => (
    <div key={index}>
      <input defaultValue={item} />
      <button onClick={() => handleRemoveElem(index)}>Remove</button>
    </div>
  ));
}
