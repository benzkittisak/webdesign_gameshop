import React from "react";

import TabList from "../tab-list/tab-list.component";

const BestSell = ({ data , loadGame }) => {
  return (
    <div className="best-sell">
      {data.map((item, index) => (
        <TabList data={item} key={index} loadGame={loadGame}/>
      ))}
    </div>
  );
};

export default BestSell;
