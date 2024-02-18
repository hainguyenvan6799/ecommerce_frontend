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
    // const url = `${productUrl}/insertANewProduct`;
    const url = `${productUrl}`;
    return axiosClient.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  updateProduct: (data, productId) => {
    // const url = `${productUrl}/updateAProduct`;
    const url = `${productUrl}/${productId}`;

    return axiosClient.put(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  deleteProduct: (deletedId) => {
    // const url = `${productUrl}/deleteAProduct/${deletedId}`;
    const url = `${productUrl}/${deletedId}`;
    return axiosClient.delete(url);
  },
};
