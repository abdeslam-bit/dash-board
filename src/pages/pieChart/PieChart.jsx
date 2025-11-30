import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";
export default function PieChart() {
  const { Ctheme } = useContext(ThemeContext);
  return (
    <div className={Ctheme === "dark" ? "dark" : ""}>
      <div className="dark:text-white">PieChart page</div>
      <h1 className="dark:text-white">hello</h1>
    </div>
  );
}
