import React, { Component } from "react";
import PropTypes from "prop-types";
import mod from "./PizzaSizeBtn.module.sass";

export const PizzaSizeBtn = props => {
  const clickBtn = params => {
    const { funk, active } = props;
    funk(active);
  };
  return (
    <div className={mod.SizePizza}>
      <button
        type="button"
        className={mod.SizePizzaBtn}
        value={props.price[0]}
        onClick={clickBtn}
      >
        60см
      </button>
      <button
        type="button"
        className={mod.SizePizzaBtn}
        value={props.price[1]}
        onClick={clickBtn}
      >
        45см
      </button>
      <button
        type="button"
        className={mod.SizePizzaBtn}
        value={props.price[2]}
        onClick={clickBtn}
      >
        25см
      </button>
    </div>
  );
};
