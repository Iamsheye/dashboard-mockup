import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import AnalyticsBody from "../components/AnalyticsBody";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Analytics = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex">
      <OutsideClickHandler
        onOutsideClick={() => {
          setMenu(false);
        }}
      >
        <Sidebar menu={menu} />
      </OutsideClickHandler>
      <div className="grow">
        <Header setMenu={setMenu} />
        <AnalyticsBody />
      </div>
    </div>
  );
};

export default Analytics;
