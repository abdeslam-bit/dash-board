import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";
export default function Calendar() {
  const { Ctheme } = useContext(ThemeContext);
  return (
    <div className={Ctheme === "dark" ? "dark" : ""}>
      <div className="dark:text-white">Calendar page</div>
      <h1 className="dark:text-white">hello</h1>
    </div>
  );
}
