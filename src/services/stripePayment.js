import { loadStripe } from "@stripe/stripe-js";
export const promise = loadStripe(`${process.env.REACT_APP_STRIPE_CLIENT_KEY}`);
