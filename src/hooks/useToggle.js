import { useState } from "react";

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = () => {
    setValue(!value);
  };

  return [value, toggleValue];
}
