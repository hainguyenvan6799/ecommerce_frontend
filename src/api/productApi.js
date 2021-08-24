import axiosClient from "./axiosClient";

const { apiUrl } = require("./apiUrl");

const productUrl = `${apiUrl}/products`;

export const productApi = {
  getProducts: () => {
    const url = `${productUrl}`;
    return axiosClient.get(url);
  },
  getProductById: (productId) => {
    const url = `${productUrl}/${productId}`;
    return axiosClient.get(url);
  },
  addNewProduct: (data) => {
    const url = `${productUrl}/insertANewProduct`;
    return axiosClient.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  updateProduct: (data) => {
    const url = `${productUrl}/updateAProduct`;
    return axiosClient.put(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  deleteProduct: (deletedId) => {
    const url = `${productUrl}/deleteAProduct/${deletedId}`;
    return axiosClient.delete(url);
  },
};
