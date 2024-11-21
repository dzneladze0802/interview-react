import { useState, useEffect } from "react";

function Child({ count }: { count: number }) {
  const [localCount] = useState(() => {
    return count + 1;
  });

  return <>count: {localCount}</>;
}

export default function Observer() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(20);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <Child count={count} />;
}
