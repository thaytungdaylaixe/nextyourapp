import React from "react";
import Link from "next/link";
import styles from "../../styles/Lms.Index.module.css";
import {
  Box,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import Layout from "./components/Layout";
import lmsData from "../../store/lmsData.json";

const index = () => {
  const infoMon = lmsData.infoMon.reverse();

  return (
    <Layout>
      <List style={{ marginTop: "60px" }}>
        {infoMon.map((mon, index) => (
          <Link key={index} href={"/lms/" + mon.ma_mon}>
            <ListItem disablePadding>
              <ListItemButton>
                {index + 1}. &nbsp;
                <ListItemText primary={mon.ten_mon} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Layout>
  );
};

export default index;
