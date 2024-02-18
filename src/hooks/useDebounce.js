import { useEffect } from "react";
import useTimeout from "./useTimeout";

export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, delay, reset]);
  useEffect(clear, [clear]);
}
