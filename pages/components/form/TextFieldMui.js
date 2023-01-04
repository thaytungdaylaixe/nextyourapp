import React from "react";
import { TextField } from "@mui/material";

const TextFieldMui = ({ properties, id, label, onChange }) => {
  return (
    <TextField
      {...properties}
      label={label}
      id={id}
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
