import React from "react";

// for product cards (coffe) one picture
const RenderImg = (id, ind, coffe) => {
  return coffe
    ? `data/catalog/img/drinks/coffe.png`
    : `data/catalog/img/${ind}/${id}.png`;
};

// original price for product cards (pizza)
const InitialPrice = (ind, price) => {
  if (ind === "pizza") {
    return price[2];
  } else {
    return price[0];
  }
};

// for product cards (pizza) add size buttons
const PizzaBtn = (typeProduct, price, active, funk) => {
  return typeProduct === `pizza` ? (
    <div className="sizePizza">
      <button
        type="button"
        className={`sizePizzaBtn ${AddClassBtn(price[0], active)}`}
        value={price[0]}
        onClick={funk}
      >
        60см
      </button>
      <button
        type="button"
        className={`sizePizzaBtn ${AddClassBtn(price[1], active)}`}
        value={price[1]}
        onClick={funk}
      >
        45см
      </button>
      <button
        type="button"
        className={`sizePizzaBtn ${AddClassBtn(price[2], active)}`}
        value={price[2]}
        onClick={funk}
      >
        25см
      </button>
    </div>
  ) : null;
};

// add a class to the active pizza size button
const AddClassBtn = (val, active) => {
  return active === val ? "active" : "";
};

export { RenderImg, InitialPrice, PizzaBtn, AddClassBtn };
