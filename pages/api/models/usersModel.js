const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    sdt: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    hovaten: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "HV",
    },
    active: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/nghttung/image/upload/v1642992951/nextapp/pngegg_xsxyqp.png",
    },
  },
  {
    timestamps: true,
  }
);
let Dataset = mongoose.models.user || mongoose.model("user", userSchema);
export default Dataset;
