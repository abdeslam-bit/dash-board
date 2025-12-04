import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Line from "../lineChart/Line";
import Button from "@mui/material/Button";

export default function Row2() {
  const { Ctheme } = useContext(ThemeContext);

  return (
    <div className={Ctheme === "dark" ? "dark" : ""}>
      <Stack direction={"row"} justifyContent={"space-between"} gap={2} flexWrap={"wrap"}>
        <Paper 
          sx={{
            maxWidth: 900, 
            minWidth: 100,
            flexGrow: 1, 
            height: 350,
            overflow: "hidden",
            backgroundColor: Ctheme === "dark" ? "#3F3F46" : "#fff"
          }}
        >
          <Line />
        </Paper>

        <Paper sx={{ height: 350,overflow:"scroll", minWidth: 300,bgcolor:Ctheme==="dark"?"#18181b":"" }}>
          <Box>
            <Typography 
              color={"#9e7ffbff"} 
              fontWeight={"bold"} 
              p={1.2} 
              variant="h6" 
              bgcolor={Ctheme === "dark" ? "#3F3F46" : ""}
            >
              Recent Transaction
            </Typography>
          </Box>

          <Box sx={{ p:1.2 }}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} bgcolor={Ctheme==="dark"?"#3F3F46":""} padding={1.2} width={"100%"} borderRadius={"5px"}>
              <Typography 
                color={Ctheme === "dark" ? "white" : "black"} 
                fontWeight={"bold"} 
                variant="body1"
              >
                john
              </Typography>
              <Typography 
                color={Ctheme === "dark" ? "white" : "black"} 
                fontWeight={"bold"} 
                variant="body1"
              >
                25-10-2006
              </Typography>
              <Button variant="contained" color="error" size="small">
                $43.91
              </Button>
            </Stack>
          </Box>
          <Box sx={{ p:1.2 }}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} bgcolor={Ctheme==="dark"?"#3F3F46":""} padding={1.2} width={"100%"} borderRadius={"5px"}>
              <Typography 
                color={Ctheme === "dark" ? "white" : "black"} 
                fontWeight={"bold"} 
                variant="body1"
              >
                john
              </Typography>
              <Typography 
                color={Ctheme === "dark" ? "white" : "black"} 
                fontWeight={"bold"} 
                variant="body1"
              >
                25-10-2006
              </Typography>
              <Button variant="contained" color="error" size="small">
                $43.91
              </Button>
            </Stack>
          </Box>
          <Box sx={{ p:1.2 }}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} bgcolor={Ctheme==="dark"?"#3F3F46":""} padding={1.2} width={"100%"} borderRadius={"5px"}>
              <Typography 
                color={Ctheme === "dark" ? "white" : "black"} 
                fontWeight={"bold"} 
                variant="body1"
              >
                john
              </Typography>
              <Typography 
                color={Ctheme === "dark" ? "white" : "black"} 
                fontWeight={"bold"} 
                variant="body1"
              >
                25-10-2006
              </Typography>
              <Button variant="contained" color="error" size="small">
                $43.91
              </Button>
            </Stack>
          </Box>
          <Box sx={{ p:1.2 }}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} bgcolor={Ctheme==="dark"?"#3F3F46":""} padding={1.2} width={"100%"} borderRadius={"5px"}>
              <Typography 
                color={Ctheme === "dark" ? "white" : "black"} 
                fontWeight={"bold"} 
                variant="body1"
              >
                john
              </Typography>
              <Typography 
                color={Ctheme === "dark" ? "white" : "black"} 
                fontWeight={"bold"} 
                variant="body1"
              >
                25-10-2006
              </Typography>
              <Button variant="contained" color="error" size="small">
                $43.91
              </Button>
            </Stack>
          </Box>
          <Box sx={{ p:1.2 }}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} bgcolor={Ctheme==="dark"?"#3F3F46":""} padding={1.2} width={"100%"} borderRadius={"5px"}>
              <Typography 
                color={Ctheme === "dark" ? "white" : "black"} 
                fontWeight={"bold"} 
                variant="body1"
              >
                john
              </Typography>
              <Typography 
                color={Ctheme === "dark" ? "white" : "black"} 
                fontWeight={"bold"} 
                variant="body1"
              >
                25-10-2006
              </Typography>
              <Button variant="contained" color="error" size="small">
                $43.91
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Stack>
    </div>
  );
}

