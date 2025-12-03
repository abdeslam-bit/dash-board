import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";

// mui
import Button from "@mui/material/Button";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";

import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Box from "@mui/material/Box";

export default function Dashboard() {
  const { Ctheme } = useContext(ThemeContext);
  return (
    <div className={Ctheme === "dark" ? "dark" : ""}>
      <Box sx={{textAlign:"right"}}>  
        <Button variant="contained">
          <GetAppOutlinedIcon sx={{ marginRight: "5px" }} />
          Download Reports
        </Button>
      </Box>

      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}
