import React, { useRef, useState, useEffect } from "react";
import Isotope from "isotope-layout";
import { useSearchParams } from "react-router-dom";

import {
  setActiveClassOnTab,
} from "../../utils";

import GAME_LIST from "../../data/game.data";
import GameCard from "../../components/game-card/game-card.component";

const ShopPage = () => {
  const [location , setLocation] = useSearchParams();
  const [data , setData ] = useState(GAME_LIST);
  
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: "*" })
      : isotope.current.arrange({ filter: `.${filterKey}` });

    if(location.get('search')){
      setData(GAME_LIST.filter(game => game.name.toLowerCase().includes(location.get('search').toLowerCase())));
    }
  }, [filterKey , location]);


  const handleFilterKeyChange = (key) => {
    setFilterKey(key);
  };
  return (
    <div className="shop-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <ShopFilter filter={filter} updateFilter={updateFilter}/> */}
            <ul className="shop-category-list">
              <li
                className="active"
                onClick={(e) => {
                  setActiveClassOnTab(e);
                  handleFilterKeyChange("*");
                }}
              >
                All
              </li>
              <li
                onClick={(e) => {
                  setActiveClassOnTab(e);
                  handleFilterKeyChange("Accessories");
                }}
              >
                Accessories
              </li>
              <li
                onClick={(e) => {
                  setActiveClassOnTab(e);
                  handleFilterKeyChange("PS");
                }}
              >
                PlayStation 5
              </li>
              <li
                onClick={(e) => {
                  setActiveClassOnTab(e);
                  handleFilterKeyChange("XBOX");
                }}
              >
                Xbox
              </li>
            </ul>
          </div>
        </div>

        <div className="row filter-container">
          {data.map((data, index) => (
            <GameCard key={index} data={data}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
