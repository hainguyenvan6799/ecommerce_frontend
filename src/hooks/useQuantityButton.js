import { updateQuantityOfItem } from "app/cartSlice";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useQuantityButton = () => {
  // const [counter, setCounter] = useState(1);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleIncrement = (idItem) => {
    // setCounter((counter) => counter + 1);
    const action = updateQuantityOfItem({ id: idItem, quantity: 1 });
    dispatch(action);
  };

  const handleDecrement = (idItem) => {
    // setCounter((counter) => counter - 1);
    const action = updateQuantityOfItem({ id: idItem, quantity: -1 });
    dispatch(action);
  };

  const getQuantityOfItem = (idItem) => {
    const cart = [...cartItems];
    const index = cart.findIndex((item) => item.id === idItem);
    return cart[index].itemQuantity;
  };

  return {
    // counter,
    getQuantityOfItem,
    handleIncrement,
    handleDecrement,
  };
};
