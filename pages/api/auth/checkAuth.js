import connectDB from "../../../utils/connectDB";
import Giaoviens from "../../../models/giaovienModel";
import jwt from "jsonwebtoken";

connectDB();

export default async (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;

    if (!rf_token) return null;

    const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET);
    if (!result) null;

    const giaovien = await Giaoviens.findById(result.id);

    if (!giaovien) return null;

    return giaovien._id;
  } catch (err) {
    return null;
  }
};
