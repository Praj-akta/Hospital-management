const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

// Route to get home route
app.get("/", (req, res) => {
  res.send("Home page")
});

// Route for creating the post
app.post("/api/addUser", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const address = req.body.address;
  const dob = req.body.dob;
  const password = req.body.password;


  db.query(
    "INSERT INTO user_account (first_name, last_name, email, address, dob, password) VALUES (?,?,?)",
    [firstname, lastname, email, address, dob, password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
