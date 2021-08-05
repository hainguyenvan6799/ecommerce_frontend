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
};
