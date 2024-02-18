import testReducer from "features/Test/testSlice";
import authReducer from "./authSlice";
import productReducers from "./productSlice";
import cartReducers from "./cartSlice";
import noteReducer from "test/reducers/Note";

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  test: testReducer,
  auth: authReducer,
  product: productReducers,
  cart: cartReducers,
  notes: noteReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
