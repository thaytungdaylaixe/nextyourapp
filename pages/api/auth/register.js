import connectDB from "../utils/connectDB";
import Users from "../models/usersModel";
import { ValidData } from "../utils/valid";
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

    const errors = ValidData({
      sdt,
      email,
      hovaten,
      password,
      cf_password,
    });

    if (Object.keys(errors).length > 0) {
      return res.json({ errors });
    }

    const findBySdt = await Users.findOne({ sdt });
    if (findBySdt) return res.json({ errors });

    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = new Users({
      sdt,
      email,
      hovaten,
      password: passwordHash,
      cf_password,
    });

    await newUser.save();

    res.json({ success: "Bạn đã đăng ký thành công!" });
  } catch (err) {
    return res.json({ errors: err.message });
  }
};
