import connectDB from "./connectDB";
import Users from "../models/usersModel";
import jwt from "jsonwebtoken";
import { createAccessToken, createRefreshToken } from "./generateToken";
connectDB();

export default async (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;

    if (!rf_token) return res.json({ error: "Vui lòng đăng nhập lại!" });

    const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET);
    if (!result) return res.json({ error: "Token không đúng!" });

    const user = await Users.findById(result.id);

    if (!user) return res.json({ error: "Tài khoản không tồn tại!!!" });

    const access_token = createAccessToken({ id: user._id });
    const refresh_token = createRefreshToken({ id: user._id });

    return res.json({
      success: "Đăng nhập thành công!",
      access_token,
      refresh_token,
      user: {
        hovaten: user.hovaten,
        sdt: user.sdt,
        role: user.role,
        avatar: user.avatar,
        active: user.active,
      },
    });
  } catch (err) {
    return res.json({ error: err.message });
  }
};
