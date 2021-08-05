export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "https://ecommerce-backend-nodejs.herokuapp.com/api";

export const serverHost =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://ecommerce-backend-nodejs.herokuapp.com";
