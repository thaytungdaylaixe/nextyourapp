import * as React from "react";
import { useRouter } from "next/router";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";

import InboxIcon from "@mui/icons-material/MoveToInbox";

export default function AppBarSideBar() {
  const router = useRouter();

  const [anchorElProfile, setAnchorElProfile] = React.useState(null);

  const [drawer, setDrawer] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchordrawer, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer({ ...drawer, [anchordrawer]: open });
  };

  const list = (anchordrawer) => (
    <Box
      sx={{
        width:
          anchordrawer === "top" || anchordrawer === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchordrawer, false)}
      onKeyDown={toggleDrawer(anchordrawer, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const isMenuOpen = Boolean(anchorElProfile);

  const handleProfileMenuOpen = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleMenuClose = (link) => {
    setAnchorElProfile(null);
    router.push("/" + link);
  };

  const menuId = "primary-search-account-menu";

  const anchorElProfileData = [
    { text: "Login", icon: <AccountCircle />, link: "login" },
    { text: "Register", icon: <MailIcon />, link: "register" },
  ];

  const renderMenu = (
    <Menu
      anchorEl={anchorElProfile}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {anchorElProfileData.map((profileData, index) => (
        <MenuItem
          key={"profile" + index}
          onClick={(e) => handleMenuClose(profileData.link)}
        >
          <ListItemIcon>{profileData.icon}</ListItemIcon>
          <ListItemText primary={profileData.text} />
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={(e) => router.push("/")}
          >
            MUI
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMenu}

      <Drawer
        anchordrawer={"left"}
        open={drawer["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </Box>
  );
}

// {renderMobileMenu}
