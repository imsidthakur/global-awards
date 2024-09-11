import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import LockIcon from "@mui/icons-material/Lock";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import {
  Box,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { pxToRem } from "@store/theme/typography";
import { PropTypes } from "prop-types";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const minWidth = 68;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.shortest,
  }),
  "& .MuiListItemText-root": {
    opacity: 1,
  },
  "& + button": {
    left: drawerWidth,
  },
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: minWidth,
  "& .MuiListItemText-root": {
    opacity: 0,
    overflow: "hidden",
  },
  "& .MuiCollapse-wrapperInner": {
    maxHeight: "0px",
    opacity: 0,
  },

  "&:hover .MuiDrawer-paper": {
    width: drawerWidth,
    "& .MuiListItemText-root": {
      opacity: 1,
    },
    // '& .MuiGrid-root': {
    //   opacity: 1,
    // },
    "& .MuiCollapse-wrapperInner": {
      maxHeight: "300px",
      opacity: 1,
    },
  },
  "&:hover + button": {
    left: drawerWidth,
  },
});

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  whiteSpace: "nowrap",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  "& .MuiCollapse-wrapperInner": {
    maxHeight: "1000px",
    opacity: 1,
    overflow: "hidden",
    transition: theme.transitions.create(["max-height", "opacity"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  "& .MuiListItemText-root": {
    transitionDelay: "100ms",
    transition: theme.transitions.create("opacity", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

const menuListItem = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    route: "/dashboard",
    subItems: [],
  },
  {
    title: "Customers",
    icon: <AccountCircleIcon />,
    subItems: [
      { title: "Accounts", route: "/users" },
      { title: "Subscription" },
      { title: "Discounts" },
      { title: "Invoices" },
      { title: "Transactions" },
    ],
  },
  {
    title: "Products",
    icon: <InventoryIcon />,
    subItems: [
      { title: "Pricing Plan", route: "/pricing-plans" },
      { title: "Bundles", route: "/bundles" },
      { title: "Plan Codes" },
      { title: "Items" },
      { title: "Custom Fields" },
      { title: "Data Importing" },
      { title: "Emails" },
    ],
  },
  { title: "Reports", icon: <ReceiptLongIcon />, subItems: [] },
  {
    title: "Admin",
    icon: <LockIcon />,
    subItems: [{ title: "Users" }],
  },
];

const MenuList = ({ openSubMenu, handleClick, navigate, location }) => {
  return (
    <Box>
      <List>
        {menuListItem.map((item, index) => (
          <React.Fragment key={item.title}>
            <ListItemButton
              onClick={() => {
                if (item?.route && !item?.subItems?.length) {
                  navigate(item?.route);
                }
                handleClick(index);
              }}
            >
              {item?.icon ? (
                <ListItemIcon
                  sx={{
                    color:
                      location.pathname.indexOf(item?.route) > -1
                        ? (theme) => theme.palette.primary.main
                        : undefined,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
              ) : null}
              <ListItemText
                primary={item.title}
                sx={{
                  color:
                    location.pathname.indexOf(item?.route) > -1
                      ? (theme) => theme.palette.primary.main
                      : undefined,
                }}
              />
              {(item?.subItems || []).length > 0 ? (
                openSubMenu === index ? (
                  <ArrowDropDownIcon />
                ) : (
                  <ArrowRightIcon />
                )
              ) : null}
            </ListItemButton>
            {(item?.subItems || []).length > 0 && (
              <Collapse in={openSubMenu === index} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItemButton
                      key={subItem.title}
                      sx={{ pl: 4 }}
                      onClick={() => {
                        if (subItem?.route) {
                          navigate(subItem?.route);
                        }
                      }}
                    >
                      {subItem?.icon ? (
                        <ListItemIcon
                          sx={{
                            color:
                              location.pathname.indexOf(subItem?.route) > -1
                                ? (theme) => theme.palette.primary.main
                                : undefined,
                          }}
                        >
                          {subItem.icon}
                        </ListItemIcon>
                      ) : null}
                      <ListItemText
                        primary={subItem.title}
                        sx={{
                          color:
                            location.pathname.indexOf(subItem?.route) > -1
                              ? (theme) => theme.palette.primary.main
                              : undefined,
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default function SideBar({ open }) {
  const [openSubMenu, setOpenSubMenu] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <Box>
      <StyledDrawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            borderRight: 0,
            boxShadow: (theme) => theme.shadows[1],
          },
        }}
      >
        <Stack
          justifyContent={"space-between"}
          sx={{ maxHeight: "100%", height: "100%" }}
          px={pxToRem(12)}
          py={pxToRem(12)}
        >
          <Stack>
            <Stack
              alignItems={"center"}
              direction={"row"}
              justifyContent={"flex-start"}
            >
              <Box>
                <Typography fontSize={"24px"} fontWeight={"bolder"}>
                  Optimus
                </Typography>
              </Box>
            </Stack>
            <Divider sx={{ my: "15px" }} fullwidth="true" />
            <MenuList
              handleClick={handleClick}
              openSubMenu={openSubMenu}
              navigate={navigate}
              location={location}
            />
          </Stack>
          <Stack></Stack>
        </Stack>
      </StyledDrawer>
    </Box>
  );
}

SideBar.propTypes = {
  open: PropTypes.bool,
};
