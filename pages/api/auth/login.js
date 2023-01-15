import connectDB from "../utils/connectDB";
import Users from "../models/usersModel";
import { ValidData } from "../utils/valid";
import { createAccessToken, createRefreshToken } from "../utils/generateToken";
import bcrypt from "bcrypt";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await login(req, res);
      break;
  }
};

const login = async (req, res) => {
  try {
    const { sdt, password } = req.body;

    const errors = ValidData({
      sdt,
      password,
    });

    if (Object.keys(errors).length > 0) {
      return res.json({ errors });
    }

    const user = await Users.findOne({ sdt });
    if (!user) {
      errors["sdt"] = "Số điện thoại chưa được đăng ký!";
      return res.json({ errors });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      errors["password"] = "Mật khẩu không đúng!";
      return res.json({ errors });
    }

    const access_token = createAccessToken({ id: user.id });
    const refresh_token = createRefreshToken({ id: user.id });

    return res.json({
      success: "Đăng nhập thành công!",
      access_token,
      refresh_token,
      user: {
        sdt: user.sdt,
        email: user.email,
        hovaten: user.hovaten,
        role: user.role,
        active: user.active,
      },
    });
  } catch (err) {
    return res.json({ error: err.message });
  }
};
