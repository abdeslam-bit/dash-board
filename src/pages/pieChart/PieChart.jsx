import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import Box from "@mui/material/Box";
import { ResponsivePie } from '@nivo/pie'

const data =[
  {
    "id": "go",
    "label": "go",
    "value": 373,
    "color": "hsl(325, 70%, 50%)"
  },
  {
    "id": "ruby",
    "label": "ruby",
    "value": 363,
    "color": "hsl(360, 70%, 50%)"
  },
  {
    "id": "css",
    "label": "css",
    "value": 380,
    "color": "hsl(195, 70%, 50%)"
  },
  {
    "id": "scala",
    "label": "scala",
    "value": 340,
    "color": "hsl(301, 70%, 50%)"
  },
  {
    "id": "python",
    "label": "python",
    "value": 596,
    "color": "hsla(154, 70%, 50%, 1.00)"
  }
]

export default function PieChart() {
  const { Ctheme } = useContext(ThemeContext);
  
  // Theme for text color based on dark/light mode
  const chartTheme = {
    legends: {
      text: {
        fill: Ctheme === "dark" ? "#ffffff" : "#333333"
      }
    }
  };

  return (
    <div className={Ctheme === "dark" ? "dark" : ""}>
      <Box sx={{ height: "75vh", width: "91vw" }}>
        <ResponsivePie 
          data={data}
          theme={chartTheme}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.6}
          cornerRadius={2}
          activeOuterRadiusOffset={8}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={Ctheme === "dark" ? "#ffffff" : "#333333"}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
          legends={[
              {
                  anchor: 'bottom',
                  direction: 'row',
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 18,
                  symbolShape: 'circle'
              }
          ]}
        />
      </Box>
    </div>
  );
}
