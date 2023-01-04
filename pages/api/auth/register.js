import connectDB from "../utils/connectDB";
import Users from "../models/usersModel";
import { ValidRegister } from "../utils/valid";
import bcrypt from "bcrypt";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  try {
    const { sdt, email, hovaten, password, cf_password } = req.body;

    const errMsg = ValidRegister({
      sdt,
      email,
      hovaten,
      password,
      cf_password,
    });

    console.log(errMsg);

    if (errMsg.countErrors > 0)
      return res.json({ info: "error", msg: "Có lỗi xảy ra!" });

    const findBySdt = await Users.findOne({ sdt });
    if (findBySdt)
      return res.json({ info: "error", msg: "Số điện thoại đã được sử dụng!" });

    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = new Users({
      sdt,
      email,
      hovaten,
      password: passwordHash,
      cf_password,
    });

    console.log(newUser);

    await newUser.save();

    res.json({ info: "success", msg: "Bạn đã đăng ký thành công!" });
  } catch (err) {
    return res.json({ info: "error", msg: err.message });
  }
};
