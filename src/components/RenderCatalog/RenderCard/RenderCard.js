import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Card, Toast } from "react-materialize";
import { RenderImg } from "../RenderImg/RenderImg";
import { PizzaSizeBtn } from "../PizzaSizeBtn/PizzaSizeBtn";
import "./RenderCard.sass";

class RenderCard extends Component {
  constructor(props) {
    super(props);
    const { id, typeProduct, price, coffe } = this.props;
    this.state = {
      img: coffe
        ? `data/catalog/img/drinks/coffe.png`
        : `data/catalog/img/${typeProduct}/${id}.png`,
      sizePizza: "25",
      currentPrice: typeProduct === `pizza` ? price[2] : price[0]
    };
    this.pizzaPrice = this.pizzaPrice.bind(this);
    this.addProductCart = this.addProductCart.bind(this);
  }

  // add product to cart
  addProductCart() {
    const { name, id, addProduct, cartData } = this.props;
    const { img, currentPrice, sizePizza } = this.state;
    const product = {
      id: `${id}${sizePizza}`,
      sizePizza: sizePizza ? sizePizza : null,
      name: name,
      img: img,
      price: currentPrice,
      count: 1
    };
    addProduct(product, cartData);
  }

  // change the price by pressing the pizza size button
  pizzaPrice(e) {
    let size = e.currentTarget.innerText;
    let priceNowSet = e.currentTarget.value;
    this.setState({
      sizePizza: parseInt(size),
      currentPrice: +priceNowSet
    });
  }

  render() {
    const { id, name, composition, price, typeProduct } = this.props;
    const { img, currentPrice } = this.state;
    const { pizzaPrice, addProductCart } = this;
    return (
      <Col xl={4} l={4} m={6} s={12}>
        <Card
          header={<RenderImg src={img} typeProduct={typeProduct} />}
          reveal={<p>{composition}</p>}
          title={name}
        >
          {typeProduct === `pizza` && (
            <PizzaSizeBtn id={id} price={price} func={pizzaPrice} />
          )}
          <div className="cardPrice">
            Цена: <span>{currentPrice} p</span>
          </div>
          <div onClick={addProductCart} className="ToastBtnContainer">
            <Toast className="ToastBtn" options={{ html: "Товар добавлен" }}>
              В корзину
            </Toast>
          </div>
        </Card>
      </Col>
    );
  }
}

RenderCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.array.isRequired,
  typeProduct: PropTypes.string.isRequired
};

export default RenderCard;
