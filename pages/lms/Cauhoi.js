import React, { useState, useContext, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

export default function Cauhoi({ data, i }) {
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return data ? (
    <Card sx={{ maxWidth: "100%" }}>
      <CardContent>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            <Typography gutterBottom variant="h6" color="primary">
              {i + 1} : {data.cauhoi}
            </Typography>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            {data.dapan.map((dapan, i) => (
              <div
                style={{
                  backgroundColor:
                    (value === dapan) & (dapan === data.dapandung)
                      ? "#4BB543"
                      : (value === dapan) & (dapan !== data.dapandung)
                      ? "#ED6C02"
                      : i % 2 == 0
                      ? "#D6DBDC"
                      : "",
                  padding: "10px",
                  borderRadius: "5px",
                  margin: "2px",
                }}
              >
                <FormControlLabel
                  key={i}
                  value={dapan}
                  control={<Radio />}
                  label={
                    <Typography
                      variant="bady2"
                      color={value === dapan ? "white" : "grey"}
                    >
                      {i + 1 + ". " + dapan}
                    </Typography>
                  }
                />
              </div>
            ))}
          </RadioGroup>
          <Typography
            gutterBottom
            variant="bady2"
            color="primary"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              setValue(null);
            }}
          >
            Xóa ....
          </Typography>
        </FormControl>
      </CardContent>
    </Card>
  ) : (
    ""
  );
}

// <div style={{ backgroundColor: i % 2 == 0 ? "#D6DBDC" : "" }}>
//   <FormControlLabel
//     key={i}
//     value={dapan}
//     control={<Radio />}
//     label={<Typography variant="h6">{i + 1 + ". " + dapan}</Typography>}
//   />
// </div>
