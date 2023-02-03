import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";

import { useRouter } from "next/router";
import Layout from "./components/Layout";
import Loading from "./components/Loading";
import styles from "../../styles/Lms.Index.module.css";
import Cauhoi from "./Cauhoi";

import BottomBar from "./components/BottomBar";

import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Fab from "@mui/material/Fab";

import { Button } from "@mui/material";

const Monhoc = () => {
  const router = useRouter();
  const { ma_mon } = router.query;

  const [state, dispatch] = useContext(DataContext);
  const { dataShow } = state;

  useEffect(() => {
    dispatch({
      type: "Loading",
      payload: true,
    });

    const getData = async (ma_mon) => {
      await dispatch({
        type: "ChangeMaMon",
        payload: ma_mon,
      });
    };
    if (ma_mon) getData(ma_mon);

    dispatch({
      type: "Loading",
      payload: false,
    });
  }, [ma_mon]);

  const handleClickScroll = (toId) => {
    const element = document.getElementById(toId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // useEffect(() => {
  //   console.log(state.ketqua);
  // }, [state]);

  return (
    <Layout>
      <div id="to-top"></div>
      <Loading />
      <div className={styles.index_page}>
        {dataShow
          ? dataShow.map((data, i) => (
              <Cauhoi key={i} data={data} stt={i + 1} socau={dataShow.length} />
            ))
          : ""}
      </div>

      <div style={{ position: "fixed", bottom: "50px", right: "50px" }}>
        <Fab
          size="small"
          color="primary"
          onClick={() => {
            handleClickScroll("to-top");
          }}
        >
          <ArrowCircleUpIcon />
        </Fab>
      </div>
      <BottomBar />
    </Layout>
  );
};

export default Monhoc;
