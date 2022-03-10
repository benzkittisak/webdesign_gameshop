import React, { useEffect, useState } from "react";

import { getSlideShow } from "../../utils";

import HomeMainSlide from "../../components/home-main-slide/home-main-slide.component";
import Features from "../../components/features/features.component";
import HomeTab from "../../components/home-tab/home-tab.component";

import GAME_LIST from "../../data/game.data";
import HomeCategory from "../../components/home-category/home-category.component";

const HomePage = () => {
  const [dataForSlide, setUpdataForSlide] = useState([]);

  useEffect(() => {
    const tempData = getSlideShow(GAME_LIST);
    setUpdataForSlide(tempData);
  }, []);

  return (
    <div className="home-page">
        <HomeMainSlide data={dataForSlide}/>
        <Features/>
        <HomeTab/>
        <HomeCategory/>
    </div>
  );
};

export default HomePage;
