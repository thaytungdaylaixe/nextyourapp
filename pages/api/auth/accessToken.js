import connectDB from "../../../utils/connectDB";
import Giaoviens from "../../../models/giaovienModel";
import jwt from "jsonwebtoken";
import {
  createAccessToken,
  createRefreshToken,
} from "../../../utils/generateToken";
connectDB();

export default async (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;

    if (!rf_token)
      return res.json({ info: "error", msg: "Vui lòng đăng nhập lại!" });

    const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET);
    if (!result) return res.json({ info: "error", msg: "Token không đúng!" });

    const giaovien = await Giaoviens.findById(result.id);

    if (!giaovien)
      return res.json({ info: "error", msg: "Tài khoản không tồn tại!!!" });

    const access_token = createAccessToken({ id: giaovien._id });
    const refresh_token = createRefreshToken({ id: giaovien._id });

    res.json({
      info: "success",
      msg: "Đăng nhập thành công!",
      access_token,
      refresh_token,
      giaovien: {
        hovaten: giaovien.hovaten,
        sdt: giaovien.sdt,
        role: giaovien.role,
        avatar: giaovien.avatar,
        active: giaovien.active,
      },
    });
  } catch (err) {
    return res.json({ info: "error", msg: err.message });
  }
};
