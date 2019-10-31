const express = require("express");
const connectDB = require("./config/db");
const app = express();

//Connection to DB
connectDB();

//Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

app.get("/", (req, res) =>
  res.json({ message: "Welcome to the contact-keeper API..." })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The Server is running on port:: ${PORT} `);
});
