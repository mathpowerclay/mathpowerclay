import React, { Component } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { Element, Link } from "react-scroll";

function Cards() {
  return (
    <React.Fragment>
      <div className="cards" id="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <h1>ART IN HEAVEN:</h1>
            <Element id="cards1" name="cards1">
              <ul className="cards__items">
                <CardItem
                  src="https://i.imgur.com/KwznpHF.png"
                  text="POWERglow aka red clay"
                  label="POWERglow"
                  path="POWERglow"
                />
                <CardItem
                  src="https://i.imgur.com/XVOa3sC.png"
                  text="KAOLIN WHITE aka POWERGREEN"
                  label="POWERgreen"
                  path="POWERgreen"
                />
              </ul>
            </Element>
            <Element id="cards2" name="cards2">
              <ul className="cards__items">
                <CardItem
                  src="https://i.imgur.com/U9if9Wc.jpg"
                  text="POWERPINK aka PINK CLAY"
                  label="POWERpink"
                  path="POWERpink"
                />
                <CardItem
                  src="https://i.imgur.com/oe52KpV.jpg"
                  text="ATLAS UNREFINED POWERCLAY"
                  label="ATLAS"
                  path="ATLAS"
                />
                <CardItem
                  src="https://i.imgur.com/nnGQe4r.jpg"
                  text="POWERCLAY POWDER ROOM MAKE UP LINE "
                  label="POWDERroom"
                  path="POWDERroom"
                />
              </ul>
            </Element>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cards;
