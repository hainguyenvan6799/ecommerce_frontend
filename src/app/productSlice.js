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
    addNewProduct: (state, action) => {
      const newProduct = action.payload.newProduct;
      state.products.push(newProduct);
    },
    updateProduct: (state, action) => {
      const updatedProduct = action.payload.updatedProduct;
      const productIndex = state.products.findIndex(
        (product) => product._id === updatedProduct._id
      );
      state.products[productIndex] = updatedProduct;
    },
    deleteProduct: (state, action) => {
      const deletedProductId = action.payload.deletedProductId;
      state.products = state.products.filter(
        (product) => product._id !== deletedProductId
      );
    },
  },
});

const { reducer, actions } = productSlice;
export const {
  fetchProductsSuccess,
  fetchProductsFail,
  setError,
  addNewProduct,
  updateProduct,
  deleteProduct,
} = actions;
export default reducer;
