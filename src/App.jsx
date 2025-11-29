import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

// components
import TopBar from "./components/TopBar";
import SideBare from "./components/SideBare";

// hooks
import { createContext, useState } from "react";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
export const ThemeContext = createContext(null);

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  // initialize theme from localStorage
  const [Ctheme, setCTheme] = useState(
    localStorage.getItem("currentMode") || "light"
  );

  const setLight = () => {
    setCTheme("light");
    localStorage.setItem("currentMode", "light");
  };

  const setDark = () => {
    setCTheme("dark");
    localStorage.setItem("currentMode", "dark");
  };

  return (
    <ThemeContext.Provider value={{ Ctheme, setLight, setDark }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <TopBar open={open} handleDrawerOpen={handleDrawerOpen} />
        <SideBare open={open} handleDrawerClose={handleDrawerClose} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Typography sx={{ marginBottom: 2 }}>Lorem</Typography>
        </Box>
      </Box>
    </ThemeContext.Provider>
  );
}
