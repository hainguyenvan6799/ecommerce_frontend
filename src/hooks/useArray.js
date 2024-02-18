import { useState } from "react";

export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue);

  const push = (newElement) => {
    setArray((oldElement) => [...oldElement, newElement]);
  };

  const filter = (callback) => {
    setArray((elements) => elements.filter(callback));
  };

  const update = (index, newElement) => {
    setArray((elements) => [
      ...elements.slice(0, index),
      newElement,
      ...elements.slice(index + 1, elements.length - 1),
    ]);
  };

  const remove = (index) => {
    setArray((elements) => [
      ...elements.slice(0, index),
      ...elements.slice(index + 1, elements.length - 1),
    ]);
  };

  const clear = () => {
    setArray([]);
  };

  return { array, set: setArray, push, filter, update, remove, clear };
}
