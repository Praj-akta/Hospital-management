import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { db } from "../../firebase";
import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { addDoc, collection } from "firebase/firestore";

function CheckoutForm({ details }) {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?amount=${details.fees}`,
      });
      if (response) {
        setClientSecret(response.data.clientSecret);
      }
    };
    if (details.fees) {
      getClientSecret();
    }
  }, [details.fees]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("clientSecret", clientSecret);
    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        console.log("paymentIntent", paymentIntent);
        addDoc(collection(db, "appointments"), details);
        alert("Appoitnment booked successfully.");
        // navigate("/appointments");
      })
      .catch((e) => {
        console.error("Error inserting data", e);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <PaymentElement />
      <button disabled={!stripe}>Submit</button>
    </form>
  );
}

export default CheckoutForm;
