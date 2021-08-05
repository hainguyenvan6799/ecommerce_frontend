import { productApi } from "api/productApi";
import { addItemToCart, removeItemFromCart } from "app/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const useCart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const getProductById = async (id) => {
    try {
      const response = await productApi.getProductById(id);
      if (response.success) {
        return response.product;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  const shopNow = () => {
    history.push("/");
  };

  const addProductToCart = async (id) => {
    const product = await getProductById(id);
    if (product) {
      const action = addItemToCart({ product });
      dispatch(action);
    }
  };

  const removeProductFromCart = (id) => {
    const action = removeItemFromCart({ productId: id });
    dispatch(action);
  };

  useEffect(() => {
    const totalAmount = () => {
      let price = 0,
        discount = 0;
      cartItems.map((item) => {
        price += item.price.mrp * item.itemQuantity;
        discount += (item.price.mrp - item.price.cost) * item.itemQuantity;
        return true;
      });
      setPrice(price);
      setDiscount(discount);
    };

    totalAmount();
  }, [cartItems]);

  return {
    price,
    discount,
    shopNow,
    addProductToCart,
    removeProductFromCart,
  };
};
