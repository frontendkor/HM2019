import React, { Component } from "react";
import PropTypes from "prop-types";
import Btn from "../Btn/Btn";
import { Col, Collection, CollectionItem } from "react-materialize";
import CartItem from "./CartItem";

import { scrollTop } from "../../secondaryFunctions/secondaryFunctions";

import { connect } from "react-redux";
import removeProduct from "../../actions/Cart/removeProduct";
import amountProduct from "../../actions/Cart/amountProduct";

import "./Cart.sass";

class Cart extends Component {
  renderCartItem() {
    const { removeProduct, amountProduct, cartData } = this.props;
    const { cart } = cartData;
    return cart.map(({ id, img, price, title, sizePizza, count }) => {
      return (
        <CartItem
          key={id}
          id={id}
          img={img}
          price={price}
          title={title}
          count={count}
          sizePizza={sizePizza}
          removeProduct={removeProduct}
          amountProduct={amountProduct}
          cartData={cartData}
        />
      );
    });
  }
  render() {
    const { cart, sum } = this.props.cartData;
    return (
      <Col m={12} s={12} className="CartCollection">
        <Collection>
          {!cart || cart.length === 0 ? (
            <p className="CartEmpty">Нет товаров</p>
          ) : (
            <>
              {this.renderCartItem()}
              <CollectionItem>
                <div className="CartBtn">
                  <Btn
                    href="/sets"
                    title="Продолжить покупки"
                    size="medium"
                    link={true}
                    onClick={scrollTop}
                  />
                </div>
                <div className="CartBtn">
                  <Btn
                    href="/profile"
                    title="Оформить заказ"
                    size="medium"
                    link={true}
                    onClick={scrollTop}
                  />
                </div>
                <div className="CartSum">
                  <span>Итого, к оплате</span>
                  <span className="Sum"> {sum} р</span>
                </div>
              </CollectionItem>
            </>
          )}
        </Collection>
      </Col>
    );
  }
}

const mapStateToProps = store => {
  return {
    cartData: store.cartData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: (product, cartData) =>
      dispatch(removeProduct(product, cartData)),
    amountProduct: (product, move, cartData) =>
      dispatch(amountProduct(product, move, cartData))
  };
};

Cart.propTypes = {
  cartData: PropTypes.object.isRequired,
  removeProduct: PropTypes.func.isRequired,
  amountProduct: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
