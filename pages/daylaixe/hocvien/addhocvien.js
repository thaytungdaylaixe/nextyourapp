import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { DataContext } from "../../../store/GlobalState";

export default function SignUp() {
  const [state, dispatch] = useContext(DataContext);
  const {
    data_hocvien: { hvs },
  } = state;

  const keyUrl =
    "AKfycbxq2EeLB6GX3WFjaPKfjV61dHH8Ttk5vLjOMX0CMp05_IOgK8vzOndoQVg0D18U6DUQ";

  const urlApi = "https://script.google.com/macros/s/" + keyUrl + "/exec";

  useEffect(() => {
    const Submit = async () => {
      //   const dataPost = { action: "addData" };

      const { data } = await axios.get(urlApi, {
        params: { action: "themData", themData: "abc" },
      });

      console.log(data);

      dispatch({
        type: "data_hocvien",
        payload: data,
      });
    };
    Submit();
  }, []);

  return (
    <main>
      {hvs &&
        hvs.map((hocvien) => (
          <p key={hocvien.id}>
            <span>{hocvien.id}</span>
            <span>{hocvien.ho}</span>
            <span>{hocvien.ten}</span>
          </p>
        ))}
    </main>
  );
}
