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
  const [dungsai, SetDungsai] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
    value === data.dapandung ? SetDungsai(true) : SetDungsai(false);
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
              <FormControlLabel
                key={i}
                value={dapan}
                control={<Radio />}
                label={
                  <Typography variant="h6">{i + 1 + ". " + dapan}</Typography>
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Typography
          gutterBottom
          variant="body2"
          color="primary"
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            setValue(null);
          }}
        >
          Xóa ....
        </Typography>

        {value && dungsai ? (
          <Typography gutterBottom variant="body2" color="#4BB543">
            Đúng - Đáp án đúng là: {data.dapandung}
          </Typography>
        ) : value && !dungsai ? (
          <Typography gutterBottom variant="body2" color="#BC211D">
            Sai - Đáp án đúng là: {data.dapandung}
          </Typography>
        ) : (
          ""
        )}
      </CardContent>
    </Card>
  ) : (
    ""
  );
}

// {
//   data.dapan.map((dapan, i) => (
//     <Typography key={i} component="div" color="text.secondary">
//       {i + 1}. {dapan}
//     </Typography>
//   ));
// }
