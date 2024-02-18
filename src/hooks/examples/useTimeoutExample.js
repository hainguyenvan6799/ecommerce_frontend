import useTimeout from "hooks/useTimeout";
import { useState } from "react";

const TIME_DELAY = 1000;

export default function useTimeoutExample() {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => {
    setCount(0);
  }, TIME_DELAY);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  );
}
