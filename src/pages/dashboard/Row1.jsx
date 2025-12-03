import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// mui
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

import Box from "@mui/material/Box";

import { ResponsivePie } from "@nivo/pie";

const data1 = [
  {
    id: "scala",
    label: "scala",
    value: 100,
  },
  {
    id: "make",
    label: "make",
    value: 55,
  },
];

const data2 = [
  {
    id: "sales",
    label: "sales",
    value: 121,
  },
  {
    id: "other",
    label: "other",
    value: 79,
  },
];

const data3 = [
  {
    id: "clients",
    label: "clients",
    value: 105,
  },
  {
    id: "pending",
    label: "pending",
    value: 95,
  },
];

const data4 = [
  {
    id: "traffic",
    label: "traffic",
    value: 143,
  },
  {
    id: "bounce",
    label: "bounce",
    value: 57,
  },
];

export default function Row1() {
  const { Ctheme } = useContext(ThemeContext);

  // Theme for pie chart tooltips
  const pieTheme = {
    tooltip: {
      container: {
        background: Ctheme === "dark" ? "#333333" : "#ffffff",
        color: Ctheme === "dark" ? "#ffffff" : "#333333",
      },
    },
  };

  return (
    <div className={Ctheme === "dark" ? "dark" : ""}>
      <Stack
        direction={"row"}
        sx={{ flexWrap: "wrap",marginY:"15px" }}
        gap={1}
        justifyContent={{ xs: "center", sm: "space-between" }}
      >
        <Paper
          sx={{
            minWidth: "333px",
            padding: 1.5,
            display: "flex",
            justifyContent: "space-between",
            bgcolor: Ctheme === "dark" ? "#3F3F46" : "",
            color: Ctheme === "dark" ? "white" : "black",
            height: 160,
            flexGrow: 1,
          }}
        >
          <Stack gap={1}>
            <EmailIcon sx={{ fontSize: "23px", color: "#9e7ffbff" }} />
            <Typography variant="h6" fontWeight="600">
              12,361
            </Typography>
            <Typography variant="body2">Emails Sent</Typography>
          </Stack>

          <Stack alignItems="center">
            <Box sx={{ height: "88px", width: "100px" }}>
              <ResponsivePie
                data={data1}
                theme={pieTheme}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                innerRadius={0.5}
                padAngle={0.6}
                cornerRadius={2}
                activeOuterRadiusOffset={8}
                enableArcLabels={false}
                enableArcLinkLabels={false}
                colors={{ scheme: "nivo" }}
              />
            </Box>
            <Typography variant="body2" fontWeight="600" color="#4caf50">
              +14%
            </Typography>
          </Stack>
        </Paper>

        <Paper
          sx={{
            minWidth: "333px",
            padding: 1.5,
            display: "flex",
            justifyContent: "space-between",
            bgcolor: Ctheme === "dark" ? "#3F3F46" : "",
            color: Ctheme === "dark" ? "white" : "black",
            height: 160,
            flexGrow: 1,
          }}
        >
          <Stack gap={1}>
            <PointOfSaleIcon sx={{ fontSize: "23px", color: "#9e7ffbff" }} />
            <Typography variant="h6" fontWeight="600">
              431,225
            </Typography>
            <Typography variant="body2">Sales obtained</Typography>
          </Stack>

          <Stack alignItems="center">
            <Box sx={{ height: "88px", width: "100px" }}>
              <ResponsivePie
                data={data2}
                theme={pieTheme}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                innerRadius={0.5}
                padAngle={0.6}
                cornerRadius={2}
                activeOuterRadiusOffset={8}
                enableArcLabels={false}
                enableArcLinkLabels={false}
                colors={{ scheme: "set2" }}
              />
            </Box>
            <Typography variant="body2" fontWeight="600" color="#4caf50">
              +21%
            </Typography>
          </Stack>
        </Paper>

        <Paper
          sx={{
            minWidth: "333px",
            padding: 1.5,
            display: "flex",
            justifyContent: "space-between",
            bgcolor: Ctheme === "dark" ? "#3F3F46" : "",
            color: Ctheme === "dark" ? "white" : "black",
            height: 160,
            flexGrow: 1,
          }}
        >
          <Stack gap={1}>
            <PersonAddIcon sx={{ fontSize: "23px", color: "#9e7ffbff" }} />
            <Typography variant="h6" fontWeight="600">
              32,441
            </Typography>
            <Typography variant="body2">New Client</Typography>
          </Stack>

          <Stack alignItems="center">
            <Box sx={{ height: "88px", width: "100px" }}>
              <ResponsivePie
                data={data3}
                theme={pieTheme}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                innerRadius={0.5}
                padAngle={0.6}
                cornerRadius={2}
                activeOuterRadiusOffset={8}
                enableArcLabels={false}
                enableArcLinkLabels={false}
                colors={{ scheme: "accent" }}
              />
            </Box>
            <Typography variant="body2" fontWeight="600" color="#4caf50">
              +5%
            </Typography>
          </Stack>
        </Paper>

        <Paper
          sx={{
            minWidth: "333px",
            padding: 1.5,
            display: "flex",
            justifyContent: "space-between",
            bgcolor: Ctheme === "dark" ? "#3F3F46" : "",
            color: Ctheme === "dark" ? "white" : "black",
            height: 160,
            flexGrow: 1,
          }}
        >
          <Stack gap={1}>
            <TrafficIcon sx={{ fontSize: "23px", color: "#9e7ffbff" }} />
            <Typography variant="h6" fontWeight="600">
              1,325,134
            </Typography>
            <Typography variant="body2">Traffic Received</Typography>
          </Stack>

          <Stack alignItems="center">
            <Box sx={{ height: "88px", width: "100px" }}>
              <ResponsivePie
                data={data4}
                theme={pieTheme}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                innerRadius={0.5}
                padAngle={0.6}
                cornerRadius={2}
                activeOuterRadiusOffset={8}
                enableArcLabels={false}
                enableArcLinkLabels={false}
                colors={{ scheme: "category10" }}
              />
            </Box>
            <Typography variant="body2" fontWeight="600" color="#4caf50">
              +43%
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    </div>
  );
}
