import { useState, useEffect } from "react";

export default function Filters() {
  const [filters, setFilters] = useState({ category: "all" });

  useEffect(() => {
    console.log("Filters changed:", filters);
  }, [filters]);

  const changeFilter = () =>
    setFilters((prev) => ({ ...prev, category: "new category" }));

  return <button onClick={changeFilter}>Change Filter</button>;
}
