const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const DBUrl =
  "REDACTED_CONFIGURE_LOCALLY";

db = () =>
  mongoose
    .connect(DBUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: "admin",
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error.message);
    });

module.exports = db;
