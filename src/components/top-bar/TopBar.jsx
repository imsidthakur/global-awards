import useAuth from "@hooks/useAuth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import {
  AppBar,
  Box,
  Breadcrumbs,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import { useLocation } from "react-router-dom";

export function TopBar() {
  const { removeAuth } = useAuth();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const pages = ["Settings", "API", "Help"];

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const breadcrumbs = [
    <Typography key="1" color="text.primary">
      <HomeIcon sx={{ mr: 0.5 }} />
    </Typography>,
    <Typography key="2" color="text.primary" textTransform={"capitalize"}>
      {location.pathname.slice(1)}
    </Typography>,
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
      }}
    >
      <Toolbar variant="dense">
        <Stack variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Breadcrumbs separator="›">{breadcrumbs}</Breadcrumbs>
        </Stack>
        <Box display={"flex"}>
          {pages.map((page) => (
            <Button
              variant="text"
              sx={{ textTransform: "capitalize", color: "#293854" }}
              key={page}
              disableRipple
            >
              {page}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <IconButton size="large" onClick={handleMenu}>
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
            <MenuItem
              onClick={() => {
                removeAuth();
              }}
            >
              Log Out
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
