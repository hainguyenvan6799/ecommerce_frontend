import { PATH_NAME } from "configs";
import { useProduct } from "hooks";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewProduct from "./AddProduct/NewProduct";
import Product from "./Product/Product";
import ProductList from "./ProductList/ProductList";

function ManageProductRoute() {
  const {
    products,
    addProduct,
    handleRemoveProduct,
    detailProduct,
    handleUpdateProduct,
    setDetailProductId,
  } = useProduct();
  return (
    <Router>
      <Switch>
        <Route
          path={PATH_NAME.ADMIN_PRODUCTLIST}
          exact
          component={() => (
            <ProductList
              products={products}
              handleRemoveProduct={handleRemoveProduct}
            />
          )}
        />
        <Route
          path={PATH_NAME.ADMIN_NEWPRODUCT}
          component={() => <NewProduct addProduct={addProduct} />}
        />
        <Route
          path={PATH_NAME.ADMIN_PRODUCTDETAIL}
          component={() => (
            <Product
              detailProduct={detailProduct}
              handleUpdateProduct={handleUpdateProduct}
              setDetailProductId={setDetailProductId}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default ManageProductRoute;
