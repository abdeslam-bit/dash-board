import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";
export default function Row2() {
  const { Ctheme } = useContext(ThemeContext);

  return (
    <div className={Ctheme === "dark" ? "dark" : ""}>
      <h1>hello2</h1>
    </div>
  );
}
