const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51KZmoiEeA9WPxX06tcvy2oHZIDSwHmxLHBKyFjwjjfsogVNWQ7soqUDecuS9fJkqKN0okZo4tdwSGN2lQYJZgsWh00FWdTEzLT"
);

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// api routes
app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("total_______", total);
  const paymentIntent = await stripe.paymentIntents.create({
    currency: "cad",
    amount: parseInt(total),
  });
  console.log("paymentIntent_______", paymentIntent);
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);
