import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { links, RenderLinks } from "./RenderLinks";
import NavRight from "./NavRight";
import { Navbar } from "react-materialize";

import { connect } from "react-redux";
import getCatalog from "../../actions/Catalog/getCatalog";
import initCart from "../../actions/Cart/initCart";

import { scrollTop } from "../../secondaryFunctions/secondaryFunctions";

import "./Nav.sass";

class Nav extends Component {
  componentDidMount() {
    const { getCatalog, initCart } = this.props;
    getCatalog();
    initCart();
  }
  render() {
    const { sum } = this.props;
    return (
      <Navbar className="Nav" alignLinks="left" fixed={true}>
        <NavLink to="/" exact className="link" onClick={scrollTop}>
          <Logo />
        </NavLink>
        {RenderLinks(links, null)}
        <NavRight sum={sum} classis="NavRight" />
      </Navbar>
    );
  }
}

const mapStateToProps = store => {
  return {
    sum: store.cartData.sum
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCatalog: () => dispatch(getCatalog()),
    initCart: () => dispatch(initCart())
  };
};

Nav.propTypes = {
  dataProducts: PropTypes.shape({
    sum: PropTypes.number.isRequired,
    initCart: PropTypes.func.isRequired
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
