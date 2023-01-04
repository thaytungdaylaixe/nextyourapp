const mongoose = require("mongoose");

const khoathiSchema = new mongoose.Schema(
  {
    idGV: { type: String, required: true },
    value: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
let Dataset =
  mongoose.models.khoathi || mongoose.model("khoathi", khoathiSchema);
export default Dataset;
