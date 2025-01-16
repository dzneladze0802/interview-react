import { useState } from "react";

/* eslint-disable */

export default function Hooks() {
  const conditon = true;

  if (conditon) {
    const [state] = useState(0);

    console.log(state);
  }

  return <div>EXAMPLE</div>;
}
