import { PATH_NAME } from "configs";
import { useProduct } from "hooks";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar/TopBar";
import "./pages/admin-dashboard.css";
import HomeDashboard from "./pages/HomeDashboard/HomeDashboard";
import NewProduct from "./pages/ManageProducts/AddProduct/NewProduct";
import Product from "./pages/ManageProducts/Product/Product";
import ProductList from "./pages/ManageProducts/ProductList/ProductList";
import UserList from "./pages/ManageUser/UserList";

const AdminDashboardRoute = () => {
  const {
    file,
    setFile,
    products,
    handleRemoveProduct,
    detailProduct,
    handleUpdateProduct,
    setDetailProductId,
    previewImgUrl,
    setPreviewImgUrl,
  } = useProduct();

  return (
    <Router>
      <TopBar />
      <div className="admin-container">
        <SideBar />

        <Switch>
          <Route
            path={PATH_NAME.ADMINDASHBOARD}
            exact
            component={HomeDashboard}
          />

          <Route path={PATH_NAME.ADMIN_USERLIST} component={UserList} />

          {/* <Route
            path={PATH_NAME.ADMIN_PRODUCTLIST}
            component={ManageProductRoute}
          /> */}

          <Route
            path={PATH_NAME.ADMIN_PRODUCTLIST}
            component={() => (
              <ProductList
                products={products}
                handleRemoveProduct={handleRemoveProduct}
              />
            )}
          />

          <Route
            path={PATH_NAME.ADMIN_NEWPRODUCT}
            component={() => <NewProduct />}
          />
          <Route
            path={PATH_NAME.ADMIN_PRODUCTDETAIL}
            component={() => (
              <Product
                file={file}
                previewImgUrl={previewImgUrl}
                setPreviewImgUrl={setPreviewImgUrl}
                setFile={setFile}
                detailProduct={detailProduct}
                handleUpdateProduct={handleUpdateProduct}
                setDetailProductId={setDetailProductId}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AdminDashboardRoute;
