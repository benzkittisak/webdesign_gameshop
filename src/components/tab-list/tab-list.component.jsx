import React from "react";

import { setActiveClassOnTab } from "../../utils";

const TabList = ({ data, loadGame }) => {
  return (
    <div
      className={`tab-list-container`}
      onClick={(e) => {
        setActiveClassOnTab(e);
        loadGame(data.id);
      }}
    >
      <div className="tab-list-img">
        <img src={data.banner} alt="" />
      </div>
      <div className="tab-list-title">
        <h2>{data.name}</h2>
      </div>
    </div>
  );
};

export default TabList;
