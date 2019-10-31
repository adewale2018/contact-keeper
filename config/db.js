const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log("Connection to DATABASE is SUCCESSFULL");
  } catch (error) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// const connectDB = () => {
//   mongoose
//     .connect(db, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true
//     })
//     .then(() => console.log("Connected to DATABASE"))
//     .catch(err => {
//       console.error(err.message);
//       process.exit(1);
//     });
// };
