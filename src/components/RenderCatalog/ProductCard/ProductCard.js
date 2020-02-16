import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageLoader from "react-load-image";
import { LoadingImg } from "../../Ic/Ic";
import { Col, Card, Toast } from "react-materialize";
import "../RenderCatalog.sass";

import { RenderImg, InitialPrice, PizzaBtn } from "./secondaryFunctions";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    const { ind, price } = this.props;
    this.state = {
      sizePizza: "25",
      priceNow: InitialPrice(ind, price),
      active: InitialPrice(ind, price)
    };
  }
  render() {
    const {
      title,
      composition,
      price,
      typeProduct,
      id,
      ind,
      coffe
    } = this.props;
    const { priceNow, active } = this.state;
    return (
      <Col xl={4} l={4} m={6} s={12}>
        <Card
          header={
            <ImageLoader src={RenderImg(id, ind, coffe)}>
              <img alt="img" />
              <div>Ошибка</div>
              <div>
                <LoadingImg />
              </div>
            </ImageLoader>
          }
          title={title}
          reveal={<p>{composition}</p>}
        >
          {PizzaBtn(typeProduct, price, active, this.pizzaPrice.bind(this))}
          <div className="price">
            Цена: <span>{priceNow} p</span>
          </div>
          <div
            className="cardBtnContainer"
            onClick={this.addProductCart.bind(this)}
          >
            <Toast options={{ html: "Товар добавлен" }}>В корзину</Toast>
          </div>
        </Card>
      </Col>
    );
  }

  // add product to cart
  addProductCart() {
    const { title, id, ind, coffe, addProduct, cartData } = this.props;
    const { priceNow, sizePizza } = this.state;
    const product = {
      id: `${id}${sizePizza}`,
      title: title,
      img: RenderImg(id, ind, coffe),
      price: priceNow,
      count: 1
    };
    if (ind === `pizza`) {
      product.sizePizza = sizePizza;
    }
    addProduct(product, cartData);
  }

  // change the price by pressing the pizza size button
  pizzaPrice(e) {
    let size = e.currentTarget.innerText;
    let priceNowSet = e.currentTarget.value;
    this.setState({
      sizePizza: parseInt(size),
      priceNow: +priceNowSet,
      active: +priceNowSet
    });
  }
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.array.isRequired,
  ind: PropTypes.string.isRequired
};

export default ProductCard;
