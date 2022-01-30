import React, { useState } from "react";
import { Clicker } from "../Clicker";
import "./main.css";

export const Main: React.FC = (): JSX.Element => {
  let [openClicker, setOpenClicker] = React.useState<boolean>(false);
  return (
    <div className="main">
      <div className="button_open" onClick={() => setOpenClicker(!openClicker)}>
        Счётчик
      </div>
      {openClicker ? <Clicker /> : null}
    </div>
  );
};
