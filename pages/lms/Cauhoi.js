import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";
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

export default function Cauhoi({ data, stt, socau }) {
  const [state, dispatch] = useContext(DataContext);
  const { showKetqua } = state;

  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (value) {
      const { dapandung } = data;
      const dung_sai = value === dapandung ? 1 : 0;
      dispatch({
        type: "Ketqua",
        payload: { [stt]: dung_sai },
      });
    }
  }, [value]);

  return data ? (
    <Card id={"cau" + stt} sx={{ maxWidth: "100%", marginBottom: "10px" }}>
      <CardContent>
        <FormControl style={{ width: "100%" }}>
          <FormLabel id="demo-controlled-radio-buttons-group">
            <Typography gutterBottom variant="h6" color="primary">
              {stt + "/" + socau} : {data.cauhoi}
            </Typography>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            {data.dapan.map((dapan, d) => (
              <div
                key={d}
                style={{
                  fontFamily: "Roboto",
                  backgroundColor:
                    showKetqua & (dapan === data.dapandung)
                      ? "#4BB543"
                      : (value === dapan) & (dapan === data.dapandung)
                      ? "#4BB543"
                      : (value === dapan) & (dapan !== data.dapandung)
                      ? "#ED6C02"
                      : "",
                  padding: "10px",
                  borderRadius: "5px",
                  margin: "2px",
                }}
              >
                <FormControlLabel
                  key={d}
                  value={dapan}
                  control={<Radio />}
                  label={
                    <Typography
                      style={{ lineHeight: 2 }}
                      variant="body2"
                      color={
                        showKetqua & (dapan === data.dapandung)
                          ? "white"
                          : value === dapan
                          ? "white"
                          : "grey"
                      }
                    >
                      {d + 1 + ". " + dapan}
                    </Typography>
                  }
                />
              </div>
            ))}
          </RadioGroup>
          <Typography
            gutterBottom
            variant="body2"
            color="primary"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              setValue(null);
            }}
          >
            X??a ....
          </Typography>
        </FormControl>
      </CardContent>
    </Card>
  ) : (
    ""
  );
}

//   style={{
//     backgroundColor:
//       (value === dapan) & (dapan === data.dapandung)
//         ? "#4BB543"
//         : (value === dapan) & (dapan !== data.dapandung)
//         ? "#ED6C02"
//         : d % 2 == 0
//         ? "#D6DBDC"
//         : "",
//     padding: "10px",
//     borderRadius: "5px",
//     margin: "2px",
//   }}

// <div style={{ backgroundColor: i % 2 == 0 ? "#D6DBDC" : "" }}>
//   <FormControlLabel
//     key={i}
//     value={dapan}
//     control={<Radio />}
//     label={<Typography variant="h6">{i + 1 + ". " + dapan}</Typography>}
//   />
// </div>
