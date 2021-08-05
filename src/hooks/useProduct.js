import { productApi } from "api/productApi";
import { fetchProductsFail, fetchProductsSuccess } from "app/productSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const useProduct = () => {
  const dispatch = useDispatch();

  // using for show detail product
  const { id } = useParams();
  const [detailProduct, setDetailProduct] = useState(null);

  const addProduct = () => {};

  const updateProduct = () => {};

  const removeProduct = () => {};

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { products } = await productApi.getProducts();
        const action = fetchProductsSuccess({ products });
        await dispatch(action);
      } catch (error) {
        dispatch(fetchProductsFail({ error: error.message }));
      }
    };
    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    const productById = async (id) => {
      try {
        const response = await productApi.getProductById(id);
        if (response.success) {
          const { product } = response;
          setDetailProduct(product);
        } else {
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      productById(id);
    }
  }, [id]);

  return {
    detailProduct,
    addProduct,
    updateProduct,
    removeProduct,
  };
};
