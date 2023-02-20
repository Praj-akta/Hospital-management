const express = require("express");
const db = require("./db");
const cors = require("cors");

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

// Route to get home route
app.get("/", (req, res) => {
  res.send("Home page");
});

// Route for creating the post
app.post("/api/addUser", (req, res) => {
  const { firstname, lastname, email, address, dob } = req.body;
  db.query(
    "INSERT INTO user_account (first_name, last_name, email, address, dob) VALUES (?,?,?,?,?)",
    [firstname, lastname, email, address, dob],
    (err, result) => {
      if (err) {
        res.status(400).send({ error: err });
      } else {
        res.send({ success: true });
      }
    }
  );
});

app.post("/api/addDoctors", (req, res) => {
  const { name, specialization, email, address, phone, fees } = req.body;
  db.query(
    "INSERT INTO doctors (name, specialization, email, address, phone, fees) VALUES (?,?,?,?,?,?)",
    [name, specialization, email, address, phone, fees],
    (err, result) => {
      if (err) {
        res.status(400).send({ error: err });
      } else {
        res.send({ success: true });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
