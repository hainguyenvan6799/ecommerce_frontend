import { Elements } from "@stripe/react-stripe-js";
import React from 'react';
import { promise as stripePromise } from 'services';
import CheckoutForm from '../components/CheckoutForm';

function PaymentPage() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}

export default PaymentPage
