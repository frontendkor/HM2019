import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ProductCard from "./ProductCard/ProductCard";

import addProduct from "../../actions/Cart/addProduct";

// import "./RenderCatalog.sass";

class RenderCatalog extends Component {
  RenderProductCart() {
    const { addProduct, cartData, typeProduct, products } = this.props;
    return products.map(item => {
      return (
        item.ind === typeProduct && (
          <ProductCard
            key={item.id}
            typeProduct={typeProduct}
            ind={item.ind}
            id={item.id}
            title={item.title}
            price={item.price}
            composition={item.composition}
            coffe={item.coffe}
            addProduct={addProduct}
            cartData={cartData}
          />
        )
      );
    });
  }
  render() {
    return <>{this.RenderProductCart()}</>;
  }
}

const mapStateToProps = store => {
  return {
    products: store.catalog.products,
    cartData: store.cartData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: (product, cartData) => dispatch(addProduct(product, cartData))
  };
};

ProductCard.propTypes = {
  typeProduct: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderCatalog);
