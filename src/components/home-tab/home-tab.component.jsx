import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import BestSell from "../bestSell/best-sell.component";
import NewGame from "../new-game/new-game.component";

import { getBestSell, getNewGame, getGameInfo } from "../../utils";
import TabInfo from "../tab-info/tab-info.component";

const HomeTab = () => {
  const [showData, setShowData] = useState(null);
  const [gameId, setGameId] = useState(null);

  useEffect(() => {
    setShowData(getGameInfo(gameId));
  }, [gameId]);

  return (
    <div className="py-4">
      <Tab.Container defaultActiveKey={"bestSell"}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Nav variant="pill" className="home-tab-section text-center">
                <Nav.Item>
                  <Nav.Link
                    eventKey="newGame"
                    onClick={() => setShowData(null)}
                  >
                    <h6>ใหม่ยอดนิยม</h6>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="bestSell"
                    onClick={() => setShowData(null)}
                  >
                    <h6>ขายดี</h6>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
        </div>
        <div className="home-tab">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <Tab.Content>
                  <Tab.Pane eventKey="bestSell">
                    <BestSell data={getBestSell()} loadGame={setGameId} />
                    <div className="tab-more">
                      <Link
                        to={process.env.PUBLIC_URL + "/shop"}
                        className="btn-tab-more"
                      >
                        ดูเพิ่มเติม
                      </Link>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="newGame">
                    <NewGame data={getNewGame()} loadGame={setGameId} />
                    <div className="tab-more">
                      <Link
                        to={process.env.PUBLIC_URL + "/shop"}
                        className="btn-tab-more"
                      >
                        ดูเพิ่มเติม
                      </Link>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
              <div className="col-lg-4">
                <TabInfo data={showData} />
              </div>
            </div>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};

export default HomeTab;
