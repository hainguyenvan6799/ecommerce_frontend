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
        "Content-Type": "application/json",
      },
    });
  },

  updateProduct: (data) => {
    const url = `${productUrl}/updateAProduct`;
    return axiosClient.put(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  deleteProduct: (deletedId) => {
    const url = `${productUrl}/deleteAProduct/${deletedId}`;
    return axiosClient.delete(url);
  },
};
