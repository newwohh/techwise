const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "REDACTED_CONFIGURE_LOCALLY",
  api_key: "REDACTED_CONFIGURE_LOCALLY",
  api_secret: "REDACTED_CONFIGURE_LOCALLY",
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

module.exports = { cloudinary, opts };
