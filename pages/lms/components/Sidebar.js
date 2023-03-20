import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../../store/GlobalState";

import Link from "next/link";
import { useRouter } from "next/router";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  SwipeableDrawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  TextField,
  Autocomplete,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import lmsData from "../../../store/lmsData.json";

import RemoveRedEyeSharpIcon from "@mui/icons-material/RemoveRedEyeSharp";
import VisibilityOffSharpIcon from "@mui/icons-material/VisibilityOffSharp";
import SortByAlphaSharpIcon from "@mui/icons-material/SortByAlphaSharp";

const dataSorts = [
  { action: "RD", text: "Ngẫu nhiên" },
  { action: "AZ", text: "A -> Z" },
  { action: "ZA", text: "Z -> A" },
];

export default function Sidebar() {
  const [valueSort, setValueSort] = React.useState(dataSorts[0]);
  const [inputValueSort, setInputValueSort] = React.useState("");

  const [state, dispatch] = useContext(DataContext);
  const { dataShow, showKetqua } = state;
  const router = useRouter();
  const { ma_mon } = router.query;

  const [stateDrawer, setStateDrawer] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setStateDrawer({ ...stateDrawer, [anchor]: open });
  };

  let { infoMon } = lmsData;
  infoMon = infoMon.reverse();
  // const obj_mon = infoMon.find((obj) => {
  //   return obj.ma_mon === ma_mon;
  // });

  const anHienKetqua = () => {
    dispatch({
      type: "showKetqua",
      payload: !showKetqua,
    });

    // toggleDrawer(anchor, false);
  };

  useEffect(() => {
    const Sort = async (conditional) => {
      await dispatch({
        type: conditional,
      });
    };
    Sort(valueSort.action);
  }, [valueSort]);

  const list = (anchor) => {
    if (anchor === "left") {
      return (
        <Box
          sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {infoMon.map((mon, index) => (
              <Link key={index} href={"/lms/" + mon.ma_mon}>
                <ListItem disablePadding>
                  <ListItemButton>
                    {index + 1}. &nbsp;&nbsp;&nbsp
                    <ListItemText primary={mon.ten_mon} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </Box>
      );
    }

    return (
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                anHienKetqua();
              }}
            >
              <ListItemIcon>
                {showKetqua ? (
                  <VisibilityOffSharpIcon />
                ) : (
                  <RemoveRedEyeSharpIcon />
                )}
              </ListItemIcon>
              <ListItemText
                primary={showKetqua ? "Ẩn đáp án" : "Hiện đáp án"}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SortByAlphaSharpIcon />
              </ListItemIcon>
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
                disableCloseOnSelect
                options={dataSorts}
                getOptionLabel={(dataSorts) => dataSorts.text}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label={null} variant="standard" />
                )}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Box>
    );
  };

  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href={"/"}>Thầy Tùng - Dạy lái xe </Link>
          </Typography>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={toggleDrawer("right", true)}
          >
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {["left", "right", "top", "bottom"].map((anchor) => (
        <Drawer
          key={anchor}
          anchor={anchor}
          open={stateDrawer[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      ))}
    </Box>
  );
}

// <ListItem disablePadding>
//             <ListItemButton
//               onClick={() => {
//                 Sort("ZA");
//               }}
//             >
//               <ListItemIcon>
//                 <SortByAlphaSharpIcon />
//               </ListItemIcon>
//               <ListItemText primary="Sap xep Z -> A" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton
//               onClick={() => {
//                 Sort("RD");
//               }}
//             >
//               <ListItemIcon>
//                 <SortByAlphaSharpIcon />
//               </ListItemIcon>
//               <ListItemText primary="Sap xep ngau nhien" />
//             </ListItemButton>
//           </ListItem>

// <List>
//   {["All mail", "Trash", "Spam"].map((text, index) => (
//     <ListItem key={text} disablePadding>
//       <ListItemButton>
//         <ListItemIcon>
//           {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//         </ListItemIcon>
//         <ListItemText primary={text} />
//       </ListItemButton>
//     </ListItem>
//   ))}
// </List>

// {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//   <ListItem key={text} disablePadding>
//     <ListItemButton>
//       <ListItemIcon>
//         {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//       </ListItemIcon>
//       <ListItemText primary={text} />
//     </ListItemButton>
//   </ListItem>
// ))}

// {obj_mon ? obj_mon.ten_mon : "LMS"}
