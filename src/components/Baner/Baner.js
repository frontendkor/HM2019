import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Slider, Slide, Caption } from "react-materialize";
import Logo from "../Logo/Logo";

import Pizza from "./BanerImg/slide1/dyablo-4.png";
import Sushi from "./BanerImg/slide1/sushi-set-3.png";
import Burger from "./BanerImg/slide1/burger.png";

import Set2 from "./BanerImg/slide2/set2.png";
import Sprite from "./BanerImg/slide2/sprite.png";

import Pizza1 from "./BanerImg/slide1/dyablo-4.png";
import Pizza2 from "./BanerImg/slide3/australia.png";
import Pizza3 from "./BanerImg/slide3/bari.png";

import "./Baner.sass";

const options = {
  indicators: true,
  interval: 5000,
  duration: 600,
  height: 450
};

const addClass = () => {
  window.addEventListener("DOMContentLoaded", function() {
    let indicators = document.getElementsByClassName("indicator-item");
    let content = document.getElementsByClassName("slide1Content");
    indicators[0].classList.add("active");
    content[0].classList.add("anim");
    const removeClass = ind => {
      ind.addEventListener("click", () => {
        content[0].classList.remove("anim");
      });
    };
    removeClass(indicators[1]);
    removeClass(indicators[2]);
    indicators[0].addEventListener("click", () => {
      content[0].classList.add("anim");
    });
  });
};

class Baner extends Component {
  amper() {
    return <b className="amper">&</b>;
  }
  componentDidMount() {
    addClass();
  }
  render() {
    const { amper } = this;
    return (
      <Slider options={options}>
        <Slide>
          <div className="slide1Content">
            <Logo br={true} classis="slide1Logo" />
            <h5 className="slide1SubTitle">
              <span>24 часа бесплатная доставка</span>
              ПИЦЦА {amper()} СЕТЫ {amper()} БУРГЕРЫ {amper()} НАПИТКИ
            </h5>
          </div>
          <div className="darken1" />
          <div className="slide1Img">
            <img src={Pizza} alt="img" className="Pizza" />
            <img src={Sushi} alt="img" className="Sushi" />
            <img src={Burger} alt="img" className="Burger" />
          </div>
        </Slide>
        <Slide>
          <Caption placement="left">
            <div className="slide2Content">
              <h3 className="slide2Title">ПОДАРКИ !</h3>
              <h5 className="light grey-text text-lighten-3 slide2Text">
                Сделай заказ на суммму более 50р. и получи{" "}
                <nobr>Сет №2 в подарок!</nobr>
              </h5>
              <h5 className="light grey-text text-lighten-3 slide2Text">
                Сделай заказ на суммму более 40р. и получи{" "}
                <nobr>Спрайт 1.5л в подарок !</nobr>
              </h5>
              <Link to="/actions" className="slide2Btn">
                Подробно
              </Link>
            </div>
          </Caption>
          <div className="darken2" />
          <div className="slide2Img">
            <img src={Set2} alt="img" className="Set2" />
            <img src={Sprite} alt="img" className="Sprite" />
          </div>
        </Slide>
        <Slide>
          <Caption placement="right">
            <div className="slide3Content">
              <h3 className="slide3Title">Пицца БЕСПЛАТНО!</h3>
              <h5 className="light grey-text text-lighten-3 slide3Text">
                Закажи 3 пиццы и получи одну из них БЕСПЛАТНО!
              </h5>
              <Link to="/actions" className="slide3Btn">
                Подробно
              </Link>
            </div>
          </Caption>
          <div className="darken3" />
          <div className="slide3Img">
            <img src={Pizza1} alt="img" className="Pizza1" />
            <img src={Pizza2} alt="img" className="Pizza2" />
            <img src={Pizza3} alt="img" className="Pizza3" />
          </div>
        </Slide>
      </Slider>
    );
  }
}

export default Baner;
