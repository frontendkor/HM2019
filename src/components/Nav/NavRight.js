import React from "react";
import { links2, RenderLinks } from "./RenderLinks";

import "./Nav.sass";

const NavRight = props => {
  const { sum, classis } = props;
  return <div className={classis}>{RenderLinks(links2, sum)}</div>;
};

export default NavRight;
