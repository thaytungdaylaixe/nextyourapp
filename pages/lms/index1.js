import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import Cauhoi from "./Cauhoi";

import { Autocomplete, TextField } from "@mui/material";

const theme = createTheme({});

export default function LmsIndex() {
  const [state, dispatch] = useContext(DataContext);
  const { lmsData } = state;
  const { infoMon } = lmsData;

  const [dataShow, SetDataShow] = useState(null);

  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");

  //   useEffect(() => {
  //     console.log(dataShow);
  //   }, [dataShow]);

  const noData = (dataShow) => {
    return (
      <>
        <h2>No data show</h2>
      </>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          SetDataShow(lmsData[newValue.ma_mon]);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={infoMon}
        getOptionLabel={(infoMon) => infoMon.ten_mon}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Chọn môn" />}
      />

      {dataShow
        ? dataShow
            .sort((a, b) => a.cauhoi.localeCompare(b.cauhoi))
            .map((data, i) => <Cauhoi data={data} i={i} key={i} />)
        : noData()}
    </ThemeProvider>
  );
}
