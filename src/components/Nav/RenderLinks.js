import React from "react";
import { NavLink } from "react-router-dom";
import {
  Cart,
  Profile,
  Search,
  Delivery,
  Pizza,
  Sushi,
  Burger,
  Drinks,
  Actions
} from "../Ic/Ic";
import { scrollTop } from "../../secondaryFunctions/secondaryFunctions";

const links = [
  {
    name: "Пицца",
    to: "/pizza",
    ic: "Pizza"
  },
  {
    name: "Сеты",
    to: "/sets",
    ic: "Sushi"
  },
  {
    name: "Бургеры",
    to: "/burgers",
    ic: "Burger"
  },
  {
    name: "Напитки",
    to: "/drinks",
    ic: "Drinks"
  },
  {
    name: "Доставка и оплата",
    to: "/delivery-payment",
    ic: "Delivery"
  },
  {
    name: "Акции !",
    to: "/actions",
    ic: "Actions"
  }
];

const links2 = [
  {
    name: "",
    to: "/search",
    ic: "Search"
  },
  {
    name: "",
    to: "/profile",
    ic: "Profile"
  },
  {
    name: "",
    to: "/cart",
    ic: "Cart",
    data: true
  }
];

const RenderLinks = (data, sum) => {
  return data.map(({ name, ic, to, data }) => {
    return (
      <NavLink to={to} className={`link${ic}`} key={ic} onClick={scrollTop}>
        {name && <span>{name}</span>}
        <i className="ic">
          {ic === "Pizza" && <Pizza classis={ic} />}
          {ic === "Sushi" && <Sushi classis={ic} />}
          {ic === "Burger" && <Burger classis={ic} />}
          {ic === "Drinks" && <Drinks classis={ic} />}
          {ic === "Delivery" && <Delivery classis={ic} />}
          {ic === "Actions" && <Actions classis={ic} />}
          {ic === "Search" && <Search classis={ic} />}
          {ic === "Profile" && <Profile classis={ic} />}
          {ic === "Cart" && <Cart classis={ic} />}
        </i>
        {data && <div className="dataCart">{`${sum}p`}</div>}
      </NavLink>
    );
  });
};

export { links, links2, RenderLinks };
