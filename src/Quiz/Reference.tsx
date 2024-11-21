/* eslint-disable */

import { useState, useEffect } from "react";

function Child({ count }: { count: number }) {
  const [localCount, setLocalCount] = useState(0);

  const handler = (prop: number): void => {
    setLocalCount((prev) => prev + prop);
  };

  useEffect(() => {
    handler(count);
  }, [handler, count]);

  return localCount;
}

export default function Reference() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(2);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [setCount]);

  return <Child count={count} />;
}
