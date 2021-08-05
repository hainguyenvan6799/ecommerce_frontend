import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { paymentApi } from "api/paymentApi";
import { clearCart } from "app/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useCart } from "./useCart";

export const usePayment = () => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { price, discount } = useCart();
  const dispatch = useDispatch();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const creaetPaymentIntent = async () => {
      const response = await paymentApi.createPaymentIntent({
        items: [{ id: "xl-tshirt" }],
        totalPay: price - discount,
      });
      setClientSecret(response.clientSecret);
    };
    if (price > 0) {
      creaetPaymentIntent();
    }
  }, [discount, price]);

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      const action = clearCart();
      dispatch(action);
    }
  };

  return {
    succeeded,
    error,
    processing,
    disabled,
    clientSecret,
    handleChange,
    handleSubmit,
    stripe,
  };
};
