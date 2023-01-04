const mongoose = require("mongoose");

const truongthiSchema = new mongoose.Schema(
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
  mongoose.models.truongthi || mongoose.model("truongthi", truongthiSchema);
export default Dataset;
