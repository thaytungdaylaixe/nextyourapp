import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const dataSorts = [
  { action: "AZ", text: "A->Z" },
  { action: "ZA", text: "Z->A" },
  { action: "RD", text: "Ngẫu nhiên" },
];

export default function ControllableStates() {
  const [valueSort, setValueSort] = React.useState(null);
  const [inputValueSort, setInputValueSort] = React.useState("");

  return (
    <Autocomplete
      value={valueSort}
      onChange={(event, newValue) => {
        setValueSort(newValue);
      }}
      inputValue={inputValueSort}
      onInputChange={(event, newInputValue) => {
        setInputValueSort(newInputValue);
      }}
      id="controllable-states-demo"
      options={dataSorts}
      getOptionLabel={(dataSorts) => dataSorts.text}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Controllable" />}
    />
  );
}
