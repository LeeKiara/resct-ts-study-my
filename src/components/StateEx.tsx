import { useState } from "react";

interface CounterProps {
  initialCount?: number;
}

const handleButtonClick = () => {};

const StateEx: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  // state 정의
  const [count, setCount] = useState<number>(initialCount);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
};

export default StateEx;
