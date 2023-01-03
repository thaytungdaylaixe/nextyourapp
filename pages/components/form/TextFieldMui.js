import React from "react";
import { TextField } from "@mui/material";

const TextFieldMui = ({ size, defaultValue, id, label, onChange }) => {
  return (
    <TextField
      fullWidth
      size={size}
      defaultValue={defaultValue}
      id={id}
      label={label}
      name={id}
      onChange={(e) => {
        e.preventDefault();
        const { value } = e.target;

        onChange({ [id]: value });
      }}
    />
  );
};

export default TextFieldMui;
