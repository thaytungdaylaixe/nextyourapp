import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../../store/GlobalState";

import Box from "@mui/material/Box";
import style from "./Layout.module.css";

export default function BottomBar() {
  const [state, dispatch] = useContext(DataContext);
  const { ketqua } = state;

  const [dung, setDung] = useState([]);
  const [sai, setSai] = useState([]);

  useEffect(() => {
    let cdung = [];
    let csai = [];

    for (const k in ketqua) {
      if (ketqua[k] === 1) cdung = [...cdung, k];
      if (ketqua[k] === 0) csai = [...csai, k];
    }

    setDung(cdung);
    setSai(csai);
  }, [ketqua]);

  const caudung = () => {};

  return (
    <Box component="div" className={style.bottombar}>
      Đúng {dung.length}, Sai {sai.length} câu.
    </Box>
  );
}
