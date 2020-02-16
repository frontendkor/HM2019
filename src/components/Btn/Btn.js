import React from "react";
import { Link } from "react-router-dom";

import mod from "./Btn.module.sass";

const Btn = props => {
  const { link, href, button, submit, title, size, target, onClick } = props;
  const sizeBtn = () => {
    if (size === "min") {
      return mod.min;
    }
    if (size === "medium") {
      return mod.medium;
    }
    if (size === "big") {
      return mod.big;
    }
  };
  const renderBtn = () => {
    if (button) {
      return submit ? (
        <button
          type="submit"
          onClick={onClick && onClick}
          className={sizeBtn()}
        >
          {title}
        </button>
      ) : (
        <button
          type="button"
          onClick={onClick && onClick}
          className={sizeBtn()}
        >
          {title}
        </button>
      );
    }
    if (link) {
      return target ? (
        <a
          href={href}
          target={target && "_blank"}
          rel={target && "noreferrer noopener"}
          className={sizeBtn()}
          onClick={onClick && onClick}
        >
          {title}
        </a>
      ) : (
        <Link to={href} className={sizeBtn()} onClick={onClick && onClick}>
          {title}
        </Link>
      );
    }
  };
  return <>{renderBtn()}</>;
};
export default Btn;
