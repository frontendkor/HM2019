import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductCard from "../RenderCatalog/ProductCard/ProductCard";

import Btn from "../Btn/Btn";
import { connect } from "react-redux";
import addProduct from "../../actions/Cart/addProduct";

import "./Search.sass";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      result: [],
      resultNo: false
    };
  }
  inputChange(e) {
    const { value } = e.currentTarget;
    this.setState({ inputValue: value });
    this.setState({ result: [] });
    this.setState({ resultNo: false });
  }
  onSearch(e) {
    e.preventDefault();
    const { inputValue } = this.state;
    const { products } = this.props.dataProducts;
    let result = [];
    products.map(item => {
      let { composition } = item;
      return (
        composition.toLowerCase().indexOf(inputValue) > -1 && result.push(item)
      );
    });
    result.length <= 0
      ? this.setState({ resultNo: true })
      : this.setState({ result: result });
  }
  renderResult() {
    const { result } = this.state;
    const { addProduct, cartData } = this.props;
    return result.map(item => {
      return (
        <ProductCard
          key={item.id}
          ind={item.ind}
          id={item.id}
          title={item.title}
          price={item.price}
          composition={item.composition}
          coffe={item.coffe}
          addProduct={addProduct}
          cartData={cartData}
        />
      );
    });
  }
  render() {
    const { inputValue, result, resultNo } = this.state;
    return (
      <>
        <form className="SearchForm">
          <div className="SearchFormInputContainer">
            <input
              type="search"
              placeholder="Введите ингридиент"
              value={inputValue}
              onChange={this.inputChange.bind(this)}
            />
          </div>

          <div className="SearchFormBtnContainer">
            <Btn
              button={true}
              submit={true}
              title="Найти"
              size="medium"
              onClick={this.onSearch.bind(this)}
            />
          </div>
        </form>
        <h5 className="SearchFormResult">Результаты поиска</h5>
        {result.length > 0 && this.renderResult()}
        {resultNo && <p className="SearchFormResultNo">Ни чего не найдено</p>}
        {!resultNo && result.length <= 0 ? (
          <p className="SearchFormResultDots">...</p>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    dataProducts: store.catalog,
    cartData: store.cartData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: (product, cart) => dispatch(addProduct(product, cart))
  };
};

Search.propTypes = {
  dataProducts: PropTypes.shape({
    products: PropTypes.array.isRequired
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
