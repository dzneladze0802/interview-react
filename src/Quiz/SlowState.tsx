import { useState } from "react";

interface IPriceItem {
  id: number;
  label: string;
  price: number;
  amount: number;
}

const generateData = (): IPriceItem[] => {
  const result: IPriceItem[] = [];

  for (let i = 0; i < 50000; i++) {
    result.push({
      label: `Label number: ${i}`,
      id: i,
      price: Math.floor(Math.random() * 100),
      amount: Math.floor(Math.random() * 100),
    });
  }

  return result;
};

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} />;
}

export default function SlowState() {
  const [localData, setLocalData] = useState(() => generateData());

  const handlePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ): void => {
    setLocalData((prev) => {
      const target = prev.find((item) => item.id === id);

      if (target) {
        target.price = Number(event.target.value);
      }

      return [...prev];
    });
  };

  const handleAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ): void => {
    setLocalData((prev) => {
      const target = prev.find((item) => item.id === id);

      if (target) {
        target.amount = Number(event.target.value);
      }

      return [...prev];
    });
  };

  const handleDataUpdate = async () => {
    return Promise.resolve(localData);
  };

  return (
    <>
      <button onClick={handleDataUpdate}>Update data</button>
      {localData.map(({ label, price, amount, id }) => (
        <div key={id}>
          <h2>{label}</h2>
          <Input value={price} onChange={(e) => handlePriceChange(e, id)} />
          <Input value={amount} onChange={(e) => handleAmountChange(e, id)} />
        </div>
      ))}
      ;
    </>
  );
}
