const PATH_NAME = {
  // test
  NOTE: "/test/notes",

  ROOT: "/",
  ERROR_404: "/404",
  //   DASHBOARD: '/dashboard',
  PLAY_BACKGROUND: "/playbackground",
  LOGIN: "/login",
  PRODUCT: "/product",
  CART: "/cart",
  CHAT: "/chat",
  TEST: "/test",
  PAYMENT: "/payment",
  PRODUCT_LIST: "/product/list",
  PRODUCT_ADD: "/product/add",
  USERS: "/users",
  KANBAN: "/kanban",
  NOTFOUND: "/notfound",
  ADMINDASHBOARD: "/admin-dashboard",
  ADMIN_USERLIST: "/admin-dashboard/user-list",

  ADMIN_PRODUCTLIST: "/admin-dashboard/products",
  ADMIN_NEWPRODUCT: "/admin-dashboard/newProduct",
  ADMIN_PRODUCTDETAIL: "/admin-dashboard/product/:id",
  ADMIN_LINKTOPRODUCTDETAIL: (productId) =>
    `/admin-dashboard/product/${productId}`,
};

export { PATH_NAME };
