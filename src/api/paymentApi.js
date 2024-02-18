const { apiUrl } = require("./apiUrl");
const { default: axiosClient } = require("./axiosClient");

const paymentUrl = `${apiUrl}/payment`;

export const paymentApi = {
  createPaymentIntent: (data) => {
    // const url = `${paymentUrl}/create-payment-intent`;
    const url = `${paymentUrl}`;

    return axiosClient.post(url, data);
  },
};
