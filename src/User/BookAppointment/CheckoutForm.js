import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { db } from "../../firebase";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { addDoc, collection } from "firebase/firestore";

function CheckoutForm({ details }) {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const base_url =
      "http://127.0.0.1:5001/hospital-management-6b160/us-central1/api";
    const getClientSecret = async () => {
      const { data } = await axios({
        method: "post",
        url: `${base_url}/payment/create`,
        data: {
          amount: details.fees,
        },
      });
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      }
    };
    if (details.fees) {
      getClientSecret();
    }
  }, [details.fees]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const stringClientSecret = clientSecret.toString();
    console.log(elements.getElement(PaymentElement));

    await stripe
      .confirmCardPayment(stringClientSecret, {
        payment_method: {
          card: elements.getElement(PaymentElement),
          billing_details: {
            name: "Jenny Rosen",
          },
        },
      })
      .then(({ paymentIntent }) => {
        console.log("paymentIntent", paymentIntent);
        if (paymentIntent) {
          addDoc(collection(db, "appointments"), details);
          alert("Appoitnment booked successfully.");
          setSucceeded(true);
          setProcessing(false);
          // navigate("/appointments");
        }
      })
      .catch((e) => {
        console.error("Error inserting data", e);
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : null);
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2 className="mb-5"> Your total is: ${details.fees}</h2>
      <PaymentElement onChange={handleChange} />
      <button disabled={processing || succeeded || disabled}>
        <span> {processing ? <p>Processing</p> : "Pay now"} </span>
      </button>
      {error && <div>{error}</div>}
    </form>
  );
}

export default CheckoutForm;
