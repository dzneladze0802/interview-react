import { useState, memo } from "react";

function Child({ onStress }: { onStress: () => void }) {
  console.log("render");

  return <button onClick={onStress}>click</button>;
}

const MemoizedChildren = memo(Child);

export default function Memo() {
  const [count, setCounter] = useState(0);

  const handler = (): void => {
    setCounter((p) => p + 1);
  };

  return (
    <>
      <MemoizedChildren onStress={handler} />
      {count}
    </>
  );
}
