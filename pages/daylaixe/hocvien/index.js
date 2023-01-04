import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { DataContext } from "../../../store/GlobalState";

export default function SignUp() {
  const [state, dispatch] = useContext(DataContext);
  const {
    data_hocvien,
    data_hocvien: { hvs },
  } = state;

  useEffect(() => {
    const Submit = async () => {
      const { data } = await axios.get(
        `https://script.google.com/macros/s/AKfycbzMVt97kyWqMsooLp5bAPRWjPKcNq4oN9Q5YQ8vLO5Ii63nYWaVzcvg6oVWZTHKvNg7/exec`
      );

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
