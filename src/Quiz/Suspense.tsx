import { Suspense, lazy } from "react";

const fakeDaly = (timeout: number): Promise<void> =>
  new Promise((resolve) => setTimeout(() => resolve(), timeout));

const ChildComponent = () => "child ";

const A = lazy(() => fakeDaly(4000).then(() => ({ default: ChildComponent })));

const B = lazy(() => fakeDaly(1000).then(() => ({ default: ChildComponent })));

const C = lazy(() => fakeDaly(0).then(() => ({ default: ChildComponent })));

export default function SuspenseExaple() {
  return (
    <Suspense fallback="loading">
      <A />
      <B />
      <C />
    </Suspense>
  );
}
