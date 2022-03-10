import React from "react";
import { Link } from "react-router-dom";


import CATEGORIES_DATA from "../../data/category.data";

const HomeCategory = () => {
  return (
    <div className="home-category">
      <div className="container">
        <div className="row">
          {CATEGORIES_DATA.map((data, index) => (
            <div className="col-lg-12 mb-4" key={index}>
              <Link to={process.env.PUBLIC_URL + data.link}>
                <div
                  className="home-category-content"
                  style={{ backgroundImage: `url(${data.image})` }}
                >
                  {data.name ? <h1>{data.name}</h1> : <img src={data.logo} alt="logo"/>}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
