const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({ message: "Welcome to the contact-keeper API..." })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The Server is running on port:: ${PORT} `);
});
