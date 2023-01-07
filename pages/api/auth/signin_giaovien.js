import connectDB from "../../../utils/connectDB";
import Giaoviens from "../../../models/giaovienModel";
import { ValidDangNhap } from "../../../utils/valid";

import bcrypt from "bcrypt";
import {
  createAccessToken,
  createRefreshToken,
} from "../../../utils/generateToken";

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

    const errMsg = ValidDangNhap({ sdt, password });

    if (errMsg.countErrors > 0)
      return res.json({ info: "error", msg: "Có lỗi xảy ra!" });

    const giaovien = await Giaoviens.findOne({ sdt });

    if (!giaovien)
      return (
        res
          // .status(400)
          .json({ info: "error", msg: "Số điện thoại chưa được đăng ký!" })
      );

    const isMatch = await bcrypt.compare(password, giaovien.password);
    if (!isMatch)
      return (
        res
          // .status(400)
          .json({ info: "error", msg: "Mật khẩu không đúng!" })
      );

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
