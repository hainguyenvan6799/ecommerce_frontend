export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "https://ecommerce-backend-mern.herokuapp.com/api";

export const serverHost =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://ecommerce-backend-mern.herokuapp.com";
