const mongoose = require("mongoose");

const nguonSchema = new mongoose.Schema(
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
let Dataset = mongoose.models.nguon || mongoose.model("nguon", nguonSchema);
export default Dataset;
