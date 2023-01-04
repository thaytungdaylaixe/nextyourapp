import connectDB from "../../../utils/connectDB";

import sanhocModel from "../../../models/sanhocModel";
import nguonModel from "../../../models/nguonModel";
import truongthiModel from "../../../models/truongthiModel";
import khoathiModel from "../../../models/khoathiModel";

connectDB();

export default async (idGV) => {
  try {
    // query for movies that have a runtime less than 15 minutes
    const query = { idGV: "62e3cd80e33ad6ec6c498c60" };
    const options = {
      // sort returned documents in ascending order by title (A->Z)
      sort: { value: 1 },
    };

    const cursor = await sanhocModel.find(query, options);

    // print a message if no documents were found
    // if ((await cursor.count()) === 0) {
    //   console.log("No documents found!");
    // }
    // replace console.dir with your callback to access individual elements
    await cursor.forEach(console.dir);

    // const rf_token = req.cookies.refreshtoken;
    // if (!rf_token)
    //   return res.json({ info: "error", msg: "Vui lòng đăng nhập lại!" });
    // const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET);
    // if (!result) return res.json({ info: "error", msg: "Token không đúng!" });
    // const giaovien = await Giaoviens.findById(result.id);
    // if (!giaovien)
    //   return res.json({ info: "error", msg: "Tài khoản không tồn tại!!!" });
    // const access_token = createAccessToken({ id: giaovien._id });
    // const refresh_token = createRefreshToken({ id: giaovien._id });
    // res.json({
    //   info: "success",
    //   msg: "Đăng nhập thành công!",
    //   access_token,
    //   refresh_token,
    //   giaovien: {
    //     hovaten: giaovien.hovaten,
    //     sdt: giaovien.sdt,
    //     role: giaovien.role,
    //     avatar: giaovien.avatar,
    //     active: giaovien.active,
    //   },
    // });
  } catch (err) {
    throw err;
  }
};
