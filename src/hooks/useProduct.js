import { productApi } from "api/productApi";
import {
  addNewProduct,
  updateProduct,
  deleteProduct,
  fetchProductsFail,
  fetchProductsSuccess,
} from "app/productSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useProduct = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  // using for show detail product
  const [detailProductId, setDetailProductId] = useState(null);
  const [detailProduct, setDetailProduct] = useState(null);

  const addProduct = async (data) => {
    const newProduct = await productApi.addNewProduct(data);

    if (newProduct.success) {
      const action = addNewProduct({ newProduct: newProduct.product });
      await dispatch(action);
    }
  };

  const handleUpdateProduct = async (data) => {
    const updatedProduct = await productApi.updateProduct(data);
    if (updatedProduct.success) {
      console.log(updatedProduct.product);
      const action = updateProduct({ updatedProduct: updatedProduct.product });
      await dispatch(action);
    }
  };

  const handleRemoveProduct = async (productId) => {
    const response = await productApi.deleteProduct(productId);
    if (response.success) {
      const action = deleteProduct({ deletedProductId: productId });
      await dispatch(action);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { products } = await productApi.getProducts();
        const newProducts = products.map((product) => {
          return {
            id: product._id,
            ...product,
          };
        });
        setProducts((prev) => [...prev, ...newProducts]);
        const action = fetchProductsSuccess({ products });
        await dispatch(action);
      } catch (error) {
        dispatch(fetchProductsFail({ error: error.message }));
      }
    };
    fetchProducts();

    return () => {
      console.log("đang un mount");
      setProducts([]);
    };
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

    if (detailProductId) {
      productById(detailProductId);
    }
  }, [detailProductId]);

  return {
    products,
    detailProduct,
    addProduct,
    handleUpdateProduct,
    handleRemoveProduct,
    setDetailProductId,
  };
};
