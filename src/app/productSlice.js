const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  products: [],
  loading: true,
  error: "",
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    fetchProductsSuccess: (state, action) => {
      state.products = action.payload.products;
      state.loading = false;
    },
    fetchProductsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    setError: (state, action) => {},
  },
});

const { reducer, actions } = productSlice;
export const { fetchProductsSuccess, fetchProductsFail, setError } = actions;
export default reducer;
