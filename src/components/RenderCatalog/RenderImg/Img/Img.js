import React from "react";
import PropTypes from "prop-types";
import ImageLoader from "react-load-image";
import { LoadingImg } from "../../../Ic/Ic";
import mod from "./Img.module.sass";

export const Img = props => {
  return (
    <ImageLoader className={mod.ImageLoader} src={props.src}>
      <img alt="img" />
      <div>Ошибка</div>
      <div>
        <LoadingImg />
      </div>
    </ImageLoader>
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired
};
