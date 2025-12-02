import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";

// get the bar from nivo.rocks.com
import { ResponsiveBar } from "@nivo/bar";
import Box from "@mui/material/Box";

const data = [
  {
    year: 2019,
    Spain: 1000,
    French: 1500,
    Germany: 1600,
  },
  { year: 2020, Spain: 1050, French: 1550, Germany: 1700 },
  { year: 2021, Spain: 1100, French: 1600, Germany: 1900 },
  { year: 2022, Spain: 1200, French: 1700, Germany: 2000 },
  { year: 2023, Spain: 1260, French: 1709, Germany: 1080 },
];

export default function BarChart() {
  const { Ctheme } = useContext(ThemeContext);
  
  // Theme for text only
  const chartTheme = {
    text: {
      fill: Ctheme === "dark" ? "#ffffff" : "#333333",
    },
  };

  return (
    <div className={Ctheme === "dark" ? "dark" : ""}>
      <Box sx={{ height: "75vh" }}>
        <ResponsiveBar
          data={data}
          indexBy="year"
          keys={["Spain", "French", "Germany"]}
          theme={chartTheme}
          labelSkipWidth={12}
          labelSkipHeight={12}
          colors={{ scheme: 'category10' }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              translateX: 120,
              itemsSpacing: 3,
              itemWidth: 100,
              itemHeight: 16,
            },
          ]}
          axisBottom={{ legend: "Year", legendOffset: 32 }}
          axisLeft={{ legend: "Salary/mounth", legendOffset: -55 }}
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        />
      </Box>
    </div>
  );
}
