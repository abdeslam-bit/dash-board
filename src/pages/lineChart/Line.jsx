import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import Box from "@mui/material/Box";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    data: [
      {
        x: "plane",
        y: 294,
      },
      {
        x: "helicopter",
        y: 157,
      },
      {
        x: "boat",
        y: 186,
      },
      {
        x: "train",
        y: 70,
      },
      {
        x: "subway",
        y: 85,
      },
      {
        x: "bus",
        y: 157,
      },
      {
        x: "car",
        y: 146,
      },
      {
        x: "moto",
        y: 163,
      },
      {
        x: "bicycle",
        y: 71,
      },
      {
        x: "horse",
        y: 128,
      },
      {
        x: "skateboard",
        y: 132,
      },
      {
        x: "others",
        y: 181,
      },
    ],
  },
  {
    id: "france",
    data: [
      {
        x: "plane",
        y: 231,
      },
      {
        x: "helicopter",
        y: 15,
      },
      {
        x: "boat",
        y: 168,
      },
      {
        x: "train",
        y: 242,
      },
      {
        x: "subway",
        y: 33,
      },
      {
        x: "bus",
        y: 142,
      },
      {
        x: "car",
        y: 278,
      },
      {
        x: "moto",
        y: 290,
      },
      {
        x: "bicycle",
        y: 142,
      },
      {
        x: "horse",
        y: 143,
      },
      {
        x: "skateboard",
        y: 82,
      },
      {
        x: "others",
        y: 207,
      },
    ],
  },
  {
    id: "us",
    data: [
      {
        x: "plane",
        y: 80,
      },
      {
        x: "helicopter",
        y: 101,
      },
      {
        x: "boat",
        y: 206,
      },
      {
        x: "train",
        y: 143,
      },
      {
        x: "subway",
        y: 170,
      },
      {
        x: "bus",
        y: 68,
      },
      {
        x: "car",
        y: 11,
      },
      {
        x: "moto",
        y: 245,
      },
      {
        x: "bicycle",
        y: 142,
      },
      {
        x: "horse",
        y: 284,
      },
      {
        x: "skateboard",
        y: 282,
      },
      {
        x: "others",
        y: 290,
      },
    ],
  },
  {
    id: "germany",
    data: [
      {
        x: "plane",
        y: 235,
      },
      {
        x: "helicopter",
        y: 279,
      },
      {
        x: "boat",
        y: 285,
      },
      {
        x: "train",
        y: 56,
      },
      {
        x: "subway",
        y: 51,
      },
      {
        x: "bus",
        y: 115,
      },
      {
        x: "car",
        y: 228,
      },
      {
        x: "moto",
        y: 36,
      },
      {
        x: "bicycle",
        y: 107,
      },
      {
        x: "horse",
        y: 130,
      },
      {
        x: "skateboard",
        y: 228,
      },
      {
        x: "others",
        y: 185,
      },
    ],
  },
  {
    id: "norway",
    data: [
      {
        x: "plane",
        y: 101,
      },
      {
        x: "helicopter",
        y: 246,
      },
      {
        x: "boat",
        y: 56,
      },
      {
        x: "train",
        y: 100,
      },
      {
        x: "subway",
        y: 118,
      },
      {
        x: "bus",
        y: 179,
      },
      {
        x: "car",
        y: 225,
      },
      {
        x: "moto",
        y: 13,
      },
      {
        x: "bicycle",
        y: 201,
      },
      {
        x: "horse",
        y: 29,
      },
      {
        x: "skateboard",
        y: 85,
      },
      {
        x: "others",
        y: 260,
      },
    ],
  },
];

export default function Line() {
  const { Ctheme } = useContext(ThemeContext);

  // Theme for text color
  const chartTheme = {
    text: {
      fill: Ctheme === "dark" ? "#ffffff" : "#333333",
    },
    grid: {
      line: {
        stroke: "transparent", // Remove grid lines
      },
    },
  };

  return (
    <div className={Ctheme === "dark" ? "dark" : ""}>
      <Box sx={{ height: "280px",width:"100%",minWidth:100}}>
        <ResponsiveLine
          data={data}
          theme={chartTheme}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          curve="catmullRom"
          axisBottom={{ legend: "transportation", legendOffset: 36 }}
          axisLeft={{ legend: "count", legendOffset: -40 }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "seriesColor" }}
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          useMesh={true}
          enableGridX={false}
          enableGridY={false}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              translateX: 100,
              itemWidth: 80,
              itemHeight: 22,
              symbolShape: "circle",
            },
          ]}
        />
      </Box>
    </div>
  );
}