const Razorpay = require("razorpay");

const instance = new Razorpay({
  key_id: "REDACTED_CONFIGURE_LOCALLY",
  key_secret: "REDACTED_CONFIGURE_LOCALLY",
});

module.exports = { instance };
