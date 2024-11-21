import { useEffect, useLayoutEffect, useInsertionEffect } from "react";

function Child() {
  console.log("child");

  useInsertionEffect(() => {
    console.log("useInsertion child");

    return () => {
      console.log("useInsertion child unmount");
    };
  }, []);

  useLayoutEffect(() => {
    console.log("useLayout child");

    return () => {
      console.log("useLayout child unmount");
    };
  }, []);

  useEffect(() => {
    console.log("useEffect child");

    return () => {
      console.log("useEffect child unmount");
    };
  }, []);

  return null;
}

export default function CallStack() {
  console.log("parent");

  useLayoutEffect(() => {
    console.log("useLayout parent");

    return () => {
      console.log("useLayout parent unmount");
    };
  }, []);

  useEffect(() => {
    console.log("useEffect parent");

    return () => {
      console.log("useEffect parent unmount");
    };
  }, []);

  return <Child />;
}
