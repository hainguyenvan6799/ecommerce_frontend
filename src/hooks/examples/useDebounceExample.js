import useDebounce from "hooks/useDebounce";
import { useState } from "react";

export default function DebounceExample() {
  const [count, setCount] = useState(10);

  useDebounce(() => alert(count), 1000, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((number) => number + 1)}>
        Increment
      </button>
    </div>
  );
}
