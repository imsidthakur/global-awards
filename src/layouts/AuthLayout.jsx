import SideBar from "@components/side-bar/SideBar";
import { TopBar } from "@components/top-bar/TopBar";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    localStorage.setItem("isSideMenuOpen", open);
  }, [open]);

  return (
    <Box>
      <SideBar open={open} setOpen={setOpen} />
      <Box
        sx={{
          transition: (theme) =>
            theme.transitions.create(["margin-left", "left"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          ml: open ? "240px" : "68px",
        }}
      >
        <TopBar />
        <Box
          sx={{
            p: 2,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
