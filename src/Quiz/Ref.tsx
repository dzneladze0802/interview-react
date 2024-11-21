import { useEffect, useRef } from "react";

export default function Ref() {
  const ref = useRef({ count: 0 });

  const increase = (): void => {
    ref.current.count += 1;
    console.log(ref.current.count);
  };

  useEffect(() => {
    console.log("changed");
  }, [ref]);

  return <button onClick={increase}>click</button>;
}
