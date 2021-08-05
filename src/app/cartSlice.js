const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload.product;

      const indexExistItem = state.cartItems.findIndex(
        (product) => product.id === item.id
      );
      if (indexExistItem !== -1) {
        state.cartItems[indexExistItem] = {
          ...item,
          itemQuantity: state.cartItems[indexExistItem].itemQuantity + 1,
        };
        return;
      }

      state.cartItems.push({ ...item, itemQuantity: 1 });
    },
    updateItemFromCart: (state, action) => {},
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.productId
      );
    },
    updateQuantityOfItem: (state, action) => {
      const { id, quantity } = action.payload;
      const indexItem = state.cartItems.findIndex((item) => item.id === id);
      state.cartItems[indexItem].itemQuantity += quantity;
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

const { reducer, actions } = cartSlice;
export const {
  addItemToCart,
  updateItemFromCart,
  removeItemFromCart,
  updateQuantityOfItem,
  clearCart,
} = actions;
export default reducer;
