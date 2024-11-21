import { useState, memo } from "react";

const SlowList = memo(function SlowList({ text }: { text: string }) {
  console.log("[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />");
  const items = [];

  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} id={i} text={text} />);
  }
  return <ul className="items">{items}</ul>;
});

function SlowItem({ text, id }: { text: string; id: number }) {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li className="item">
      {id} {text}
    </li>
  );
}

export default function SlowListExample() {
  const [text, setText] = useState("");

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={text} />
    </>
  );
}
