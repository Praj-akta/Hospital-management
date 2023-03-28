import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Sidebar from "../../components/Dashboard/Sidebar";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";

function Payment() {
  const stripePromise = loadStripe(
    "pk_test_51KZmoiEeA9WPxX06byl7DZ5Yt96yZgVuumXyb4uJn3Zvandp9FWLni0ypqPEK8lD2OaFh6i6zKMzEuPYSlYqoG5J00Uosou5PA"
  );
  const options = {
    mode: "payment",
    amount: 200,
    currency: "cad",
  };

  return (
    <div className="admin-dashboard user-dashboard">
      <Sidebar />
      <div className="admin-header">
        <DashboardHeader />
        <div className="content">
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
}

export default Payment;
