const mongoose = require("mongoose");

const sanhocSchema = new mongoose.Schema(
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
let Dataset = mongoose.models.sanhoc || mongoose.model("sanhoc", sanhocSchema);
export default Dataset;
