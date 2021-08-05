import { useState } from "react";
import { useSelector } from "react-redux";

export const useSearch = () => {
  const [text, setText] = useState("");
  const { products } = useSelector((state) => state.product);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
    setOpen(false);
  };

  const handleCloseSearch = () => {
    setOpen(true);
  };

  return {
    open,
    text,
    products,
    handleChange,
    handleCloseSearch,
  };
};
