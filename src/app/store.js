import testReducer from "features/Test/testSlice";
import authReducer from "./authSlice";
import productReducers from "./productSlice";
import cartReducers from "./cartSlice";

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  test: testReducer,
  auth: authReducer,
  product: productReducers,
  cart: cartReducers,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
