import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { useNavigate } from "react-router";

// mui icon
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapIcon from "@mui/icons-material/Map";

// mui
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { useLocation } from "react-router-dom";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function SideBare({ open, handleDrawerClose }) {
  const theme = useTheme();
  const { Ctheme } = useContext(ThemeContext);
  const array1 = [
    { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
    { text: "Manage Team", icon: <PeopleOutlineOutlinedIcon />, path: "/team" },
    {
      text: "Invioces Balances",
      icon: <ReceiptOutlinedIcon />,
      path: "/invoices",
    },
  ];
  const array2 = [
    { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
    {
      text: "Calendar",
      icon: <CalendarTodayOutlinedIcon />,
      path: "/calendar",
    },
    { text: "FAQ Page", icon: <HelpOutlineOutlinedIcon />, path: "/faq" },
  ];
  const array3 = [
    { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
    { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
    { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
    { text: "Geography chart", icon: <MapIcon />, path: "/geography" },
  ];
  let navigate = useNavigate();
  let locatin = useLocation()
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: Ctheme === "dark" ? "#18181b" : "#fff",
          color: Ctheme === "dark" ? "#fff" : "#000",
          borderRight:
            Ctheme === "dark" ? "1px solid #3f3f46" : "1px solid #d4d4d8",
        },
      }}
    >
      <DrawerHeader>
        <IconButton
          onClick={handleDrawerClose}
          sx={{
            color: Ctheme === "dark" ? "#fff" : "#000",
          }}
        >
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      {/* <Divider
        sx={
          Ctheme === "light"
            ? { backgroundColor: "" }
            : { backgroundColor: "white" }
        }
      /> */}

      <Avatar
        alt="Remy Sharp"
        sx={{
          mx: "auto",
          my: 1,
          border: "2px solid grey",
          height: open ? 88 : 40,
          width: open ? 88 : 40,
          transition: "0.25s",
        }}
        src="https://miro.medium.com/1*WxaPQoonUZLcPCISd6WrnQ.jpeg"
      />
      <Typography
        align="center"
        sx={{
          fontSize: open ? 30 : 0,
          transition: "0.25s",
          fontWeight: "bold",
        }}
      >
        ali
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open ? 15 : 0,
          transition: "0.25s",
          fontWeight: "bold",
        }}
        className="text-blue-500"
      >
        admin
      </Typography>

      <Divider
        sx={
          Ctheme === "light"
            ? { backgroundColor: "" }
            : { backgroundColor: "white" }
        }
      />

      <List>
        {array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor:item.path === locatin.pathname? (Ctheme === "light"? "#e0e0e0":"#757575"):null
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                    color:
                      Ctheme === "dark" ? "#e4e4e7" : "rgba(0, 0, 0, 0.54)",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider
        sx={
          Ctheme === "light"
            ? { backgroundColor: "" }
            : { backgroundColor: "white" }
        }
      />
      <List>
        {array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor:item.path === locatin.pathname? (Ctheme === "light"? "#e0e0e0":"#757575"):null
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                    color:
                      Ctheme === "dark" ? "#e4e4e7" : "rgba(0, 0, 0, 0.54)",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider
        sx={
          Ctheme === "light"
            ? { backgroundColor: "" }
            : { backgroundColor: "white" }
        }
      />
      <List>
        {array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor:item.path === locatin.pathname? (Ctheme === "light"? "#e0e0e0":"#757575"):null
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                    color:
                      Ctheme === "dark" ? "#e4e4e7" : "rgba(0, 0, 0, 0.54)",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider
        sx={
          Ctheme === "light"
            ? { backgroundColor: "" }
            : { backgroundColor: "white" }
        }
      />
    </Drawer>
  );
}
