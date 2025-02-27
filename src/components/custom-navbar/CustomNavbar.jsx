import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

const pages = ["About", "FAQ", "Pricing", "Apply To Be A Judge", "Enter"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function CustomNavbar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  let avatarSize;

  if (isSmallScreen) avatarSize = 60;
  else if (isMediumScreen) avatarSize = 70;
  else avatarSize = 80;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar  style={{zIndex : 1000 ,backgroundColor : 'transparent' ,boxShadow : 'none' , paddingTop : 10 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt="Logo"
              src="https://b3024523.smushcdn.com/3024523/wp-content/uploads/2023/02/Award-3.png?lossy=1&strip=1&webp=1"
              sx={{
                width: avatarSize,
                height: avatarSize,
                display: { xs: "none", md: "flex" },
              }}
            />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography sx={{ textAlign: "center"  }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <IconButton
            onClick={handleOpenUserMenu}
            sx={{
              flexGrow: 1,
              justifyContent: "flex-start",
              display: { xs: "flex", md: "none" },
            }}
          >
            <Avatar
              alt="Logo"
              src="https://b3024523.smushcdn.com/3024523/wp-content/uploads/2023/02/Award-3.png?lossy=1&strip=1&webp=1"
              sx={{ width: avatarSize, height: avatarSize }}
            />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" ,backgroundColor : 'transparent' , boxShadow : 'none' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{backgroundColor : 'white',color : 'black'}}>
              Apply
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default CustomNavbar;
